/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import { css } from '@emotion/core';
import styled from '@emotion/styled';

import Layout from '../components/layout';
import FullWidthSection from '../components/FullWidthSection';
import ProjectsSlider from '../components/ProjectsSlider';
import LogoGrid from '../components/LogoGrid';
import {
  colors,
  mediaQueries,
  fonts,
  weights,
  container,
  pLight,
} from '../styles';
import SplitSection from '../components/SplitSection';
import InsightsSlider from '../components/InsightsSlider';
import Quote from '../components/ContentBody/Quote';

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
          'Battle Tested Processes — Damn Good Engineers — Decoupled Pioneer',
        title: 'Drupal leader and contributor since inception.',
        color: colors.drupalBlue,
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
        <h3>A leader and contributor since inception</h3>
        <p>
          We’re the only agency on Earth with a Drupal 8 core maintainer on our
          team. (Read: We know what we’re doing.)
        </p>
        <div>
          <ul>
            <li>Drupal 8 migration</li>
            <li>Replatform/redesign</li>
          </ul>
          <ul>
            <li>Ongoing support</li>
            <li>Training and resource augmentation</li>
          </ul>
        </div>
      </FullWidthSection>
      <ProjectsSlider backgroundColor={colors.lightgray} />
      <LogoGrid
        logoset='drupal'
        title='Some of Our Drupal Clients'
        backgroundColor={colors.white}
      />
      <SplitSection
        gridTemplateColumns='repeat(3, 1fr)'
        css={css`
          ${mediaQueries.phoneLarge} {
            ${container.textOnly}
          }
        `}
      >
        <Tripple>
          <h1>800+</h1>
          <p>Open Source Contributions</p>
        </Tripple>
        <Tripple>
          <h1>Decoupled</h1>
          <p>Drupal Pioneers</p>
        </Tripple>
        <Tripple>
          <h1>Drupal9</h1>
          <p>Building it as we speak</p>
        </Tripple>
      </SplitSection>
      <SplitSection
        gridColumnGap='16px'
        css={css`
          ${container.min}
          img {
            width: 100px;
          }
          h2 {
            color: ${colors.reallydarkgray};
            font-family: ${fonts.sans};
            font-size: 21px;
            font-weight: ${weights.bold};
            margin-bottom: 14px;
          }
          p {
            font-weight: ${weights.light};
            margin-bottom: 50px;
            letter-spacing: -0.1px;
          }

          ${mediaQueries.phoneLarge} {
            ${sectionPadding}
          }
        `}
      >
        <article>
          <h2>Drupal 8</h2>
          <p>
            See for yourself what a smooth migration feels like when we fully
            map out your existing setup/integrations, confirm our detailed game
            plan and execute. We migrated one of the highest-trafficked sites in
            the world to Drupal 8 in six weeks.
          </p>
        </article>
        <article>
          <h2>Decoupled</h2>
          <p>
            See for yourself what a smooth migration feels like when we fully
            map out your existing setup/integrations, confirm our detailed game
            plan and execute. We migrated one of the highest-trafficked sites in
            the world to Drupal 8 in six weeks.
          </p>
        </article>
        <article>
          <h2>Digital Experience Platform</h2>
          <p>
            Empower your team with Drupal will as the foundation of your Digital
            Experience Platform, enabling more personalized marketing, better
            customer analytics, and higher developer velocity.
          </p>
        </article>
        <article>
          <h2>Commerce</h2>
          <p>
            Redefine your digital experience with the right blend of content +
            commerce. You&apos;ll work with a team that understands commerce
            just as much as the tech.
          </p>
        </article>
      </SplitSection>
      <Quote
        size='small'
        data={{
          field_quote:
            'It’s a rare opportunity that an agency like TAG can fit in so well with our in-house team. The support, partnership, and commitment to creating a custom solution for our multi-lingual sites made all the difference in our successful launch.',
          field_footer_text:
            'Steve Reichgut, Director of Web Engineering & Web Operations',
        }}
      />
      <InsightsSlider showButton={false} />
    </Layout>
  );
};
