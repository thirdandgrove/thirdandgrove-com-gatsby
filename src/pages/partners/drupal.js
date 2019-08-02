/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import { css } from '@emotion/core';
import styled from '@emotion/styled';

import Layout from '../../components/layout';
import FullWidthSection from '../../components/FullWidthSection';
import ProjectsSlider from '../../components/ProjectsSlider';
import LogoGrid from '../../components/LogoGrid';
import { colors } from '../../styles';
import SplitSection from '../../components/SplitSection';
import InsightsSlider from '../../components/InsightsSlider';
import Quote from '../../components/ContentBody/Quote';

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
          'Battle Tested Processes — Damn Good Engineers — Decoupled Pioneer',
        title: 'Drupal leader and contributor since inception.',
        color: colors.drupalBlue,
      }}
    >
      <FullWidthSection height='400px' padding='0'>
        <h4>A leader and contributor since inception</h4>
        <p>
          We’re the only agency on Earth with a Drupal 8 core maintainer on our
          team. (Read: We know what we’re doing.)
        </p>
        <span
          css={css`
            display: flex;
          `}
        >
          <ul>
            <li>Drupal 8 migration</li>
            <li>Replatform/redesign</li>
          </ul>
          <ul>
            <li>Ongoing support</li>
            <li>Training and resource augmentation</li>
          </ul>
        </span>
      </FullWidthSection>
      <ProjectsSlider />
      <LogoGrid logoset='drupal' title='Some of Our Drupal Clients' />
      <SplitSection
        css={css`
          margin: 5rem auto;
          width: 760px;
        `}
        gridTemplateColumns='repeat(3, 1fr)'
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
      <SplitSection>
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
        data={{
          field_quote:
            'It’s a rare opportunity that an agency like TAG can fit in so well with our in-house team. The support, partnership, and commitment to creating a custom solution for our multi-lingual sites made all the difference in our successful launch.',
          field_footer_text:
            'Steve Reichgut, Director of Web Engineering & Web Operations',
        }}
      />
      <InsightsSlider />
    </Layout>
  );
};
