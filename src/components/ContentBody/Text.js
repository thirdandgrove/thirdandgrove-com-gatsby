/* eslint-disable react/no-danger */
import React from 'react';
import PropTypes from 'prop-types';

import Section from '../Section';

const Text = ({ data }) => {
  return (
    <Section width='680'>
      <section
        dangerouslySetInnerHTML={{ __html: data.field_body.processed }}
      />
    </Section>
  );
};

Text.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Text;
