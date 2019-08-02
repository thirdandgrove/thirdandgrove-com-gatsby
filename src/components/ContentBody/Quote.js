/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/core';

import FullWidthSection from '../FullWidthSection';
import { container, weights, mediaQueries, colors } from '../../styles';

const Quote = ({ data, size }) => {
  const quoteText = css`
    font-size: ${size === 'small' ? '21px' : '39px'};
    font-weight: ${size === 'small' ? weights.bold : weights.medium};
    line-height: ${size === 'small' ? '1.48' : '1.15'};
    text-align: ${size === 'small' ? 'center' : 'left'};

    ${mediaQueries.phoneLarge} {
      font-weight: ${weights.bold};
      text-align: center;
      letter-spacing: -0.16px;
      line-height: 1.38;
    }
  `;

  const quoL = css`
    color: ${colors.yellow};

    ${mediaQueries.desktop} {
      position: absolute;
      margin-left: -26px;
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
  size: PropTypes.string,
};

Quote.defaultProps = {
  size: 'large',
};

export default Quote;
