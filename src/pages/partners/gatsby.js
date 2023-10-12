import React from 'react';
import { graphql } from 'gatsby';
import { css } from '@emotion/react';

import Layout from '../../components/layout';
import FullWidthSection from '../../components/FullWidthSection';
import { colors, mediaQueries, fonts, weights, container } from '../../styles';
import InsightsSlider from '../../components/InsightsSlider';
import Quote from '../../components/ContentBody/Quote';
import CTA from '../../components/CTA';
import SplitSection from '../../components/SplitSection';
import { StaticImage } from 'gatsby-plugin-image';

const Gatsby = query => {
  const { insights } = query.data;

  const sectionPadding = css`
    padding: 50px 20px;

    ${mediaQueries.phoneLarge} {
      ${container.medium}
    }
  `;
  const badgeStyle = css`
    width: 100%;
    display: flex;
    justify-content: center !important;
    margin-bottom: 50px;
  `;

  return (
    <Layout
      headerData={{
        invert: true,
        label: 'Fast — Secure — Scalable',
        title: 'Building the future of digital with Gatsby.',
        color: colors.gatsbyPurple,
        mobileMinHeight: '620px',
      }}
    >
      <FullWidthSection
        align='left'
        css={css`
          ${sectionPadding}
          ${container.min}
          h4 {
            color: ${colors.reallydarkgray};
            font-family: ${fonts.sans};
            font-size: 18px;
            font-weight: bold;
            margin-bottom: 14px;
          }
          p {
            font-weight: ${weights.light};
            margin-bottom: 50px;
            letter-spacing: -0.1px;
          }
        `}
      >
        <SplitSection
          gridTemplateColumns='45% 49%'
          css={css`
            direction: ltr;
            ${mediaQueries.phoneLarge} {
              direction: rtl;
            }
          `}
        >
          <section
            css={css`
              margin: 0 20px 40px 0;
              text-align: center;
              ${mediaQueries.phoneLarge} {
                margin: 0 20px 0 80px;
              }
            `}
          >
            <StaticImage
              src='../../../static/images/gatsby-badge.png'
              alt='Gatsby Badge'
              placeholder='blurred'
              layout='fixed'
              width={180}
            />
          </section>
          <section
            css={css`
              direction: ltr;
            `}
          >
            <h4>
              Build a digital experience that your competitors can’t compete
              with
            </h4>
            <p>
              Cutting-edge doesn’t have to mean risky. We were the first to
              build a headless commerce experience using Drupal, and have
              pioneered a number of custom integrations to make breakthrough
              impossible.
            </p>
          </section>
        </SplitSection>
        <h4>Our Site</h4>
        <p>
          How’s our site running? Fast, right? Our site leverages Drupal for its
          backend and Gatsby for its frontend, creating an instantaneous
          experience for you, and a smooth CMS for us.
        </p>
        <h4>Innovation</h4>
        <p>
          <a href='https://www.gatsbyjs.org/blog/2019-06-26-live-preview-for-drupal/'>
            We’re building Live Preview with Drupal + Gatsby
          </a>{' '}
          for a better content editing experience. This is a turning point for
          Gatsby adoption in the Drupal community.
        </p>
      </FullWidthSection>
      <Quote
        size='small'
        data={{
          field_quote:
            'We’re excited about Third and Grove’s groundbreaking work integrating Drupal + Gatsby. As a clear leader in the community, they’ve proven themselves in developing cutting-edge experiences that bring best-of-breed technologies together.',
          field_footer_text: 'Sam Bhagwat, Gatsby co-founder/COO',
        }}
      />
      <InsightsSlider
        data={insights}
        showButton={false}
        backgroundColor={colors.lightgray}
      />
      <CTA />
    </Layout>
  );
};

export const query = graphql`
  {
    insights: allInsight(
      sort: { created: DESC }
      limit: 5
      filter: { field_hidden: { eq: false } }
    ) {
      nodes {
        id
        title
        field_inverse_header
        field_image {
          alt
        }
        created(formatString: "MMM D, YYYY")
        path {
          alias
        }
        relationships {
          node_type {
            name
          }
          uid {
            name: display_name
          }
          field_image {
            id
            localFile {
              publicURL
              childImageSharp {
                gatsbyImageData(width: 450, height: 400, layout: CONSTRAINED)
              }
            }
          }
          field_components {
            ... on component__text {
              relationships {
                component_type {
                  name
                }
              }
              field_body {
                processed
              }
            }
            ... on component__image {
              id
              field_image {
                alt
              }
              relationships {
                component_type {
                  name
                }
                field_image {
                  id
                  localFile {
                    publicURL
                    childImageSharp {
                      gatsbyImageData(
                        width: 630
                        height: 630
                        layout: CONSTRAINED
                      )
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`;

export default Gatsby;
