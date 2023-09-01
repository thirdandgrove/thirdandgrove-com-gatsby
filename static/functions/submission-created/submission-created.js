// // optionally configure local env vars
require('dotenv').config();
const axios = require('axios');

const handler = async event => {
  console.log(event);
  const data = JSON.parse(event.body).payload;
  const form_name = data.data['form-name']
    ? data.data['form-name']
    : data['form_name'];
  const referrer = event.headers.referer
    ? event.headers.referer
    : data.data.referrer;
  console.log(`Received a submission: ${form_name}`);

  if (referrer.split('/')[2].indexOf('thirdandgrove') === -1) {
    return {
      statusCode: 422,
      body: String('Beep, boop, you just got serverless.'),
    };
  }

  // PIPEDRIVE VARS
  const {
    PIPEDRIVE_USER_ID,
    PIPEDRIVE_KEY,
    DEAL_DETAILS,
    DEAL_LEAD_SOURCE,
    PERSON_WEBSITE,
  } = process.env;

  /** Contact Form */
  if (form_name === 'contact-update') {
    // pipedrive custom fields
    const fields = {
      dealDetails: DEAL_DETAILS,
      dealLeadSource: DEAL_LEAD_SOURCE,
      personWebsite: PERSON_WEBSITE,
    };

    const humanFields = data.ordered_human_fields.reduce((acc, item) => {
      acc[item.name] = item.value;
      return acc;
    }, {});

    const {
      howDidYouHearAboutUs,
      workEmail,
      whatDidYouNeedHelpWith,
    } = humanFields;

    let person;
    let deal;
    // check for required fields
    if (!howDidYouHearAboutUs || !workEmail || !whatDidYouNeedHelpWith) {
      console.error('error, no inputs sent.', {
        howDidYouHearAboutUs,
        workEmail,
        whatDidYouNeedHelpWith,
      });
      return;
    }

    try {
      person = await axios({
        url: `https://api.pipedrive.com/v1/persons?api_token=${PIPEDRIVE_KEY}`,
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        data: JSON.stringify({
          howDidYouHearAboutUs,
          workEmail,
          whatDidYouNeedHelpWith,
          owner_id: PIPEDRIVE_USER_ID,
        }),
      });
    } catch (err) {
      console.log('error creating person', err);
      callback(null, { statusCode: 200 });
    }

    const person_id = person.data && person.data.data.id;
    try {
      deal = await axios({
        url: `https://api.pipedrive.com/v1/deals?api_token=${PIPEDRIVE_KEY}`,
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        data: JSON.stringify({
          title: `[Webform] Deal for <${workEmail}>`,
          [fields.dealLeadSource]: '34',
          person_id,
          user_id: PIPEDRIVE_USER_ID,
        }),
      });
    } catch (err) {
      console.error('error creating deal', err);
      callback(null, { statusCode: 200 });
    }

    const deal_id = deal.data && deal.data.data.id;
    try {
      await axios({
        url: `https://api.pipedrive.com/v1/notes?api_token=${PIPEDRIVE_KEY}`,
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        data: JSON.stringify({
          content: website,
          deal_id,
        }),
      });
    } catch (err) {
      console.error('error creating note', err);
      callback(null, { statusCode: 200 });
    }

    const { KLAVIYO_API_KEY, KLAVIYO_MAIN_LIST_ID } = process.env;

    await axios({
      url: `https://a.klaviyo.com/api/v2/list/${KLAVIYO_MAIN_LIST_ID}/subscribe`,
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      data: JSON.stringify({
        api_key: KLAVIYO_API_KEY,
        profiles: [
          {
            first_name,
            last_name,
            email,
            phone,
            website,
            comments,
            url: referrer,
            form: form_name,
          },
        ],
      }),
    }).catch(console.error);
  }
  /** Contact Form */

  /** Contact Form */
  if (form_name === 'contact') {
    // pipedrive custom fields
    const fields = {
      dealDetails: DEAL_DETAILS,
      dealLeadSource: DEAL_LEAD_SOURCE,
      personWebsite: PERSON_WEBSITE,
    };

    const humanFields = data.ordered_human_fields.reduce((acc, item) => {
      acc[item.name] = item.value;
      return acc;
    }, {});
    const { name, email, phone, website, comments } = humanFields;
    const { first_name, last_name } = data;

    let person;
    let deal;
    // check for required fields
    if (!name || !email || !website) {
      console.error('error, no name, email or website sent.', {
        name,
        email,
        website,
      });
      return {
        statusCode: 422,
        body: String('error, no name, email or website sent.'),
      };
    }

    try {
      person = await axios({
        url: `https://api.pipedrive.com/v1/persons?api_token=${PIPEDRIVE_KEY}`,
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        data: JSON.stringify({
          name,
          first_name,
          last_name,
          email,
          phone,
          [fields.personWebsite]: website,
          owner_id: PIPEDRIVE_USER_ID,
        }),
      });
      console.log(`Submitted:\n ${form_name}`);
    } catch (error) {
      console.error('error creating note', error);
      return { statusCode: 422, body: String(error) };
    }

    const person_id = person.data && person.data.data.id;

    try {
      deal = await axios({
        url: `https://api.pipedrive.com/v1/deals?api_token=${PIPEDRIVE_KEY}`,
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        data: JSON.stringify({
          title: `[Webform] Deal for ${name} <${email}>`,
          [fields.dealLeadSource]: '34',
          person_id,
          [fields.dealDetails]: comments,
          user_id: PIPEDRIVE_USER_ID,
        }),
      });
      console.log(`Submitted:\n ${form_name}`);
    } catch (error) {
      console.error('error creating note', error);
      return { statusCode: 422, body: String(error) };
    }

    const deal_id = deal.data && deal.data.data.id;

    try {
      await axios({
        url: `https://api.pipedrive.com/v1/notes?api_token=${PIPEDRIVE_KEY}`,
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        data: JSON.stringify({
          content: website,
          deal_id,
        }),
      });
      console.log(`Submitted:\n ${form_name}`);
    } catch (error) {
      console.error('error creating note', error);
      return { statusCode: 422, body: String(error) };
    }

    const { KLAVIYO_API_KEY, KLAVIYO_MAIN_LIST_ID } = process.env;
    try {
      await axios({
        url: `https://a.klaviyo.com/api/v2/list/${KLAVIYO_MAIN_LIST_ID}/subscribe`,
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        data: JSON.stringify({
          api_key: KLAVIYO_API_KEY,
          profiles: [
            {
              first_name,
              last_name,
              email,
              phone,
              website,
              comments,
              url: referrer,
              form: form_name,
            },
          ],
        }),
      });
      console.log(`Submitted:\n ${form_name}`);
    } catch (error) {
      console.error('error creating note', error);
      return { statusCode: 422, body: String(error) };
    }
  }
  /** Contact Form */

  /** Drupal Support Form */
  if (form_name === 'drupal-support') {
    // pipedrive custom fields
    const fields = {
      dealDetails: DEAL_DETAILS,
      dealLeadSource: DEAL_LEAD_SOURCE,
      personWebsite: PERSON_WEBSITE,
    };

    const humanFields = data.ordered_human_fields.reduce((acc, item) => {
      acc[item.name] = item.value;
      return acc;
    }, {});
    const { name, email, phone, website, comments } = humanFields;
    const { first_name, last_name } = data;

    let person;
    let deal;
    // check for required fields
    if (!name || !email || !website) {
      console.error('error, no name, email or website sent.', {
        name,
        email,
        website,
      });
      return {
        statusCode: 422,
        body: JSON.stringify({
          error: 'error, no name, email or website sent.',
        }),
      };
    }

    try {
      person = await axios({
        url: `https://api.pipedrive.com/v1/persons?api_token=${PIPEDRIVE_KEY}`,
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        data: JSON.stringify({
          name,
          first_name,
          last_name,
          email,
          phone,
          [fields.personWebsite]: website,
          owner_id: PIPEDRIVE_USER_ID,
        }),
      });
      console.log(`Submitted:\n ${form_name}`);
    } catch (error) {
      console.log('error creating person', error);
      return { statusCode: 422, body: String(error) };
    }

    const person_id = person.data && person.data.data.id;
    try {
      deal = await axios({
        url: `https://api.pipedrive.com/v1/deals?api_token=${PIPEDRIVE_KEY}`,
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        data: JSON.stringify({
          title: `[Drupal Support ] Deal for ${name} <${email}>`,
          [fields.dealLeadSource]: '98',
          person_id,
          [fields.dealDetails]: comments,
          user_id: PIPEDRIVE_USER_ID,
        }),
      });
      console.log(`Submitted:\n ${form_name}`);
    } catch (error) {
      console.error('error creating deal', error);
      return { statusCode: 422, body: String(error) };
    }

    const deal_id = deal.data && deal.data.data.id;
    try {
      await axios({
        url: `https://api.pipedrive.com/v1/notes?api_token=${PIPEDRIVE_KEY}`,
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        data: JSON.stringify({
          content: website,
          deal_id,
        }),
      });
      console.log(`Submitted:\n ${form_name}`);
    } catch (error) {
      console.error('error creating note', error);
      return { statusCode: 422, body: String(error) };
    }

    const { KLAVIYO_API_KEY, KLAVIYO_MAIN_LIST_ID } = process.env;
    try {
      await axios({
        url: `https://a.klaviyo.com/api/v2/list/${KLAVIYO_MAIN_LIST_ID}/subscribe`,
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        data: JSON.stringify({
          api_key: KLAVIYO_API_KEY,
          profiles: [
            {
              first_name,
              last_name,
              email,
              phone,
              website,
              comments,
              url: referrer,
              form: form_name,
            },
          ],
        }),
      });
      console.log(`Submitted:\n ${form_name}`);
    } catch (error) {
      console.error('error creating deal', error);
      return { statusCode: 422, body: String(error) };
    }
  }
  /** Drupal Support Form */

  /** Shopify Plus Form */
  if (form_name === 'shopify-support') {
    // pipedrive custom fields
    const fields = {
      dealDetails: DEAL_DETAILS,
      dealLeadSource: DEAL_LEAD_SOURCE,
      personWebsite: PERSON_WEBSITE,
    };

    const humanFields = data.ordered_human_fields.reduce((acc, item) => {
      acc[item.name] = item.value;
      return acc;
    }, {});
    const { name, email, phone, website, comments } = humanFields;
    const { first_name, last_name } = data;

    let person;
    let deal;
    // check for required fields
    if (!name || !email || !website) {
      console.error('error, no name, email or website sent.', {
        name,
        email,
        website,
      });
      return {
        statusCode: 422,
        body: JSON.stringify({
          error: 'error, no name, email or website sent.',
        }),
      };
    }

    try {
      person = await axios({
        url: `https://api.pipedrive.com/v1/persons?api_token=${PIPEDRIVE_KEY}`,
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        data: JSON.stringify({
          name,
          first_name,
          last_name,
          email,
          phone,
          [fields.personWebsite]: website,
          owner_id: PIPEDRIVE_USER_ID,
        }),
      });
      console.log(`Submitted:\n ${form_name}`);
    } catch (error) {
      console.error('error creating deal', error);
      return { statusCode: 422, body: String(error) };
    }

    const person_id = person.data && person.data.data.id;
    try {
      deal = await axios({
        url: `https://api.pipedrive.com/v1/deals?api_token=${PIPEDRIVE_KEY}`,
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        data: JSON.stringify({
          title: `[Shopify Plus] Deal for ${name} <${email}>`,
          [fields.dealLeadSource]: '98',
          person_id,
          [fields.dealDetails]: comments,
          user_id: PIPEDRIVE_USER_ID,
        }),
      });
      console.log(`Submitted:\n ${form_name}`);
    } catch (error) {
      console.error('error creating deal', error);
      return { statusCode: 422, body: String(error) };
    }

    const deal_id = deal.data && deal.data.data.id;
    try {
      await axios({
        url: `https://api.pipedrive.com/v1/notes?api_token=${PIPEDRIVE_KEY}`,
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        data: JSON.stringify({
          content: website,
          deal_id,
        }),
      });
      console.log(`Submitted:\n ${form_name}`);
    } catch (error) {
      console.error('error creating deal', error);
      return { statusCode: 422, body: String(error) };
    }

    const { KLAVIYO_API_KEY, KLAVIYO_MAIN_LIST_ID } = process.env;
    try {
      await axios({
        url: `https://a.klaviyo.com/api/v2/list/${KLAVIYO_MAIN_LIST_ID}/subscribe`,
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        data: JSON.stringify({
          api_key: KLAVIYO_API_KEY,
          profiles: [
            {
              first_name,
              last_name,
              email,
              phone,
              website,
              comments,
              url: referrer,
              form: form_name,
            },
          ],
        }),
      });
      console.log(`Submitted:\n ${form_name}`);
    } catch (error) {
      console.error('error creating deal', error);
      return { statusCode: 422, body: String(error) };
    }
  }
  /** Shopify Plus Form */

  /** DrupalCon Contact Form */
  if (form_name === 'drupalcon') {
    // pipedrive custom fields
    const fields = {
      dealDetails: DEAL_DETAILS,
      dealLeadSource: DEAL_LEAD_SOURCE,
      personWebsite: PERSON_WEBSITE,
    };

    const humanFields = data.ordered_human_fields.reduce((acc, item) => {
      acc[item.name] = item.value;
      return acc;
    }, {});
    const { name, email, phone, website, comments } = humanFields;
    const { first_name, last_name } = data;

    let person;
    let deal;
    // check for required fields
    if (!name || !email || !website) {
      console.error('error, no name, email or website sent.', {
        name,
        email,
        website,
      });
      return {
        statusCode: 422,
        body: JSON.stringify({
          error: 'error, no name, email or website sent.',
        }),
      };
    }

    try {
      person = await axios({
        url: `https://api.pipedrive.com/v1/persons?api_token=${PIPEDRIVE_KEY}`,
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        data: JSON.stringify({
          name,
          first_name,
          last_name,
          email,
          phone,
          [fields.personWebsite]: website,
          owner_id: PIPEDRIVE_USER_ID,
        }),
      });
      console.log(`Submitted:\n ${form_name}`);
    } catch (error) {
      console.error('error creating deal', error);
      return { statusCode: 422, body: String(error) };
    }

    const person_id = person.data && person.data.data.id;
    try {
      deal = await axios({
        url: `https://api.pipedrive.com/v1/deals?api_token=${PIPEDRIVE_KEY}`,
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        data: JSON.stringify({
          title: `[DrupalCon] Deal for ${name} <${email}>`,
          [fields.dealLeadSource]: '98',
          person_id,
          [fields.dealDetails]: comments,
          user_id: PIPEDRIVE_USER_ID,
        }),
      });
      console.log(`Submitted:\n ${form_name}`);
    } catch (error) {
      console.error('error creating deal', error);
      return { statusCode: 422, body: String(error) };
    }

    const deal_id = deal.data && deal.data.data.id;
    try {
      await axios({
        url: `https://api.pipedrive.com/v1/notes?api_token=${PIPEDRIVE_KEY}`,
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        data: JSON.stringify({
          content: website,
          deal_id,
        }),
      });
      console.log(`Submitted:\n ${form_name}`);
    } catch (error) {
      console.error('error creating deal', error);
      return { statusCode: 422, body: String(error) };
    }

    const { KLAVIYO_API_KEY, KLAVIYO_MAIN_LIST_ID } = process.env;

    try {
      await axios({
        url: `https://a.klaviyo.com/api/v2/list/${KLAVIYO_MAIN_LIST_ID}/subscribe`,
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        data: JSON.stringify({
          api_key: KLAVIYO_API_KEY,
          profiles: [
            {
              first_name,
              last_name,
              email,
              phone,
              website,
              comments,
              url: referrer,
              form: form_name,
            },
          ],
        }),
      });
      console.log(`Submitted:\n ${form_name}`);
    } catch (error) {
      console.error('error creating deal', error);
      return { statusCode: 422, body: String(error) };
    }
  }
  /** DrupalCon Contact Form */

  /** Newsletter Form */
  if (form_name === 'newsletter') {
    const { email } = data;
    const {
      KLAVIYO_API_KEY,
      KLAVIYO_LIST_ID,
      KLAVIYO_MAIN_LIST_ID,
    } = process.env;

    try {
      await axios({
        url: `https://a.klaviyo.com/api/v2/list/${KLAVIYO_LIST_ID}/subscribe`,
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        data: JSON.stringify({
          api_key: KLAVIYO_API_KEY,
          profiles: [{ email, url: referrer }],
        }),
      });
      console.log(`Submitted:\n ${form_name}`);
    } catch (error) {
      console.error('error creating note', error);
      return { statusCode: 422, body: String(error) };
    }

    /** SEND Newsletter TO MAIN LIST */
    try {
      await axios({
        url: `https://a.klaviyo.com/api/v2/list/${KLAVIYO_MAIN_LIST_ID}/subscribe`,
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        data: JSON.stringify({
          api_key: KLAVIYO_API_KEY,
          profiles: [{ email, url: referrer }],
        }),
      });
      console.log(`Submitted:\n ${form_name}`);
    } catch (error) {
      console.error('error creating note', error);
      return { statusCode: 422, body: String(error) };
    }
  }
  /** Newsletter Form */

  /** acquia-engage Form */
  if (form_name === 'acquia-engage') {
    const { email } = data;
    const { KLAVIYO_API_KEY, KLAVIYO_LIST_ID_ACQUIA_ENGAGE } = process.env;
    try {
      await axios({
        url: `https://a.klaviyo.com/api/v2/list/${KLAVIYO_LIST_ID_ACQUIA_ENGAGE}/subscribe`,
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        data: JSON.stringify({
          api_key: KLAVIYO_API_KEY,
          profiles: [{ email, url: referrer }],
        }),
      });
      console.log(`Submitted:\n ${form_name}`);
    } catch (error) {
      console.error('error creating note', error);
      return { statusCode: 422, body: String(error) };
    }
  }
  /** acquia-engage Form */

  /** drupalcon Form */
  if (form_name === 'drupalcon-swag-form') {
    // handle form drupalcon
    const {
      email,
      name,
      addressOne,
      addressTwo,
      city,
      state,
      country,
      zipcode,
    } = data.data;

    const { KLAVIYO_API_KEY, KLAVIYO_LIST_ID_DRUPALCON } = process.env;

    try {
      await axios({
        url: `https://a.klaviyo.com/api/v2/list/${KLAVIYO_LIST_ID_DRUPALCON}/subscribe`,
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        data: JSON.stringify({
          api_key: KLAVIYO_API_KEY,
          profiles: [
            {
              email,
              name,
              addressOne,
              addressTwo,
              city,
              state,
              country,
              zipcode,
              url: referrer,
            },
          ],
        }),
      });
      console.log(`Submitted:\n ${form_name}`);
    } catch (error) {
      console.error('error creating note', error);
      return { statusCode: 422, body: String(error) };
    }
  }
  /** drupalcon Form */

  /** e-book Form */
  if (form_name === 'ebook-form') {
    const { email, company } = data.data;
    const { KLAVIYO_API_KEY, KLAVIYO_LIST_ID_EBOOK } = process.env;
    try {
      await axios({
        url: `https://a.klaviyo.com/api/v2/list/${KLAVIYO_LIST_ID_EBOOK}/subscribe`,
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        data: JSON.stringify({
          api_key: KLAVIYO_API_KEY,
          profiles: [{ email, company, url: referrer }],
        }),
      });
      console.log(`Submitted:\n ${form_name}`);
    } catch (error) {
      console.error('error creating note', error);
      return { statusCode: 422, body: String(error) };
    }
  }
  /** e-book Form */

  return {
    statusCode: 200,
    body: JSON.stringify({}),
  };

  // try {
  //   const response = await fetch(
  //     'https://api.buttondown.email/v1/subscribers',
  //     {
  //       method: 'POST',
  //       headers: {
  //         Authorization: `Token ${EMAIL_TOKEN}`,
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify({ email }),
  //     }
  //   );
  //   const data = await response.json();
  //   console.log(`Submitted to Buttondown:\n ${data}`);
  // } catch (error) {
  //   return { statusCode: 422, body: String(error) };
  // }
};

module.exports = { handler };
