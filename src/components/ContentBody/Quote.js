/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/core';
import styled from '@emotion/styled';

import FullWidthSection from '../FullWidthSection';
import { colors, fonts, weights } from '../../styles';

const Quote = ({ data }) => {
  const quoteCss = css`
    font-family: ${fonts.serif};
    font-weight: ${weights.medium};
    font-size: 61px;
    color: ${colors.darkgray};
    letter-spacing: 0;
    line-height: 76px;
  `;
  const BigYellow = styled.span`
    transform: scaleX(-1);
    font-family: ${fonts.serif};
    font-weight: ${weights.medium};
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
        padding-top: 3rem;
        padding-bottom: 3rem;
      `}
    >
      <div className='container-max'>
        <div css={quoteCss}>
          <BigQuote />
          {data.field_quote}
          <BigQuote />
        </div>
        <p>— {data.field_footer_text}</p>
      </div>
    </FullWidthSection>
  );
};

Quote.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Quote;
