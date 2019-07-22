/* eslint-disable react/no-danger */
import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/core';

import FullWidthSection from '../FullWidthSection';
import { contValues, weights, mediaQueries, fonts } from '../../styles';

const Text = ({ data }) => {
  return (
    <FullWidthSection
      fontWeight={weights.thin}
      margin='80px auto'
      padding='0 20px'
      textAlign='left'
      align='start'
      justify='start'
      dangerouslySetInnerHTML={{ __html: data.field_body.processed }}
      css={css`
        h2 {
          font-family: ${fonts.sans};
          font-size: 21px;
          font-weight: ${weights.bold};
          letter-spacing: 0.2px;
          line-height: 1.43;
        }
        h3 {
          margin-bottom: 24px;
        }
        ${mediaQueries.desktop} {
          width: ${contValues.min};
          padding: 0;
        }
      `}
    />
  );
};

Text.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Text;
