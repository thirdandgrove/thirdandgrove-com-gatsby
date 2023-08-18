/* eslint-disable no-console */
/* eslint-disable camelcase */
require('dotenv').config();
const axios = require('axios');

const handler = async (event, context) => {
  try {
    const data = JSON.parse(event.body);
    const { token } = data;
    const response = await axios.post(
      `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.SECRET_KEY}&response=${token}`
    );
    return {
      statusCode: 200,
      body: JSON.stringify({
        success: true,
        message: 'Token successfully verified',
        data: response.data,
      }),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Failed fetching data' }),
    };
  }
};

export { handler };
