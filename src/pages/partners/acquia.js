/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import { css } from '@emotion/core';
import styled from '@emotion/styled';

import Layout from '../../components/layout';
import FullWidthSection from '../../components/FullWidthSection';
import ProjectsSlider from '../../components/ProjectsSlider';
import LogoGrid from '../../components/LogoGrid';
import {
  colors,
  mediaQueries,
  fonts,
  weights,
  container,
  pLight,
} from '../../styles';
import SplitSection from '../../components/SplitSection';
import InsightsSlider from '../../components/InsightsSlider';
import Quote from '../../components/ContentBody/Quote';

export default () => {
  const Tripple = styled.article`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-bottom: 80px;
    h1 {
      font-size: 48px;
      margin-bottom: 8px;

      ${mediaQueries.phoneLarge} {
        margin-bottom: 30px;
      }
    }
    p {
      ${pLight};
    }

    ${mediaQueries.phoneLarge} {
      justify-content: flex-start;
    }
  `;
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
        label:
          'Deep Integrations — Rich Personalization — Efficient Development',
        title: 'Squeeze every last drop out of your Acquia investment.',
        color: colors.acquiaBlue,
        mobileMinHeight: '620px',
      }}
    >
      <FullWidthSection
        height='400px'
        align='left'
        css={css`
          ${sectionPadding}
          h3 {
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

            &:last-of-type {
              margin-right: 100px;
            }

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
          }
        `}
      >
        <h3>Team up with a partner who is tight with Acquia</h3>
        <p>
          Fewer conversations about development and more about how to improve
          visitor engagement.
        </p>
        <div>
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
        </div>
      </FullWidthSection>
      <ProjectsSlider backgroundColor={colors.lightgray} />
      <LogoGrid
        logoset='acquia'
        title='Some of Our Acquia Clients'
        backgroundColor={colors.white}
      />
      <SplitSection
        gridTemplateColumns='repeat(3, 1fr)'
        css={css`
          ${mediaQueries.phoneLarge} {
            ${container.textOnly}
            padding-top: 96px;
          }
        `}
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
      <SplitSection
        gridColumnGap='16px'
        css={css`
          ${container.min}
          img {
            width: 100px;
            margin-bottom: 35px;
          }
          h2 {
            color: ${colors.reallydarkgray};
            font-family: ${fonts.sans};
            font-size: 21px;
            font-weight: bold;
            margin-bottom: 14px;
          }
          p {
            font-weight: ${weights.light};
            margin-bottom: 50px;
            letter-spacing: -0.1px;
          }

          ${mediaQueries.phoneLarge} {
            padding: 70px 0;
          }
        `}
      >
        <article>
          <img src='/images/acquia-cloud.png' alt='cloud' />
          <h2>Acquia Cloud</h2>
          <p>
            Expertise with Cloud Hooks and APIs for faster, less error-prone
            development.
          </p>
        </article>
        <article>
          <img src='/images/acquia-lift.png' alt='lift' />
          <h2>Acquia Lift</h2>
          <p>
            Improve visitor engagement with an achievable &amp; data-driven
            personalization plan.
          </p>
        </article>
      </SplitSection>
      <Quote
        size='small'
        data={{
          field_quote:
            'Through their significant contributions to the Drupal ecosystem and to helping clients like Mint.com engage in new ways with their audience, Third & Grove have proven themselves to be an invaluable partner as the Acquia community continues to grow.',
          field_footer_text:
            'Joe Wykes - SVP Global Channels & eCommerce - Acquia',
        }}
      />
      <InsightsSlider showButton={false} backgroundColor={colors.lightgray} />
    </Layout>
  );
};
