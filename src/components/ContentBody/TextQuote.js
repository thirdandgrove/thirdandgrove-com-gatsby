/* eslint-disable react/no-danger */
import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/core';
import styled from '@emotion/styled';

import SplitSection from '../SplitSection';
import { colors, fonts, weights, mediaQueries } from '../../styles';

const TextQuote = ({ data }) => {
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
  // Uncomment this when quote attribution field is added
  // Removing in the meantime so I don't get a warning for unused variables
  // const attrCss = css`
  //   margin-bottom: 0;
  //   font-size: 12px;
  //   line-height: 3;
  //   ${mediaQueries.phoneLarge} {
  //     font-size: 21px;
  //     line-height: 1.71;
  //   }
  // `;
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

  // TODO: Quote attribution
  return (
    <SplitSection className='container-max'>
      {data.field_reversed ? (
        <>
          <section
            dangerouslySetInnerHTML={{ __html: data.field_body.processed }}
          />
          <section
            css={css`
              padding-top: 40px;
              ${mediaQueries.phoneLarge} {
                padding-top: 0;
              }
            `}
          >
            <div css={quoteCss}>
              <BigQuoteL />
              {data.field_quote}
              <BigQuoteR />
            </div>
          </section>
        </>
      ) : (
        <>
          <section
            css={css`
              padding-bottom: 40px;
              ${mediaQueries.phoneLarge} {
                padding-bottom: 0;
              }
            `}
          >
            <div css={quoteCss}>
              <BigQuoteL />
              {data.field_quote}
              <BigQuoteR />
            </div>
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
