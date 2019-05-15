import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/core';
import styled from '@emotion/styled';

import SplitSection from '../SplitSection';
import { colors } from '../../styles';

const TextQuote = ({ data }) => {
  const textCss = css`
    p {
      font-family: NBInternationalPro;
      font-size: 21px;
      color: ${colors.darkgray};
      letter-spacing: 0;
      line-height: 36px;
    }
  `;
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
    <SplitSection padding=' 0 3rem'>
      {data.field_reversed ? (
        <>
          <section
            css={textCss}
            dangerouslySetInnerHTML={{ __html: data.field_body.processed }}
          />
          <p css={quoteCss}>{data.field_quote}</p>
        </>
      ) : (
        <>
          <section
            css={css`
              display: flex;
            `}
          >
            <BigQuote />
            <span css={quoteCss}>
              {data.field_quote}
              <BigQuote />
            </span>
          </section>
          <section
            css={textCss}
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
