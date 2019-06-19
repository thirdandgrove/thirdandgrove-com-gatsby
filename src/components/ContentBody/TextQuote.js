/* eslint-disable react/no-danger */
import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/core';

import SplitSection from '../SplitSection';
import { mediaQueries, quoteText, quoL, quoR, container } from '../../styles';

const TextQuote = ({ data }) => {
  // TODO: Quote attribution
  return (
    <SplitSection css={container.max}>
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
            <div css={quoteText}>
              <span css={quoL}>&ldquo;</span>
              {data.field_quote}
              <span css={quoR}>&rdquo;</span>
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
            <div css={quoteText}>
              <span css={quoL}>&ldquo;</span>
              {data.field_quote}
              <span css={quoR}>&rdquo;</span>
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
