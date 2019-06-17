/* eslint-disable react/no-danger */
import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/core';
import styled from '@emotion/styled';

import SplitSection from '../SplitSection';
import { colors, fonts, weights } from '../../styles';

const TextQuote = ({ data }) => {
  const quoteCss = css`
    font-family: ${fonts.serif};
    font-weight: ${weights.medium};
    font-size: 61px;
    color: ${colors.darkgray};
    letter-spacing: 0;
    line-height: 76px;
    padding: 1rem;
  `;
  const BigYellow = styled.span`
    transform: scaleX(-1);
    font-family: ${fonts.serif};
    font-weight: ${weights.medium};
    font-size: 61px;
    color: ${colors.yellow};
    letter-spacing: 0;
    line-height: 76px;
    padding: 0;
  `;
  const BigQuote = () => <BigYellow>&quot;</BigYellow>;

  // TODO: Quote attribution
  return (
    <SplitSection className='container-max'>
      {data.field_reversed ? (
        <>
          <section
            dangerouslySetInnerHTML={{ __html: data.field_body.processed }}
          />
          <p css={quoteCss}>{data.field_quote}</p>
        </>
      ) : (
        <>
          <section css={quoteCss}>
            <BigQuote />
            <span css={quoteCss}>
              {data.field_quote}
              <BigQuote />
            </span>
          </section>
          <section
            dangerouslySetInnerHTML={{ __html: data.field_body.processed }}
          />
        </>
      )}
    </SplitSection>
  );
};

TextQuote.propTypes = {
  data: PropTypes.object.isRequired,
};

export default TextQuote;
