import React from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/core';

import { colors, fonts, weights } from '../styles';
import Layout from '../components/layout';
import SplitSection from '../components/SplitSection';

export default () => {
  const Block = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-width: 450px;
    padding: 3rem;
    h2 {
      font-family: ${fonts.serif};
    }
    p {
      font-family: ${fonts.serif};
      font-weight: ${weights.regular};
    }
    ul {
      margin: 0;
      li {
        font-family: ${fonts.sans};
        font-weight: ${weights.bold};
        font-variant-caps: all-small-caps;
        letter-spacing: 1px;
        list-style: none;
      }
    }
  `;
  const Imageplaceholder = styled.div`
    height: 500px;
    width: 500px;
    background-color: ${colors.gray};
  `;
  return (
    <Layout
      headerData={{ title: `All the stuff we're good at`, height: `400px` }}
    >
      <SplitSection
        css={css`
          justify-items: center;
          place-items: center;
          padding: 6rem;
        `}
      >
        <Imageplaceholder />
        <Block>
          <h2>Technology</h2>
          <p>
            Work with the best engineers in the room-no matter what room
            you&quot;re in. Our engineers are writing and discovering the future
            of digital excellence
          </p>
          <ul>
            <li>Front-End Development</li>
            <li>Back-End Development</li>
            <li>Content Management</li>
            <li>Drupal</li>
            <li>Gatsby</li>
            <li>Shopify</li>
          </ul>
        </Block>
      </SplitSection>
      <SplitSection
        css={css`
          justify-items: center;
          place-items: center;
          padding: 6rem;
        `}
      >
        <Block>
          <h2>Strategy</h2>
          <p>
            The foundation for great work. Know your customer, your goals and
            how to reach them.
          </p>
          <ul>
            <li>Digital Strategy</li>
            <li>Trends &amp; Insights</li>
            <li>Customer Research</li>
            <li>Industry Research</li>
            <li>Analytics / Data / SEO</li>
            <li>Omnichannel Strategy</li>
          </ul>
        </Block>
        <Imageplaceholder />
      </SplitSection>
      <SplitSection
        css={css`
          justify-items: center;
          place-items: center;
          padding: 6rem;
        `}
      >
        <Imageplaceholder />
        <Block>
          <h2>Creative</h2>
          <p>
            Where data, culture, and good looks come together. Create the
            strongest connection to the brand experience, and look good doing
            it.
          </p>
          <ul>
            <li>Art Direction</li>
            <li>UI/UX Design</li>
            <li>Responsive Design</li>
            <li>Social Content</li>
            <li>Content Development</li>
            <li>Interaction / Motion</li>
          </ul>
        </Block>
      </SplitSection>
    </Layout>
  );
};
