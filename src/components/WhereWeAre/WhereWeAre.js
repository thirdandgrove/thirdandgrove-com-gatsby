import React, { useState } from 'react';
import { css } from '@emotion/core';

import FullWidthSection from '../FullWidthSection';
import { colors } from '../../styles';

export default ({ h3style, h4style, h1style }) => {
  const [selected, updateSelection] = useState('boston');
  return (
    <FullWidthSection>
      <h3 css={h3style}>Where We Are</h3>
      <h1 css={h1style}>Offices if we need them.</h1>
      <section
        css={css`
          display: flex;
          article {
            padding: 3rem;
          }
        `}
      >
        <article
          css={css`
            display: flex;
            flex-direction: column;
          `}
        >
          <h1
            css={[
              h1style,
              css`
                text-align: left;
                color: ${selected === 'boston'
                  ? colors.yellow
                  : colors.darkgray};
                ::before {
                  content: '1';
                  font-size: 18px;
                  letter-spacing: 0;
                  line-height: 76px;
                  position: relative;
                  left: -5rem;
                }
              `,
            ]}
          >
            Boston
          </h1>
          <h1
            css={[
              h1style,
              css`
                text-align: left;
                color: ${selected === 'oakland'
                  ? colors.yellow
                  : colors.darkgray};
                ::before {
                  content: '2';
                  font-family: Canela-Medium;
                  font-size: 18px;
                  letter-spacing: 0;
                  line-height: 76px;
                  position: relative;
                  left: -5rem;
                }
              `,
            ]}
          >
            Oakland
          </h1>
        </article>
        <article>copy changes based on selection</article>
      </section>
    </FullWidthSection>
  );
};
