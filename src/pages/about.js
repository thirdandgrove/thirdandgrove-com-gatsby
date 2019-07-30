import React from 'react';
import { navigate } from 'gatsby';
import { css } from '@emotion/core';
import styled from '@emotion/styled';

import Layout from '../components/layout';
import FullWidthSection from '../components/FullWidthSection';
import SplitSection from '../components/SplitSection';
import {
  colors,
  fonts,
  weights,
  smSectionHead,
  h1L,
  container,
  mediaQueries,
  contValues,
  pLight,
} from '../styles';
import Button from '../components/Button';

export default () => {
  const NameCol = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    h2 {
      font-size: 21px;
      font-weight: bold;
      text-align: center;
      margin-bottom: 6px;

      ${mediaQueries.phoneLarge} {
        font-size: 27px;
      }
    }
    p {
      ${pLight};
      margin-bottom: 64px;
    }
  `;
  const Row = styled.section`
    display: flex;
    flex-flow: row wrap;
    justify-content: space-evenly;
    padding-top: 48px;
    margin-bottom: 12px;

    ${mediaQueries.phoneLarge} {
      width: ${contValues.medium};
    }

    div {
      width: 50%;
      margin-bottom: 40px;

      ${mediaQueries.phoneLarge} {
        width: auto;
        padding: 0 2rem;
      }

      h1 {
        font-weight: ${weights.medium};
        font-size: 48px;
        color: ${colors.darkgray};
        letter-spacing: -1.38px;
        text-align: center;
        margin-bottom: 12px;

        ${mediaQueries.phoneLarge} {
          margin-bottom: 36px;
        }
      }
      h3 {
        font-family: ${fonts.sans};
        font-weight: ${weights.light};
        font-size: 15px;
        color: ${colors.darkgray};
        letter-spacing: 0.2px;
        text-align: center;
      }
    }
  `;
  const Location = styled.section`
    display: flex;
    flex-direction: column;
    padding: 0 20px 64px;
    h1 {
      ${h1L};
      padding-top: 10px;
      margin-bottom: 8px;
      ${mediaQueries.phoneLarge} {
        text-align: center;
      }
    }
    h3 {
      color: ${colors.reallydarkgray};
      font-family: ${fonts.sans};
      font-size: 21px;
      font-weight: bold;
      letter-spacing: -0.5px;
      margin-bottom: 12px;
      ${mediaQueries.phoneLarge} {
        text-align: center;
      }
    }
    div {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      ${mediaQueries.phoneLarge} {
        align-items: center;
      }
      p {
        ${pLight};
        padding: 0;
        margin: 0 0 1px 0;
      }
    }
  `;

  return (
    <Layout
      headerData={{
        title: 'A relentless pursuit of perfection',
        mobileMinHeight: '93vh',
        height: '400px',
      }}
    >
      <FullWidthSection
        textAlign='center'
        height='100%'
        css={css`
          ${container.medium};
          padding-top: 20px;

          ${mediaQueries.phoneLarge} {
            padding-top: 150px;
            margin-bottom: 58px;
          }
        `}
      >
        <img src='/images/team.png' alt='TAG Team' />
        <Row>
          <div>
            <h1>2014</h1>
            <h3>Founded</h3>
          </div>
          <div>
            <h1>17</h1>
            <h3>States</h3>
          </div>
          <div>
            <h1>2</h1>
            <h3>Offices</h3>
          </div>
          <div>
            <h1>140+</h1>
            <h3>Clients</h3>
          </div>
        </Row>
      </FullWidthSection>
      <FullWidthSection
        height='550px'
        css={css`
          background-color: ${colors.lightblue};
          z-index: 1;
          height: 600px;
          text-align: center;
        `}
      >
        <h3 css={smSectionHead}>Radically Honest</h3>
        <h1 css={[h1L, container.medium]}>
          If you had a bit of food stuck in your teeth, we’d let you know.
        </h1>
        <p
          css={[
            pLight,
            css`
              padding-top: 10px;
            `,
          ]}
        >
          We work with brands we love and can’t wait to help grow. That means we
          might not always tell you what you want to hear, but we’ll definitely
          tell you what you need to hear.
        </p>
      </FullWidthSection>
      <FullWidthSection padding='44px 0 0'>
        <h3 css={smSectionHead}>Who We Are</h3>
        <SplitSection
          css={css`
            padding-top: 20px;
          `}
        >
          <NameCol>
            <h2>Justin Emond</h2>
            <p>Co-Founder, Chief Executive Officer</p>
            <h2>Matt Davis</h2>
            <p>Director of Engineering</p>
            <h2>Jen Slemp</h2>
            <p>Director of Strategy</p>
            <h2>Jen May</h2>
            <p>Director of Delivery</p>
          </NameCol>
          <NameCol>
            <h2>Anthony Severo</h2>
            <p>Co-Founder, Chief Strategy Officer</p>
            <h2>Adam Strom</h2>
            <p>Creative Director</p>
            <h2>Christina Andrade</h2>
            <p>Director of Operations</p>
            <h2>Angela Prendergast</h2>
            <p>QA Lead</p>
          </NameCol>
        </SplitSection>
      </FullWidthSection>
      <FullWidthSection
        backgroundColor={colors.yellow}
        textAlign='center'
        height='750px'
        minHeight='730px'
      >
        <h3 css={smSectionHead}>Remote Control</h3>
        <h1 css={h1L}>80% distributed, 100% united</h1>
        <h4 css={[pLight, container.min]}>
          While we have offices in Boston and Oakland, we embrace a remote
          culture, allowing our staff the freedom to do their best, wherever
          that might be.
        </h4>
        <Row>
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
        </Row>
      </FullWidthSection>
      <FullWidthSection padding='44px 0 0'>
        <h3 css={smSectionHead}>Where We Are</h3>
        <SplitSection>
          <Location>
            <h1 css={h1L}>Boston</h1>
            <img src='/images/boston.png' alt='Boston' width='530px' />
            <h3>1st One’s on Us</h3>
            <div>
              <p>Wink &amp; Nod</p>
              <p>Lucy&apos; Lounge</p>
              <p>UpperWest</p>
            </div>
          </Location>
          <Location>
            <h1 css={h1L}>Oakland</h1>
            <img src='/images/oakland.png' alt='Oakland' width='530px' />
            <h3>If it’s Done, We’re Probably Here</h3>
            <div>
              <p>Cafe Van Kleef</p>
              <p>The Ruby Room</p>
              <p>The Alley</p>
            </div>
          </Location>
        </SplitSection>
      </FullWidthSection>
      <FullWidthSection
        minHeight='500px'
        height='500px'
        backgroundColor={colors.lightblue}
        css={css`
          z-index: 1;
        `}
      >
        <h3 css={smSectionHead}>Making Moves?</h3>
        <h1
          css={[
            h1L,
            css`
              padding: 2rem 0;
              text-align: center;
              font-weight: ${weights.bold};
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
