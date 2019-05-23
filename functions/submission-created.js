/* eslint-disable func-names */
/* eslint-disable consistent-return */
/* eslint-disable no-console */
/* eslint-disable camelcase */
require('dotenv').config();
const Pipedrive = require('pipedrive');

exports.handler = function(event, _context, callback) {
  const pipedrive = new Pipedrive.Client(process.env.PIPEDRIVE_KEY, {
    strictMode: true,
  });
  // onlt allow post method
  if (event.httpMethod !== 'POST') {
    return callback(null, { statusCode: 403 });
  }

  const formData = JSON.parse(event.body);
  const { name, email, phone, website, comments } = formData;
  // check for required fields
  if (!name || !email) {
    return callback(null, { statusCode: 400 });
  }

  const names = name.split(' ');
  // eslint-disable-next-line prefer-const
  let [first_name, last_name] = names;
  if (names.length > 2) {
    last_name = names[names.length - 1];
  }
  // add person to pipedrive
  pipedrive.Persons.add(
    {
      name,
      first_name,
      last_name,
      email,
      phone,
      '7ec70f1ef58548a7555a66c6677cfd8028529568': website,
    },
    (personError, person) => {
      if (personError) {
        console.error('Error from pipedrive add person', personError);
        return callback(null, { statusCode: 500 });
      }
      const person_id = person.id;
      return pipedrive.Deals.add(
        {
          title: `[Webform] Deal for ${name}`,
          person_id,
          cd2d5edd665b516895a90328d2b9d225c23be2b6: website,
          bf37b2226ef4c418719adcbd9ada3d4b731ba8b4: comments,
        },
        (dealError, deal) => {
          if (dealError) {
            console.error('Error from pipedrive add deal', dealError);
            return callback(null, { statusCode: 500 });
          }
          return deal;
        }
      );
    }
  );
  callback(null, { statusCode: 200 });
};
