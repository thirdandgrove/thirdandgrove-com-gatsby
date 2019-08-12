/* eslint-disable react/no-danger */
/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import { graphql } from 'gatsby';
import propTypes from 'prop-types';
import { css } from '@emotion/core';
import Image from 'gatsby-image';

import Layout from '../components/layout';
import FullWidthSection from '../components/FullWidthSection';
import { fonts, weights, contValues, mediaQueries, container } from '../styles';
import SplitSection from '../components/SplitSection';

const Boston = ({ data }) => {
  return (
    <Layout
      headerData={{
        title: 'You won’t find a better Drupal agency in Boston.',
        mobileMinHeight: '93vh',
      }}
    >
      <FullWidthSection
        fontWeight={weights.thin}
        margin='0 auto'
        padding='0 20px'
        textAlign='left'
        align='start'
        justify='start'
        height='auto'
        minHeight='auto'
        css={css`
          padding-top: 2rem;
          ul {
            padding: 0 0 2rem 0;
            margin: 0;
            li {
              font-family: ${fonts.sans};
              letter-spacing: 1px;
              list-style: none;
              padding: 0;
            }
          }

          ${mediaQueries.phoneLarge} {
            padding: 2rem 0 0;
            width: ${contValues.min};
          }
        `}
      >
        <p>
          We&apos;re a full-service Boston-based agency with the best engineers
          in the city—any city really. We are the only company to employ a
          Drupal 8 core maintainer and consistently rank in the{' '}
          <a href='https://www.drupal.org/drupal-services'>
            top 10 of Drupal agencies in the world.
          </a>
        </p>

        <ul>
          <li>
            <strong>Over 177,000 hours on Drupal 8.</strong> That&apos;s over
            7,375 days of our lives (talk about time well spent).
          </li>
          <li>
            <strong>100% Acquia Certified.</strong> Feel free to check in with
            anyone at Acquia about us.
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
            MVP for our work on Acquia’s cloud APIs.
          </li>
        </ul>

        <h2>Full Digital Coverage</h2>

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
          knowledge by working on some of the biggest commerce sites in the
          world.
        </p>

        <h2>We know our stuff but we’re not know-it-alls.</h2>

        <p>
          Two heads are better than one but a unified team is better than two.
          We deliver the knowledge and horsepower but you bring the experience
          that is needed for a thoughtful, reliable migration. It’s a
          partnership and we like it that way.
        </p>

        <p>
          Our experienced Architects will lead a thorough discovery process so
          we can take full ownership of your project. With your in-depth
          background and future needs mapped out, we’ll know exactly what to do
          to maximize your Drupal project + ensure that you’ll be ready for D9.
          Think of it this way—we usually support projects once we’re done so
          it’s a lot easier for the both of us to do it right from the start.
        </p>
      </FullWidthSection>

      <SplitSection
        css={css`
          font-weight: ${weights.thin};
          grid-column-gap: 20px;
          padding: 0 20px;
          ${mediaQueries.phoneLarge} {
            ${container.min};
            padding: 0;
            padding-bottom: 4rem;
          }
        `}
      >
        <section
          dangerouslySetInnerHTML={{
            __html: `<h2> Want to catch up over coffee or a drink?</h2>
            <p>
              We’re located in Downtown Crossing but enjoy putting in some miles to
              get around the city (no, not walking, uber of course).
            </p>`,
          }}
        />
        <Image
          fluid={data.file.childImageSharp.fluid}
          alt='Boston'
          css={css`
            margin-bottom: 40px;
          `}
        />
      </SplitSection>
    </Layout>
  );
};

Boston.propTypes = {
  data: propTypes.object.isRequired,
};

export default Boston;

export const query = graphql`
  {
    file(name: { eq: "boston" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;
