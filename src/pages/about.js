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
import ColoredBlocks from '../components/ColoredBlocks';

const About = ({ data }) => {
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

// export const query = graphql`
//   {
//   }
// `;
