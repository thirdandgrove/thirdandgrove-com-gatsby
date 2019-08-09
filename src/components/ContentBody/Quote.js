/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/core';

import FullWidthSection from '../FullWidthSection';
import { weights, mediaQueries, colors, contValues } from '../../styles';

const Quote = ({ data, size }) => {
  const quoteText = css`
    font-size: ${size === 'small' ? '21px' : '39px'};
    font-weight: ${size === 'small' ? weights.bold : weights.medium};
    line-height: ${size === 'small' ? '1.48' : '1.15'};
    text-align: ${size === 'small' ? 'center' : 'left'};

    ${mediaQueries.phoneLarge} {
      font-weight: ${weights.bold};
      text-align: center;
      letter-spacing: ${size === 'small' ? '-0.09px' : '-0.16px'};
      line-height: ${size === 'small' ? '1.48' : '1.38'};
    }
  `;

  const quoL = css`
    color: ${colors.yellow};

    ${mediaQueries.desktop} {
      position: absolute;
      margin-left: ${size === 'small' ? '-12px' : '-26px'};
    }
  `;

  const quoR = css`
    color: ${colors.yellow};
  `;

  const quoteAttr = css`
    margin-bottom: 0;
    font-size: ${size === 'small' ? '16px' : '12px'};
    text-align: ${size === 'small' ? 'center' : 'left'};
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
    padding: ${size === 'small' ? '0' : '0 20px'};
    ${mediaQueries.phoneLarge} {
      ${size === 'small' &&
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
