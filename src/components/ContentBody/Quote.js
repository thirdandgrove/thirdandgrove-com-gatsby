/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/core';

import FullWidthSection from '../FullWidthSection';
import { quoteText, quoL, quoR, quoteAttr, container } from '../../styles';

const Quote = ({ data }) => {
  return (
    <FullWidthSection
      height='auto'
      minHeight='auto'
      margin='0 0 60px'
      css={css`
        padding: 0;
        width: 100%;
      `}
    >
      <div css={container.min}>
        <div css={quoteText}>
          <span css={quoL}>&ldquo;</span>
          {data.field_quote}
          <span css={quoR}>&rdquo;</span>
        </div>
        {data.field_footer_text && (
          <p css={quoteAttr}>— {data.field_footer_text}</p>
        )}
      </div>
    </FullWidthSection>
  );
};

Quote.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Quote;
