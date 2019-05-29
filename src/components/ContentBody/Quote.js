import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/core';
import styled from '@emotion/styled';

import FullWidthSection from '../FullWidthSection';
import { colors } from '../../styles';

const Quote = ({ data }) => {
  const quoteCss = css`
    font-family: Canela-Medium;
    font-size: 61px;
    color: ${colors.darkgray};
    letter-spacing: 0;
    line-height: 76px;
  `;
  const BigYellow = styled.span`
    transform: scaleX(-1);
    font-family: Canela-Medium;
    font-size: 61px;
    color: ${colors.yellow};
    letter-spacing: 0;
    line-height: 76px;
    padding: 0 1rem;
  `;
  const BigQuote = () => <BigYellow>&quot;</BigYellow>;
  return (
    <FullWidthSection
      css={css`
        display: block;
        height: 100%;
        padding: 3rem;
      `}
    >
      <div css={quoteCss}>
        <BigQuote />
        {data.field_quote}
        <BigQuote />
      </div>
      <div
        css={css`
          font-family: NBInternationalPro-Reg;
          font-size: 21px;
          color: ${colors.darkgray};
          letter-spacing: 0;
          line-height: 36px;
        `}
      >
        — {data.field_footer_text}
      </div>
    </FullWidthSection>
  );
};

Quote.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Quote;
