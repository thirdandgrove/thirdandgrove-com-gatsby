import React from 'react';
import { css } from '@emotion/core';

import Layout from '../components/layout';
import FullWidthSection from '../components/FullWidthSection';
import WhereWeAre from '../components/WhereWeAre';
import { colors } from '../styles';

export default () => {
  const h4style = css`
    font-family: 'NBInternationalPro-Reg';
    font-size: 27px;
    color: ${colors.darkgray};
    letter-spacing: 0.15px;
    text-align: center;
    line-height: 42px;
  `;
  const h3style = css`
    font-family: 'Canela-Thin';
    font-weight: 100;
    font-size: 36px;
    color: ${colors.darkgray};
    letter-spacing: 0.4px;
    text-align: center;
    line-height: 76px;
  `;
  const h1style = css`
    font-family: 'Canela-Medium';
    font-size: 72px;
    color: ${colors.darkgray};
    letter-spacing: -0.83px;
    text-align: center;
    line-height: 84px;
  `;
  return (
    <Layout
      headerData={{ title: 'This is Third and Grove. See what makes us, us.' }}
    >
      <FullWidthSection textAlign='center' height='100px' padding='3rem 0 0 0'>
        <h3 css={h3style}>What We Do</h3>
      </FullWidthSection>
      <FullWidthSection padding='0 20vw' textAlign='center' height='350px'>
        <h1>A digital innovation company.</h1>
        <h4 css={h4style}>
          What sets us apart from the pack is our deep understanding of
          engineering (not just development) mixed with a human-experienced
          centered approach to making brilliant work for clients we love.
        </h4>
      </FullWidthSection>
      <FullWidthSection
        backgroundColor={colors.yellow}
        padding='20vw'
        textAlign='center'
      >
        <h3 css={h3style}>On Working Remotely</h3>
        <h1 css={h1style}>Empowering our people.</h1>
        <h4 css={h4style}>
          Time is of the essence. We don’t want to waste yours. Everyone is
          unique, and we believe in embracing this to give everyone the freedom
          to do their best work. Here’s a few reasons we are champions for the
          remote work movement.
        </h4>
      </FullWidthSection>
      <WhereWeAre />
    </Layout>
  );
};
