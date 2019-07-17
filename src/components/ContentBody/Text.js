/* eslint-disable react/no-danger */
import React from 'react';
import PropTypes from 'prop-types';

import FullWidthSection from '../FullWidthSection';
import { contValues, weights } from '../../styles';

const Text = ({ data }) => {
  return (
    <FullWidthSection
      width={contValues.min}
      fontWeight={weights.thin}
      margin='80px auto'
      padding='0 20px'
      textAlign='left'
      align='start'
      justify='start'
      dangerouslySetInnerHTML={{ __html: data.field_body.processed }}
    />
  );
};

Text.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Text;
