/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import { graphql } from 'gatsby';
import propTypes from 'prop-types';
import { css } from '@emotion/core';

import Layout from '../components/layout';
import FullWidthSection from '../components/FullWidthSection';
import Text from '../components/ContentBody/Text';
import TextImage from '../components/ContentBody/TextImage';
import {
  fonts,
  weights,
  contValues,
  mediaQueries,
  contentHeadings,
} from '../styles';

const Boston = ({ data }) => {
  return (
    <Layout
      headerData={{
        title: 'You won’t find a better Drupal agency in the Bay Area',
      }}
    >
      <FullWidthSection
        fontWeight={weights.thin}
        margin='0 auto'
        padding='0 20px'
        textAlign='left'
        align='start'
        justify='start'
        height='100%'
        css={css`
          h2,
          h3 {
            ${contentHeadings}
          }
          ${mediaQueries.phoneLarge} {
            padding: 0;
            width: ${contValues.min};
          }
        `}
      >
        <p
          css={css`
            padding-top: 2rem;
          `}
        >
          We&apos;re a full-service Boston-based agency with the best engineers
          in the city—any city really. We are the only company to employ a
          Drupal 8 core maintainer and consistently rank in the top 10 of Drupal
          agencies in the world.
        </p>
      </FullWidthSection>
      <FullWidthSection
        fontWeight={weights.thin}
        margin='0 auto'
        padding='0 20px'
        textAlign='left'
        align='start'
        justify='start'
        height='100%'
        css={css`
          ${mediaQueries.phoneLarge} {
            padding: 0;
            width: ${contValues.min};
          }
          ul {
            margin: 0;
            li {
              font-family: ${fonts.sans};
              letter-spacing: 1px;
              list-style: none;
            }
          }
        `}
      >
        <ul>
          <li>
            <strong>Over 177,000 hours on Drupal 8.</strong> That&apos;s over
            7,375 days of our lives (talk about time well spent.)
          </li>
          <li>
            <strong>100% Acquia Certified.</strong> Feel free to check in with
            someone at Acquia about us.
          </li>
          <li>
            <strong>Writing Drupal 9.</strong> Our Drupal 8 core maintainer
            (@catch) is also working on Drupal 9.
          </li>
          <li>
            <strong>Pushing Drupal forward.</strong> We&apos;ve made over 1,400+
            contributions to Drupal since our inception.
          </li>
          <li>
            <strong>Obsessive about innovation.</strong> We were the first to
            build a headless Drupal site for Quicken.com and won the Acquia 2014
            MVP for our work on their cloud APIs.
          </li>
        </ul>
      </FullWidthSection>
      <Text
        data={{
          field_body: {
            processed: `
          <h2> Full Digital Coverage</h2>
          <h3> Digital Strategy</h3>
          <p>
            The foundation of success. We know what rocks to look under to drive
            unique strategies for your business needs.
          </p>
          <h3>Creative</h3>
          <p>
            The connection to your brand experience. Reaching your goals is a hell
            of a lot easier when you look good doing it.
          </p>
          <h3>Engineering</h3>
          <p>
            Our bread and butter. We’ve earned our technical chops and commerce
            knowledge by working on some of the biggest commerce sites in the world.
          </p>
          <h2> We know our stuff but we’re not know-it-alls.</h2>
          <p>
            Two heads are better than one but a unified team is better than two. We
            deliver the knowledge and horsepower but you bring the experience that
            is needed for a thoughtful, reliable migration. It’s a partnership and
            we like it that way.
          </p>
          <p>
            Our experienced Architects will lead a thorough discovery process so we
            can take full ownership of your project. With your in-depth background
            and future needs mapped out, we’ll know exactly what to do to maximize
            your Drupal project + ensure that you’ll be ready for D9. Think of it
            this way—we usually support projects once we’re done so it’s a lot
            easier for the both of us to do it right from the start.
          </p>`,
          },
        }}
      />
      <TextImage
        data={{
          field_body: {
            processed: `<h2> Want to catch up over coffee or a drink?</h2>
          <p>
          We’re located in the amazing creator space at 1528 Webster St in Downtown Oakland but find ourselves all over the Bay Area to meet with our clients (one of the truest forms of love—taking the Bart so our clients don’t have to).
          </p>`,
          },
          field_image: { alt: 'San Francisco' },
          relationships: {
            field_image: {
              localFile: {
                childImageSharp: { fluid: data.file.childImageSharp.fluid },
              },
            },
          },
        }}
      />
    </Layout>
  );
};

Boston.propTypes = {
  data: propTypes.object.isRequired,
};

export default Boston;

export const query = graphql`
  {
    file(name: { eq: "san-francisco" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;
