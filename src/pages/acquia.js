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
        label:
          'Deep Integrations — Rich Personalization — Efficient Development',
        title: 'Squeeze every last drop out of your Acquia investment.',
        color: colors.acquiaBlue,
      }}
    >
      <FullWidthSection height='400px' padding='0'>
        <h4>Team up with a partner who is tight with Acquia</h4>
        <p>
          Fewer conversations about development and more about how to improve
          visitor engagement.
        </p>
        <span
          css={css`
            display: flex;
          `}
        >
          <ul>
            <li>Migration</li>
            <li>Personalization</li>
            <li>Ongoing support</li>
          </ul>
          <ul>
            <li>Infrastructure Audit</li>
            <li>Resource Augmentation</li>
            <li>Training</li>
          </ul>
        </span>
      </FullWidthSection>
      <ProjectsSlider />
      <LogoGrid title='Some of Our Acquia Clients' />
      <SplitSection
        css={css`
          margin: 5rem auto;
          width: 760px;
        `}
        gridTemplateColumns='repeat(3, 1fr)'
      >
        <Tripple>
          <h1>100%</h1>
          <p>Acquia Certified</p>
        </Tripple>
        <Tripple>
          <h1>X</h1>
          <p>Projects Launched on Acquia</p>
        </Tripple>
        <Tripple>
          <h1>2014</h1>
          <p>Acquia MVP</p>
        </Tripple>
      </SplitSection>
      <SplitSection>
        <article>
          image<h2>Acquia Cloud</h2>
          <p>
            Expertise with Cloud Hooks and APIs for faster, less error-prone
            development.{' '}
          </p>
        </article>
        <article>
          image<h2>Acquia Lift</h2>
          <p>
            Improve visitor engagement with an achievable & data-driven
            personalization plan.
          </p>
        </article>
      </SplitSection>
      <FullWidthSection>
        <h2>Your DXP Solution</h2>
        acquia brand map image
      </FullWidthSection>
      <Quote
        data={{
          field_quote:
            'Through their significant contributions to the Drupal ecosystem and to helping clients like Mint.com engage in new ways with their audience, Third & Grove have proven themselves to be an invaluable partner as the Acquia community continues to grow.',
          field_footer_text:
            'Joe Wykes - SVP Global Channels & eCommerce - Acquia',
        }}
      />
      <InsightsSlider />
    </Layout>
  );
};
