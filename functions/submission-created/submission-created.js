/* eslint-disable */
// const fetch = require('node-fetch');

// const key = process.env.PIPEDRIVE_KEY;
exports.handler = function(event, context, callback) {
  const body = JSON.parse(event.body).payload;
  console.log({ body });

  callback(null, {
    statusCode: 200,
    body: 'fired!!!',
  });
};

// module.exports = async (req, res) => {
//   let body = '';
//   req.on('data', chunk => {
//     body += chunk.toString();
//   });
//   req.on('end', async () => {
//     const { name, email, phone, website, comments } = JSON.parse(body).data;
//     // check for required fields
//     if (!name || !email) {
//       console.log('error, no name or email sent');
//       return res.end();
//     }
//     const names = name.split(' ');
//     let [first_name, last_name] = names;
//     if (names.length > 2) {
//       last_name = names[names.length - 1];
//     }
//     const person = await fetch(
//       `https://api.pipedrive.com/v1/persons?api_token=${key}`,
//       {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({
//           name,
//           first_name,
//           last_name,
//           email,
//           phone,
//           '7ec70f1ef58548a7555a66c6677cfd8028529568': website,
//         }),
//       }
//     ).then(data => data.json());

//     const person_id = person.data.id;
//     await fetch(`https://api.pipedrive.com/v1/deals?api_token=${key}`, {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify({
//         title: `[Webform] Deal for ${name}`,
//         person_id,
//         cd2d5edd665b516895a90328d2b9d225c23be2b6: website,
//         bf37b2226ef4c418719adcbd9ada3d4b731ba8b4: comments,
//       }),
//     });

//     return res.end();
//   });
// };
