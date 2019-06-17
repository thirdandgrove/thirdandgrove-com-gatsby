/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/core';
import styled from '@emotion/styled';

import FullWidthSection from '../FullWidthSection';
import { colors, fonts, weights, mediaQueries } from '../../styles';

const Quote = ({ data }) => {
  const quoteCss = css`
    font-family: ${fonts.serif};
    font-weight: ${weights.medium};
    font-size: 39px;
    line-height: 1.15;
    ${mediaQueries.phoneLarge} {
      font-size: 61px;
      line-height: 1.25;
    }
  `;
  const BigYellow = styled.span`
    color: ${colors.yellow};
  `;
  const attrCss = css`
    margin-bottom: 0;
    font-size: 12px;
    line-height: 3;
    ${mediaQueries.phoneLarge} {
      font-size: 21px;
      line-height: 1.71;
    }
  `;
  const BigQuoteL = () => (
    <BigYellow
      css={css`
        ${mediaQueries.desktop} {
          position: absolute;
          margin-left: -26px;
        }
      `}
    >
      &ldquo;
    </BigYellow>
  );
  const BigQuoteR = () => <BigYellow>&rdquo;</BigYellow>;
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
        <div css={quoteCss}>
          <BigQuoteL />
          {data.field_quote}
          <BigQuoteR />
        </div>
        <p css={attrCss}>— {data.field_footer_text}</p>
      </div>
    </FullWidthSection>
  );
};

Quote.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Quote;
