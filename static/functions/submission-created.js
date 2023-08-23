/* eslint-disable no-console */
/* eslint-disable camelcase */
require('dotenv').config();
const axios = require('axios');
const { parse } = require('querystring');

exports.handler = async (event, context) => {
  const data = JSON.parse(event.body).payload;
  const form_name = data.data['form-name'];
  const referrer = event.headers.referer;
  console.log(data);
  console.log(event, context);
  console.log(form_name);
  console.log(referrer);
  return {
    statusCode: 200,
    body: JSON.stringify({ message: 'This is submission created' }),
  };
};
