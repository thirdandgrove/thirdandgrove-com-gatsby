/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import { css } from '@emotion/core';

import Layout from '../components/layout';
import FullWidthSection from '../components/FullWidthSection';
import ProjectsSlider from '../components/ProjectsSlider';
import LogoGrid from '../components/LogoGrid';
import { colors, mediaQueries, fonts, weights, container } from '../styles';
import SplitSection from '../components/SplitSection';
import InsightsSlider from '../components/InsightsSlider';
import Quote from '../components/ContentBody/Quote';

// eslint-disable-next-line react/prop-types
export default ({ pageContext }) => {
  const { allInsight } = pageContext.insightSlider.data;
  const { allCaseStudy } = pageContext.projectSlider.data;
  const sectionPadding = css`
    padding: 50px 20px;

    ${mediaQueries.phoneLarge} {
      padding: 110px 0;
    }
  `;
  return (
    <Layout
      headerData={{
        invert: true,
        label: 'End-to-End Agency — Deep Commerce Experience — Growth Focused',
        title: 'Get Shopify Plus without the limits',
        color: colors.shopifyGreen,
        mobileMinHeight: '620px',
      }}
    >
      <FullWidthSection
        height='400px'
        align='left'
        css={css`
          ${sectionPadding}
          h4 {
            font-family: ${fonts.sans};
            font-size: 18px;
            font-weight: ${weights.bold};
            line-height: 1.39;
            margin-bottom: 12px;
          }
          p {
            font-weight: ${weights.light};
          }
          div {
            ${mediaQueries.phoneLarge} {
              display: flex;
              justify-content: space-between;
            }
          }
          ul {
            margin: 0;
            font-size: 16px;
            font-family: ${fonts.sans};
            font-weight: ${weights.bold};
            list-style: none;

            li {
              margin-bottom: 4px;

              &:before {
                content: '—';
                padding-right: 2px;
              }
            }
          }

          ${mediaQueries.phoneLarge} {
            ${container.min}

            ul:last-of-type {
              margin-right: 100px;
            }
          }
        `}
      >
        <h4>Scalable, commerce-first experiences</h4>
        <p>
          Commerce is increasingly less about selling and more about inspiring
          customers. We take the throttle off Shopify Plus to build experiences
          that you didn’t think were possible.
        </p>
        <div>
          <ul>
            <li>Bespoke Shopify store</li>
            <li>Migration</li>
            <li>Tech integrations</li>
          </ul>
          <ul>
            <li>Custom apps</li>
            <li>CRO</li>
            <li>Custom subscriptions/checkout</li>
          </ul>
        </div>
      </FullWidthSection>
      <ProjectsSlider data={allCaseStudy} backgroundColor={colors.lightgray} />
      <LogoGrid
        logoset='shopify'
        title='Some of Our Shopify Clients'
        backgroundColor={colors.white}
      />
      <SplitSection
        gridColumnGap='16px'
        css={css`
          ${container.min}
          padding-bottom: 16px;

          ${mediaQueries.phoneLarge} {
            padding: 110px 0 150px;
          }
          img {
            width: 100px;
          }
          h2 {
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
        <article>
          <h2>Conquer complexity</h2>
          <p>
            Shopify is not complex, but your integration may be. We’ve pioneered
            robust integrations for both back and front-end experiences.
          </p>
        </article>
        <article>
          <h2>Maximize your budget</h2>
          <p>
            Minimize your build investment and reinvest into initiatives that
            move the needle. (We can help with that too).
          </p>
        </article>
        <article>
          <h2>Global first</h2>
          <p>
            Companies need to think globally to compete. We’ll help you lay the
            foundation from day one.
          </p>
        </article>
        <article>
          <h2>Automate with flow</h2>
          <p>
            Automation is about more than just saving time. We leverage Shopify
            Flow to create automated processes that create raving fans and big
            spenders.
          </p>
        </article>
      </SplitSection>
      <Quote
        size='small'
        data={{
          field_quote: `Working with Third and Grove has been nothing short of phenomenal. They've successfully built solutions and delivered experiences that help merchants win.`,
          field_footer_text: 'Rob Barr, Agency Partnerships, ReCharge Payments',
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
