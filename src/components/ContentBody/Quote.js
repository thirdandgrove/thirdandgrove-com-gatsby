/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/core';

import FullWidthSection from '../FullWidthSection';
import {
  mediaQueries,
  quoteText,
  quoL,
  quoR,
  quoteAttr,
  container,
  contValues,
} from '../../styles';

const Quote = ({ data }) => {
  return (
    <FullWidthSection
      height='auto'
      css={css`
        padding: 40px 20px;
        width: 100%;
        ${mediaQueries.phoneLarge} {
          padding: 110px 0;
          width: ${contValues.min};
        }
      `}
    >
      <div css={container.max}>
        <div css={quoteText}>
          <span css={quoL}>&ldquo;</span>
          {data.field_quote}
          <span css={quoR}>&rdquo;</span>
        </div>
        <p css={quoteAttr}>— {data.field_footer_text}</p>
      </div>
    </FullWidthSection>
  );
};

Quote.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Quote;
