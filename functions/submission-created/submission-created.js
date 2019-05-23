/* eslint-disable */
const fetch = require('node-fetch');
exports.handler = async function(event, context) {
  try {
    const key = process.env.PIPEDRIVE_KEY;

    // only allow post method
    if (event.httpMethod !== 'POST') {
      return { statusCode: 403 };
    }

    const formData = JSON.parse(event.body);
    const { name, email, phone, website, comments } = formData;
    // check for required fields
    if (!name || !email) {
      return { statusCode: 400 };
    }

    const names = name.split(' ');
    // eslint-disable-next-line prefer-const
    let [first_name, last_name] = names;
    if (names.length > 2) {
      last_name = names[names.length - 1];
    }
    // add person to pipedrive
    fetch(`https://api.pipedrive.com/v1/persons?api_token=${key}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name,
        first_name,
        last_name,
        email,
        phone,
        '7ec70f1ef58548a7555a66c6677cfd8028529568': website,
      }),
    })
      .then(data => data.json())
      .then(person => {
        const person_id = person.id;
        fetch(`https://api.pipedrive.com/v1/deals?api_token=${key}`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            title: `[Webform] Deal for ${name}`,
            person_id,
            cd2d5edd665b516895a90328d2b9d225c23be2b6: website,
            bf37b2226ef4c418719adcbd9ada3d4b731ba8b4: comments,
          }),
        });
      })
      .catch(err => {
        console.log(err);
        return {
          statusCode: 500,
        };
      });
    return { statusCode: 201 };
  } catch (err) {
    console.log(err); // output to netlify function log
    return {
      statusCode: 500,
      body: JSON.stringify({ msg: err.message }), // Could be a custom message or object i.e. JSON.stringify(err)
    };
  }
};
