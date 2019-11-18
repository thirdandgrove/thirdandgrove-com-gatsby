/* eslint-disable prettier/prettier */
/* eslint-disable no-console */
/* eslint-disable camelcase */
require('dotenv').config();
const axios = require('axios');

exports.handler = async (event, _context, callback) => {
  const data = JSON.parse(event.body).payload;
  const { form_name } = data;
  if (form_name === 'contact') {
    // handle form contact
    const { PIPEDRIVE_USER_ID, PIPEDRIVE_KEY } = process.env;

    // pipedrive custom fields
    const fields = {
      dealDetails: '48bb1f3ddac751ddcca115d1340e6a47983d3687',
      dealLeadSource: '30c4f33c7c7030fdd3360f5681851efb5de42712',
      personWebsite: '7ec70f1ef58548a7555a66c6677cfd8028529568',
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
      return;
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
          title: `[Webform] Deal for ${name} <${email}>`,
          [fields.dealLeadSource]: '34',
          person_id,
          [fields.dealDetails]: comments,
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
  }

  if (form_name === 'newsletter') {
    // handle form newsletter
    const { KLAVIYO_API_KEY, KLAVIYO_LIST_ID } = process.env;
    const { email } = data;
    await axios({
      url: `https://a.klaviyo.com/api/v2/list/${KLAVIYO_LIST_ID}/subscribe`,
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      data: JSON.stringify({
        api_key: KLAVIYO_API_KEY,
        profiles: [{ email }],
      }),
    }).catch(console.error);
  }

  callback(null, { statusCode: 200 });
};
