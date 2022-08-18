import React from 'react';
import PropTypes from 'prop-types';
import { navigate, graphql } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import { css } from '@emotion/react';
import styled from '@emotion/styled';

import Layout from '../components/layout';
import FullWidthSection from '../components/FullWidthSection';
import LogoGrid from '../components/LogoGrid';
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

const About = ({ data }) => {
  const leadersCss = css`
    padding-top: 20px;

    ${mediaQueries.phoneLarge} {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      padding-left: 40px;
      padding-right: 40px;
    }

    div {
      ${mediaQueries.phoneLarge} {
        flex: 0 0 calc(50% - 86px);
        padding-top: 20px;

        &:nth-child(odd):last-child {
          margin-left: auto;
          margin-right: auto;
        }
      }
    }

    h2 {
      font-size: 21px;
      font-weight: ${weights.bold};
      text-align: center;
      margin-bottom: 6px;
      padding-top: 40px;

      ${mediaQueries.phoneLarge} {
        font-size: 27px;
      }
    }

    p {
      ${pLight};
      margin-bottom: 64px;
      text-align: center;
      ${mediaQueries.phoneLarge} {
        margin-bottom: 90px;
      }
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
      justify-content: space-around; // for Edge
    }

    div {
      width: 50%;
      margin-bottom: 40px;

      ${mediaQueries.phoneLarge} {
        width: auto;
        padding: 0 36px;
      }

      h2 {
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
    width: 100%;
    max-width: 750px;
    h2,
    h3,
    p {
      transition: opacity 0.3s ease;
      opacity: 0.7;
    }
    &:hover {
      cursor: pointer;
      h2,
      h3,
      p {
        opacity: 1;
      }
    }
    h2 {
      ${h1L};
      padding-top: 10px;
      margin-bottom: 8px;
      text-align: center;

      ${mediaQueries.phoneLarge} {
        text-align: center;
      }
    }
    h3 {
      color: ${colors.reallydarkgray};
      font-family: ${fonts.sans};
      font-size: 21px;
      font-weight: ${weights.bold};
      letter-spacing: -0.5px;
      padding-top: 20px;
      margin-bottom: 12px;
      text-align: center;

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
  `;
  const images = data.allFile.nodes;

  // returns the correct image source needed to render
  const getSrc = (name, type) => {
    if (name === 'team_2') {
      return data.teamPhoto.nodes.find(img => img.name === name).childImageSharp
        .gatsbyImageData;
    }
    if (type === 'location') {
      return images.find(img => img.name === name).largeSquare.gatsbyImageData;
    }
    return images.find(img => img.name === name).childImageSharp
      .gatsbyImageData;
  };

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
        <GatsbyImage
          image={getSrc('team_2')}
          alt='TAG Team'
          css={css`
            width: 100%;
          `}
        />
        <Row>
          <div>
            <h2>2013</h2>
            <h3>Founded</h3>
          </div>
          <div>
            <h2>17</h2>
            <h3>States</h3>
          </div>
          <div>
            <h2>140+</h2>
            <h3>Clients</h3>
          </div>
          <div>
            <h2>14+</h2>
            <h3>Awards</h3>
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
        <h2 css={[h1L, container.medium]}>
          If you had a bit of food stuck in your teeth, we’d let you know.
        </h2>
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
            <GatsbyImage alt='Justin Emond' image={getSrc('emond', 'leader')} />
            <h2>Justin Emond</h2>
            <p>Founder, Chief Executive Officer</p>
          </div>
          <div>
            <GatsbyImage alt='Jen Slemp' image={getSrc('slemp', 'leader')} />
            <h2>Jen Slemp</h2>
            <p>Chief Operating Officer</p>
          </div>
          <div>
            <GatsbyImage
              alt='Christina Andrade'
              image={getSrc('andrade', 'leader')}
            />
            <h2>Christina Andrade</h2>
            <p>Chief People Officer</p>
          </div>
          <div>
            <GatsbyImage
              alt='Joneric Amundson'
              image={getSrc('joneric', 'leader')}
            />
            <h2>Joneric Amundson</h2>
            <p>Creative Director</p>
          </div>
          <div>
            <GatsbyImage
              alt='Nina Collier'
              image={getSrc('collier', 'leader')}
            />
            <h2>Nina Collier</h2>
            <p>Director of Ecommerce</p>
          </div>
          <div>
            <GatsbyImage
              alt='Brent Schultz'
              image={getSrc('schultz', 'leader')}
            />
            <h2>Brent Schultz</h2>
            <p>Director of Engineering</p>
          </div>
          <div>
            <GatsbyImage
              alt='Monica Thompson'
              image={getSrc('thompson', 'leader')}
            />
            <h2>Monica Thompson</h2>
            <p>Director of Strategy</p>
          </div>
          <div>
            <GatsbyImage alt='Cristina Holt' image={getSrc('holt', 'leader')} />
            <h2>Cristina Holt</h2>
            <p>Director of Project Management</p>
          </div>
        </div>
      </FullWidthSection>
      <LogoGrid
        logoset='awards'
        title='Trophy Case'
        subtitle='We’ve won a few awards'
        backgroundColor={colors.yellow}
        minHeight='0'
        defaultItemWidth='33%'
      />
      <FullWidthSection
        css={css`
          padding: 44px 0 0;

          ${mediaQueries.desktop} {
            padding: 70px 0;
          }
        `}
      >
        <h3 css={smSectionHead}>Where We Are</h3>
        <FullWidthSection>
          <Location onClick={() => navigate(`/boston/`)}>
            <h2 css={h1L}>Boston</h2>
            <GatsbyImage image={getSrc('boston', 'location')} alt='Boston' />
            <h3>Howdya Like Them Apples?</h3>
          </Location>
        </FullWidthSection>
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
        <Button>
          <a
            href='https://thirdandgrove.breezy.hr/'
            target='_blank'
            rel='noreferrer'
          >
            view open positions
          </a>
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
    teamPhoto: allFile(filter: { name: { in: "team_2" } }) {
      nodes {
        name
        childImageSharp {
          gatsbyImageData(
            height: 480
            width: 980
            transformOptions: { cropFocus: CENTER }
            layout: CONSTRAINED
          )
        }
      }
    }
    allFile(
      filter: {
        absolutePath: {
          regex: "/boston|emond|slemp|andrade|may|topp|joneric|collier|schultz|thompson|holt/"
        }
      }
    ) {
      nodes {
        name
        childImageSharp {
          gatsbyImageData(
            transformOptions: { cropFocus: NORTH }
            layout: FULL_WIDTH
            aspectRatio: 1.275
          )
        }
        largeSquare: childImageSharp {
          gatsbyImageData(
            aspectRatio: 1.5
            transformOptions: { cropFocus: NORTH }
            layout: CONSTRAINED
          )
        }
      }
    }
  }
`;
