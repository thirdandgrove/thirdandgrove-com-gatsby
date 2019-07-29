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
} from '../styles';
import Button from '../components/Button';

export default () => {
  const NameCol = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 3rem;
    h2 {
      height: 40px;
      width: 430px;
      color: ${colors.darkgray};
      font-family: ${fonts.serif};
      font-size: 27px;
      font-weight: bold;
      line-height: 52px;
      text-align: center;
    }
    p {
      height: 60px;
      width: 430px;
      color: ${colors.darkgray};
      font-family: ${fonts.sans};
      font-size: 16px;
      font-weight: 300;
      letter-spacing: 0.2px;
      line-height: 27px;
      text-align: center;
      padding-bottom: 90px;
    }
  `;
  const Row = styled.section`
    display: flex;
    justify-content: space-between;
    padding-top: 16px;
    margin-bottom: 16px;

    ${mediaQueries.phoneLarge} {
      margin-bottom: 75px;
    }

    div {
      display: flex;
      flex-direction: column;
      padding: 2rem 3rem;
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
    align-items: center;
    h1 {
      height: 84px;
      width: 335px;
      color: ${colors.darkgray};
      font-family: ${fonts.serif};
      font-size: 72px;
      font-weight: 500;
      letter-spacing: -1px;
      line-height: 84px;
      text-align: center;
    }
    h3 {
      height: 30px;
      width: 335px;
      color: ${colors.darkgray};
      font-family: ${fonts.sans};
      font-size: 21px;
      font-weight: bold;
      letter-spacing: -0.5px;
      line-height: 30px;
      text-align: center;
    }
    span {
      display: flex;
      flex-direction: column;
      p {
        color: ${colors.darkgray};
        font-family: ${fonts.sans};
        font-size: 16px;
        font-weight: 300;
        letter-spacing: 0.2px;
        line-height: 27px;
        text-align: center;
        padding: 0;
        margin: 3px;
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
          h3 {
            height: 50px;
            width: 880px;
            color: ${colors.darkgray};
            font-family: ${fonts.serif};
            font-size: 36px;
            font-weight: 100;
            letter-spacing: 0.4px;
            line-height: 76px;
            text-align: center;
          }
          h1 {
            height: 168px;
            width: 980px;
            color: ${colors.darkgray};
            font-family: ${fonts.serif};
            font-size: 72px;
            font-weight: 500;
            letter-spacing: -1px;
            line-height: 84px;
            text-align: center;
          }
          p {
            height: 60px;
            width: 680px;
            color: ${colors.darkgray};
            font-family: ${fonts.sans};
            font-size: 16px;
            font-weight: 300;
            letter-spacing: 0.2px;
            line-height: 27px;
            text-align: center;
          }
        `}
      >
        <h3>Radically Honest</h3>
        <h1>
          If you had a bit of food stuck in your teeth, we’d let you know.
        </h1>
        <p>
          We work with brands we love and can’t wait to help grow. That means we
          might not always tell you what you want to hear, but we’ll definitely
          tell you what you need to hear.
        </p>
      </FullWidthSection>
      <FullWidthSection>
        <h3
          css={css`
            height: 50px;
            width: 580px;
            color: ${colors.darkgray};
            font-family: ${fonts.serif};
            font-size: 36px;
            font-weight: 100;
            letter-spacing: 0.4px;
            line-height: 76px;
            text-align: center;
          `}
        >
          Who We Are
        </h3>
        <SplitSection>
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
        padding='10vw'
        textAlign='center'
        height='750px'
      >
        <h3 css={smSectionHead}>Remote Control</h3>
        <h1 css={h1L}>80% distributed, 100% united</h1>
        <h4
          css={css`
            height: 60px;
            width: 680px;
            color: ${colors.darkgray};
            font-family: ${fonts.sans};
            font-size: 16px;
            font-weight: 300;
            letter-spacing: 0.2px;
            line-height: 27px;
            text-align: center;
          `}
        >
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
      <FullWidthSection>
        <h3
          css={css`
            height: 50px;
            width: 580px;
            color: ${colors.darkgray};
            font-family: ${fonts.serif};
            font-size: 36px;
            font-weight: 100;
            letter-spacing: 0.4px;
            line-height: 76px;
            text-align: center;
          `}
        >
          Where We Are
        </h3>
        <SplitSection>
          <Location>
            <h1>Boston</h1>
            <img src='/images/boston.png' alt='Boston' />
            <h3>1st One’s on Us</h3>
            <span>
              <p>Wink &amp; Nod</p>
              <p>Lucy&apos; Lounge</p>
              <p>UpperWest</p>
            </span>
          </Location>
          <Location>
            <h1>Oakland</h1>
            <img src='/images/oakland.png' alt='Oakland' />
            <h3>If it’s Done, We’re Probably Here</h3>
            <span>
              <p>Cafe Van Kleef</p>
              <p>The Ruby Room</p>
              <p>The Alley</p>
            </span>
          </Location>
        </SplitSection>
      </FullWidthSection>
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
