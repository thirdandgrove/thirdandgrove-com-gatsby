/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import { css } from '@emotion/core';

import Layout from '../components/layout';
import FullWidthSection from '../components/FullWidthSection';
import ProjectsSlider from '../components/ProjectsSlider';
import LogoGrid from '../components/LogoGrid';
import { colors } from '../styles';
import SplitSection from '../components/SplitSection';
import InsightsSlider from '../components/InsightsSlider';
import Quote from '../components/ContentBody/Quote';

export default () => {
  return (
    <Layout
      headerData={{
        invert: true,
        label: 'End-to-End Agency — Deep Commerce Experience — Growth Focused',
        title: 'Get Shopify Plus without the limits',
        color: colors.shopifyGreen,
      }}
    >
      <FullWidthSection height='400px' padding='0'>
        <h4>Scalable, commerce-first experiences</h4>
        <p>
          Commerce is increasingly less about selling and more about inspiring
          customers. We take the throttle off Shopify Plus to build experiences
          that you didn’t think were possible.
        </p>
        <span
          css={css`
            display: flex;
          `}
        >
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
        </span>
      </FullWidthSection>
      <ProjectsSlider />
      <LogoGrid logoset='shopify' title='Some of Our Acquia Clients' />
      <SplitSection>
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
        data={{
          field_quote: `Working with Third and Grove has been nothing short of phenomenal. They've successfully built solutions and delivered experiences that help merchants win.`,
          field_footer_text: 'Rob Barr, Agency Partnerships, ReCharge Payments',
        }}
      />
      <InsightsSlider />
    </Layout>
  );
};
