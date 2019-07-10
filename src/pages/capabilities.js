import React from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/core';

import { colors } from '../styles';
import Layout from '../components/layout';
import SplitSection from '../components/SplitSection';

export default () => {
  const Block = styled.div`
    display: flex;
    flex-direction: column;

    ul {
      li {
        list-style: none;
        padding: 1rem 0;
      }
    }
  `;
  const Imageplaceholder = styled.div`
    height: 450px;
    width: 250px;
    background-color: ${colors.gray};
  `;
  return (
    <Layout
      headerData={{ title: `All the stuff we're good at`, height: `400px` }}
    >
      <SplitSection
        css={css`
          padding: 2rem 5rem;
        `}
      >
        <Imageplaceholder />
        <Block>
          <h2>Technology</h2>
          <p>copy...</p>
          <ul>
            <li>Front-end</li>
            <li>Back-end</li>
            <li>Content Management</li>
            <li>Drupal</li>
            <li>Gatsby</li>
            <li>Shopify</li>
          </ul>
        </Block>
      </SplitSection>
      <SplitSection
        css={css`
          padding: 2rem 5rem;
        `}
      >
        <Block>
          <h2>Strategy</h2>
          <p>copy...</p>
          <ul>
            <li>Front-end</li>
            <li>Back-end</li>
            <li>Content Management</li>
            <li>Drupal</li>
            <li>Gatsby</li>
            <li>Shopify</li>
          </ul>
        </Block>
        <Imageplaceholder />
      </SplitSection>
      <SplitSection
        css={css`
          padding: 2rem 5rem;
        `}
      >
        <Imageplaceholder />
        <Block>
          <h2>Creative</h2>
          <p>copy...</p>
          <ul>
            <li>Front-end</li>
            <li>Back-end</li>
            <li>Content Management</li>
            <li>Drupal</li>
            <li>Gatsby</li>
            <li>Shopify</li>
          </ul>
        </Block>
      </SplitSection>
    </Layout>
  );
};
