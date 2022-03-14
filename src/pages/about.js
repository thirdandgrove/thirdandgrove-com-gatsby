import React from 'react';
import PropTypes from 'prop-types';
import { navigate, graphql } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import { css } from '@emotion/react';
import styled from '@emotion/styled';

import Layout from '../components/layout';
import FullWidthSection from '../components/FullWidthSection';
import { colors, weights, mediaQueries } from '../styles';
import Button from '../components/Button';
import ColoredBlocks from '../components/ColoredBlocks';

const About = ({ data }) => {
  const remoteWorkStyle = css`
    min-height: 450px;
    position: relative;
    align-items: flex-start;
    justify-content: flex-start;
    margin-bottom: 50px;
    ${mediaQueries.phoneLarge} {
      min-height: 700px;
    }

    div.gatsby-image-wrapper {
      position: absolute;
      right: 0;
      width: 100%;

      ${mediaQueries.phoneLarge} {
        top: 50px;
        width: 70%;
      }
    }

    p {
      position: relative;
      margin-left: 50px;
      margin-top: 25px;
      font-size: 32px;
      ${mediaQueries.phoneLarge} {
        margin-left: 100px;
        margin-top: 0;
        font-size: 36px;
      }
    }

    h2 {
      position: relative;
      color: ${colors.reallydarkgray};
      font-weight: ${weights.bold};
      font-size: 80px;
      margin-left: 50px;

      ${mediaQueries.phoneLarge} {
        font-size: 120px;
        margin-left: 100px;
      }
    }

    button {
      position: relative;
      margin-left: 50px;
      ${mediaQueries.phoneLarge} {
        margin-left: 100px;
      }
    }
  `;

  return (
    <Layout
      headerData={{
        title:
          "An award-winning, industry-defining team that builds digital experiences that aren't just beautiful.",
        mobileMinHeight: '93vh',
        height: '400px',
        color: colors.white,
      }}
    >
      <FullWidthSection css={remoteWorkStyle}>
        <GatsbyImage
          image={data.remotePhoto.childImageSharp.gatsbyImageData}
          alt='Man working remotely at computer with dress shirt and no pants'
        />
        <p>
          Our CEO is in Boston, <br />
          but we are a fully...
        </p>
        <h2>
          Remote
          <br />
          Organization
        </h2>
        <Button>Contact Us</Button>
      </FullWidthSection>
      <ColoredBlocks
        blocks={[
          {
            headline: 'Are you a brand that defies mediocrity?',
            linkTitle: 'Contact Us',
            path: '/contact',
            backgroundColor: colors.yellow,
          },
          {
            headline: 'Check out some of our beautiful work.',
            linkTitle: 'View Work',
            path: '/work',
            backgroundColor: colors.lightblue,
          },
          {
            headline: "Show us what you're made of.",
            linkTitle: 'Join The Team',
            path: 'https://thirdandgrove.breezy.hr',
            backgroundColor: colors.yellow,
          },
        ]}
      />
    </Layout>
  );
};

About.propTypes = {
  data: PropTypes.object.isRequired,
};

export default About;

export const query = graphql`
  {
    remotePhoto: file(relativePath: { eq: "about/remote-working.png" }) {
      childImageSharp {
        gatsbyImageData(
          height: 627
          width: 935
          transformOptions: { cropFocus: CENTER }
          layout: CONSTRAINED
        )
      }
    }
  }
`;
