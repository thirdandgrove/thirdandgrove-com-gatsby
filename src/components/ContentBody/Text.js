/* eslint-disable react/no-danger */
import React from 'react';
import PropTypes from 'prop-types';

import Section from '../Section';

const Text = ({ data }) => {
  return (
    <Section
      width='680'
      dangerouslySetInnerHTML={{ __html: data.field_body.processed }}
    />
  );
};

Text.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Text;
