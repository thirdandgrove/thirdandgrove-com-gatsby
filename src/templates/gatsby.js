/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import { css } from '@emotion/core';

import Layout from '../components/layout';
import FullWidthSection from '../components/FullWidthSection';
import { colors, mediaQueries, fonts, weights, container } from '../styles';
import InsightsSlider from '../components/InsightsSlider';
import Quote from '../components/ContentBody/Quote';

// eslint-disable-next-line react/prop-types
export default ({ pageContext }) => {
  const { allInsight } = pageContext.insightSlider.data;
  const sectionPadding = css`
    padding: 50px 20px;

    ${mediaQueries.phoneLarge} {
      padding: 200px 0 90px;
    }
  `;
  return (
    <Layout
      headerData={{
        invert: true,
        label: 'Fast — Secure — Scalable',
        title: 'The future of Front End.',
        color: colors.gatsbyPurple,
        mobileMinHeight: '620px',
      }}
    >
      <FullWidthSection
        align='left'
        css={css`
          ${sectionPadding}
          ${container.min}
          h4 {
            color: ${colors.reallydarkgray};
            font-family: ${fonts.sans};
            font-size: 18px;
            font-weight: bold;
            margin-bottom: 14px;
          }
          p {
            font-weight: ${weights.light};
            margin-bottom: 50px;
            letter-spacing: -0.1px;
          }
        `}
      >
        <h4>
          Build a digital experience that your competitors can’t compete with
        </h4>
        <p>
          Cutting-edge doesn’t have to mean risky. We were the first to build a
          headless commerce experience using Drupal, and have pioneered a number
          of custom integrations to make breakthrough impossible.
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
        size='small'
        data={{
          field_quote:
            'We’re excited about Third and Grove’s groundbreaking work integrating Drupal + Gatsby. As a clear leader in the community, they’ve proven themselves in developing cutting-edge experiences that bring best-of-breed technologies together.',
          field_footer_text: 'Sam Bhagwat, Gatsby co-founder/COO',
        }}
      />
      <InsightsSlider
        data={allInsight}
        showButton={false}
        backgroundColor={colors.lightgray}
      />
    </Layout>
  );
};
