/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/core';

import FullWidthSection from '../FullWidthSection';
import { weights, mediaQueries, colors, contValues } from '../../styles';

const Quote = ({ data, size }) => {
  const isSmall = size === 'small';
  const quoteText = css`
    font-size: ${isSmall ? '21px' : '39px'};
    font-weight: ${isSmall ? weights.bold : weights.medium};
    line-height: ${isSmall ? '1.48' : '1.15'};
    text-align: ${isSmall ? 'center' : 'left'};

    ${mediaQueries.phoneLarge} {
      font-weight: ${weights.bold};
      text-align: center;
      letter-spacing: ${isSmall ? '-0.09px' : '-0.16px'};
      line-height: ${isSmall ? '1.48' : '1.38'};
    }
  `;

  const quoL = css`
    color: ${colors.yellow};

    ${mediaQueries.desktop} {
      position: absolute;
      margin-left: ${isSmall ? '-12px' : '-18px'};
    }
  `;

  const quoR = css`
    color: ${colors.yellow};
  `;

  const quoteAttr = css`
    margin-bottom: 0;
    font-size: ${isSmall ? '16px' : '12px'};
    text-align: ${isSmall ? 'center' : 'left'};
    padding-top: 10px;
    font-weight: ${weights.light};

    ${mediaQueries.phoneLarge} {
      font-size: 16px;
      letter-spacing: 0.2px;
      line-height: 1.56;
      text-align: center;
    }
  `;
  const containerStyles = css`
    width: ${contValues.min};
    max-width: 100%;
    margin: 0 auto 60px;
    padding: ${isSmall ? '0 10px' : '0 20px'};
    ${mediaQueries.phoneLarge} {
      ${isSmall &&
        `margin: 0 0 130px;
        padding: 13px 8px 0;
      `};
    }
  `;
  return (
    <FullWidthSection height='auto' minHeight='auto' padding='0'>
      <div css={containerStyles}>
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
  size: PropTypes.string,
};

Quote.defaultProps = {
  size: 'large',
};

export default Quote;
