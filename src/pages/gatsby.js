/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import { css } from '@emotion/core';
import styled from '@emotion/styled';

import Layout from '../components/layout';
import FullWidthSection from '../components/FullWidthSection';
import ProjectsSlider from '../components/ProjectsSlider';
import LogoGrid from '../components/LogoGrid';
import { colors } from '../styles';
import SplitSection from '../components/SplitSection';
import InsightsSlider from '../components/InsightsSlider';
import Quote from '../components/ContentBody/Quote';

export default () => {
  const Tripple = styled.article`
    justify-self: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  `;
  return (
    <Layout
      headerData={{
        invert: true,
        label: 'Fast — Secure — Scalable',
        title: 'The future of Front End.',
        color: colors.rebeccaPurple,
      }}
    >
      <FullWidthSection padding='0'>
        <h4>
          Build a digital experience that your competitors can’t compete with
        </h4>
        <p>
          Cutting-edge doesn’t have to mean risky. We were the first to build a
          headless commerce experience using Drupal, and have pioneered a number
          of custom integrations to make break through impossible.
        </p>
        <h4>Our Site</h4>
        <p>
          How’s our site running? Fast, right? Our site leverages Drupal for its
          backend and Gatsby for its frontend, creating an instantaneous
          experience for you, and a smooth CMS for us.
        </p>
        <h4>Innovation</h4>
        <p>
          We’re building Live Preview with Drupal + Gatsby for a better content
          editing experience. This is a turning point for Gatsby adoption in the
          Drupal community.
        </p>
      </FullWidthSection>
      <Quote
        data={{
          field_quote:
            'We’re excited about Third and Grove’s groundbreaking work integrating Drupal + Gatsby. As a clear leader in the community, they’ve proven themselves in developing cutting-edge experiences that bring best-of-breed technologies together.',
          field_footer_text: 'Sam Bhagwat, Gatsby co-founder/COO',
        }}
      />
      <InsightsSlider />
    </Layout>
  );
};
