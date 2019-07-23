import React from 'react';
import { navigate } from 'gatsby';
import { css } from '@emotion/core';

import Layout from '../components/layout';
import FullWidthSection from '../components/FullWidthSection';
import WhereWeAre from '../components/WhereWeAre';
import LogoGrid from '../components/LogoGrid';
import { colors, fonts, weights, smSectionHead, h1L } from '../styles';
import Button from '../components/Button';

export default () => {
  const h4style = css`
    font-family: ${fonts.sans};
    font-size: 27px;
    color: ${colors.darkgrayFaded};
    font-weight: ${weights.regular};
    letter-spacing: 0.15px;
    text-align: center;
    line-height: 42px;
  `;
  return (
    <Layout
      headerData={{
        title: 'This is Third and Grove. See what makes us, us.',
        minHeight: '93vh',
      }}
    >
      <FullWidthSection textAlign='center' height='100px' padding='3rem 0 0 0'>
        <h3 css={smSectionHead}>What We Do</h3>
      </FullWidthSection>
      <FullWidthSection padding='0 20vw' textAlign='center' height='100%'>
        <h1>A digital innovation company.</h1>
        <h4 css={h4style}>
          What sets us apart from the pack is our deep understanding of
          engineering (not just development) mixed with a human-experienced
          centered approach to making brilliant work for clients we love.
        </h4>
      </FullWidthSection>
      <FullWidthSection
        backgroundColor={colors.yellow}
        padding='10vw'
        textAlign='center'
        height='100%'
      >
        <h3 css={smSectionHead}>On Working Remotely</h3>
        <h1 css={h1L}>Empowering our people.</h1>
        <h4 css={h4style}>
          Time is of the essence. We don’t want to waste yours. Everyone is
          unique, and we believe in embracing this to give everyone the freedom
          to do their best work. Here’s a few reasons we are champions for the
          remote work movement.
        </h4>
        <section
          css={css`
            display: flex;
            justify-content: space-between;
            padding-top: 5rem;
            div {
              display: flex;
              flex-direction: column;
              padding: 1rem 3rem;
              h1 {
                font-weight: ${weights.medium};
                font-size: 120px;
                color: ${colors.darkgray};
                letter-spacing: -1.38px;
                text-align: center;
                line-height: 84px;
              }
              h3 {
                font-family: ${fonts.sans};
                font-weight: ${weights.regular};
                font-size: 14px;
                color: ${colors.darkgray};
                letter-spacing: 2.5px;
                text-align: center;
                line-height: 24px;
              }
            }
          `}
        >
          <div>
            <h1>01</h1>
            <h3>drive efficiency</h3>
          </div>
          <div>
            <h1>02</h1>
            <h3>boost morale</h3>
          </div>
          <div>
            <h1>03</h1>
            <h3>greater diversity</h3>
          </div>
          <div>
            <h1>04</h1>
            <h3>good for the planet</h3>
          </div>
        </section>
      </FullWidthSection>
      <WhereWeAre h1style={h1L} h3style={smSectionHead} h4style={h4style} />
      <LogoGrid title='Proud Parners' logoset='about' />
      <FullWidthSection
        height='550px'
        css={css`
          background-color: ${colors.lightblue};
          z-index: 1;
          height: 550px;
        `}
      >
        <h3 css={smSectionHead}>Making Moves?</h3>
        <h1
          css={[
            h1L,
            css`
              padding: 2rem 0;
            `,
          ]}
        >
          Show us what you&apos;re made of.
        </h1>
        <Button onClick={() => navigate(`/careers`)}>
          view open positions
        </Button>
      </FullWidthSection>
    </Layout>
  );
};
