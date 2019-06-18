/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/core';

import FullWidthSection from '../FullWidthSection';
import { mediaQueries, quoteText, quoL, quoR, quoteAttr } from '../../styles';

const Quote = ({ data }) => {
  return (
    <FullWidthSection
      height='auto'
      css={css`
        padding-top: 40px;
        padding-bottom: 40px;
        ${mediaQueries.phoneLarge} {
          padding-top: 110px;
          padding-bottom: 110px;
        }
      `}
    >
      <div className='container-max'>
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
