/* eslint-disable no-console */
/* eslint-disable camelcase */
import 'dotenv/config';
import axios from 'axios';

export default async function verify(req, res) {
  try {
    const { token } = req.body;
    const response = await axios.post(
      `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.SECRET_KEY}&response=${token}`
    );
    console.log(response.data);
    return res.send({
      body: JSON.stringify({
        success: true,
        message: 'Token successfully verified',
        data: response.data,
      }),
    });
  } catch (error) {
    return res.send({
      body: JSON.stringify({ error: 'Failed fetching data' }),
    });
  }
}
