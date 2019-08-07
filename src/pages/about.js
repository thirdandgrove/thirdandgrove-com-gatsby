import React from 'react';
import PropTypes from 'prop-types';
import { navigate, graphql } from 'gatsby';
import Img from 'gatsby-image';
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
  jsBreakpoints,
  contValues,
  pLight,
} from '../styles';
import Button from '../components/Button';

const About = ({ data }) => {
  const leadersCss = css`
    padding-top: 20px;

    ${mediaQueries.phoneLarge} {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
    }

    div {
      ${mediaQueries.phoneLarge} {
        flex: 0 0 calc(50% - 60px);
        width: calc(50% - 60px);
      }
    }

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
    margin-bottom: 50px;
    &:hover {
      h1,
      h3,
      p {
        opacity: 0.7;
      }
    }
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
      padding-top: 20px;
      margin-bottom: 12px;
      ${mediaQueries.phoneLarge} {
        text-align: center;
      }
    }
    & > div {
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
    .gatsby-image-wrapper > div {
      // Forcing correct image aspect ratio, overriding inline
      // gatsby-image provided styles
      padding-bottom: 100% !important;

      ${mediaQueries.phoneLarge} {
        padding-bottom: 63.2% !important;
      }
    }
  `;
  const images = data.allFile.nodes;
  const bostonSrc = [
    images.find(img => img.name === 'boston').mobileImage.fluid,
    {
      ...images.find(img => img.name === 'boston').desktopImage.fluid,
      media: `(min-width: ${jsBreakpoints.phoneLarge}px)`,
    },
  ];
  const oaklandSrc = [
    images.find(img => img.name === 'oakland').mobileImage.fluid,
    {
      ...images.find(img => img.name === 'oakland').desktopImage.fluid,
      media: `(min-width: ${jsBreakpoints.phoneLarge}px)`,
    },
  ];
  const teamSrc = images.find(img => img.name === 'team').childImageSharp.fluid;
  return (
    <Layout
      headerData={{
        title: 'A relentless pursuit of perfection.',
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
        <Img
          fluid={teamSrc}
          alt='TAG Team'
          css={css`
            width: 100%;
          `}
        />
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

              ${mediaQueries.phoneLarge} {
                width: ${contValues.min};
              }
            `,
          ]}
        >
          We work with brands we love and can’t wait to help grow. That means we
          might not always tell you what you want to hear, but we’ll definitely
          tell you what you need to hear.
        </p>
      </FullWidthSection>
      <FullWidthSection
        css={css`
          padding: 44px 0 0;

          ${mediaQueries.desktop} {
            padding: 120px 0;
          }
        `}
      >
        <h3 css={smSectionHead}>Who We Are</h3>

        <div css={[leadersCss, container.medium]}>
          <div>
            <h2>Justin Emond</h2>
            <p>Co-Founder, Chief Executive Officer</p>
          </div>
          <div>
            <h2>Anthony Severo</h2>
            <p>Co-Founder, Chief Strategy Officer</p>
          </div>
          <div>
            <h2>Matt Davis</h2>
            <p>Director of Engineering</p>
          </div>
          <div>
            <h2>Adam Strom</h2>
            <p>Creative Director</p>
          </div>
          <div>
            <h2>Jen Slemp</h2>
            <p>Director of Strategy</p>
          </div>
          <div>
            <h2>Christina Andrade</h2>
            <p>Director of Operations</p>
          </div>
          <div>
            <h2>Jen May</h2>
            <p>Director of Delivery</p>
          </div>
          <div>
            <h2>Angela Prendergast</h2>
            <p>QA Lead</p>
          </div>
        </div>
      </FullWidthSection>
      <FullWidthSection
        backgroundColor={colors.yellow}
        textAlign='center'
        height='750px'
        minHeight='730px'
      >
        <h3 css={smSectionHead}>Remote Control</h3>
        <h1 css={h1L}>80% distributed, 100% united</h1>
        <h4
          css={[
            pLight,
            css`
              ${mediaQueries.phoneLarge} {
                width: ${contValues.min};
              }
            `,
          ]}
        >
          While we have offices in Boston and Oakland, we embrace a remote
          culture, allowing our staff the freedom to do their best, wherever
          that might be.
        </h4>
        <Row>
          <div>
            <h1>01</h1>
            <h3>Drive Efficiency</h3>
          </div>
          <div>
            <h1>02</h1>
            <h3>Best Talent</h3>
          </div>
          <div>
            <h1>03</h1>
            <h3>Greater Diversity</h3>
          </div>
          <div>
            <h1>04</h1>
            <h3>Good for the Planet</h3>
          </div>
        </Row>
      </FullWidthSection>
      <FullWidthSection
        css={css`
          padding: 44px 0 0;

          ${mediaQueries.desktop} {
            padding: 70px 0;
          }
        `}
      >
        <h3 css={smSectionHead}>Where We Are</h3>
        <SplitSection css={container.large} gridColumnGap='20px'>
          <Location>
            <h1 css={h1L}>Boston</h1>
            <Img fluid={bostonSrc} alt='Boston' />
            <h3>1st One’s on Us</h3>
            <div>
              <p>Wink &amp; Nod</p>
              <p>Lucy&apos; Lounge</p>
              <p>UpperWest</p>
            </div>
          </Location>
          <Location>
            <h1 css={h1L}>Oakland</h1>
            <Img fluid={oaklandSrc} alt='Oakland' />
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
        height='400px'
        backgroundColor={colors.lightblue}
        padding='0 0 30px'
        css={css`
          z-index: 1;
        `}
      >
        <h3 css={smSectionHead}>Making Moves?</h3>
        <h2
          css={css`
            color: ${colors.reallydarkgray};
            font-size: 39px;
            font-weight: ${weights.bold};
            letter-spacing: -0.45px;
            line-height: 1.23;
            text-align: center;
            margin-bottom: 30px;

            ${mediaQueries.phoneLarge} {
              font-size: 48px;
              letter-spacing: -0.2px;
            }
          `}
        >
          Show us what you&apos;re made of.
        </h2>
        <Button onClick={() => navigate(`/careers/`)}>
          view open positions
        </Button>
      </FullWidthSection>
    </Layout>
  );
};

About.propTypes = {
  data: PropTypes.object.isRequired,
};

export default About;

export const query = graphql`
  {
    allFile(filter: { absolutePath: { regex: "/boston|oakland|team/" } }) {
      nodes {
        name
        childImageSharp {
          fluid(maxWidth: 980, maxHeight: 480) {
            ...GatsbyImageSharpFluid
          }
        }
        mobileImage: childImageSharp {
          fluid(cropFocus: NORTH, maxHeight: 335, maxWidth: 335) {
            ...GatsbyImageSharpFluid
          }
        }
        desktopImage: childImageSharp {
          fluid(maxWidth: 530, srcSetBreakpoints: [480, 900, 1200]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  }
`;
