require('dotenv').config();
const axios = require('axios');

const apiKey = process.env.KLAVIYO_API_KEY;
const listId = process.env.KLAVIYO_LIST_ID; // update to not-suport@tag

exports.handler = async (event, context, callback) => {
  // ENDPOINT:
  // https://a.klaviyo.com/api/v2/list/${listId}/subscribe
  // REQUEST BODY:
  //   {
  //     "api_key": apiKey,
  //     "profiles": [
  //         {
  //             "email": event.payload.email
  //         }
  //     ]
  // }
  // callback(null, {
  //   statusCode: 200,
  //   body: "Hello, World"
  //   });
  // parse event and handle contact form?
  const data = JSON.parse(event.body).payload;
  console.log('DATA', JSON.stringify(data));
  console.log('EMAIL', data.email);
  callback(null, { statusCode: 200 });
};
