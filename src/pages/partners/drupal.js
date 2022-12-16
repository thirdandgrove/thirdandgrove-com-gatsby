import React from 'react';
import { graphql, Link } from 'gatsby';
import { css } from '@emotion/react';
import styled from '@emotion/styled';

import Layout from '../../components/layout';
import FullWidthSection from '../../components/FullWidthSection';
import ProjectsSlider from '../../components/ProjectsSlider';
import LogoGrid from '../../components/LogoGrid';
import {
  colors,
  mediaQueries,
  fonts,
  weights,
  container,
  pLight,
} from '../../styles';
import SplitSection from '../../components/SplitSection';
import InsightsSlider from '../../components/InsightsSlider';
import Quote from '../../components/ContentBody/Quote';
import CTA from '../../components/CTA';
import DrupalBadge from '../../../static/images/drupal-certified-diamond-partner.svg';

const Drupal = query => {
  const { insights, caseStudies } = query.data;

  const Tripple = styled.article`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-bottom: 80px;
    h2 {
      font-size: 48px;
      margin-bottom: 8px;

      ${mediaQueries.phoneLarge} {
        margin-bottom: 30px;
      }
    }
    p {
      ${pLight};
    }

    ${mediaQueries.phoneLarge} {
      justify-content: flex-start;
    }
  `;
  const sectionPadding = css`
    padding: 50px 20px;

    ${mediaQueries.phoneLarge} {
      padding: 110px 0;
    }
  `;
  return (
    <Layout
      headerData={{
        invert: true,
        label:
          'Stress-Tested Processes — Damn Good Engineers — Drupal 9 Leader',
        title: 'The #1 Drupal agency in the world',
        color: colors.drupalBlue,
        mobileMinHeight: '620px',
      }}
    >
      <FullWidthSection
        height='400px'
        align='left'
        css={css`
          ${sectionPadding} h3 {
            font-family: ${fonts.sans};
            font-size: 18px;
            font-weight: ${weights.bold};
            line-height: 1.39;
            margin-bottom: 12px;
          }
          p {
            font-weight: ${weights.light};
          }
          div {
            ${mediaQueries.phoneLarge} {
              display: flex;
              justify-content: space-between;
            }
          }
          ul {
            margin: 0;
            padding: 0;
            font-size: 16px;
            font-family: ${fonts.sans};
            font-weight: ${weights.bold};
            list-style: none;

            ${mediaQueries.phoneLarge} {
              &:last-of-type {
                margin-right: 100px;
              }
            }
            li {
              margin-bottom: 4px;

              &:before {
                content: '—';
                padding-right: 2px;
              }
            }
          }

          ${mediaQueries.phoneLarge} {
            ${container.medium}
          }
        `}
      >
        <SplitSection
          gridTemplateColumns='45% 49%'
          css={css`
            direction: rtl;
          `}
        >
          <section
            css={css`
              margin: 20px;
              text-align: center;
              ${mediaQueries.phoneLarge} {
                margin: 0 20px 0 80px;
              }
            `}
          >
            <img
              alt='Drupal Diamond Certified Partner'
              src={DrupalBadge}
              width='200'
              css={css`
                max-width: none;
              `}
            />
          </section>
          <section
            css={css`
              direction: ltr;
            `}
          >
            <h3>Go from bottlenecked to bottoms up</h3>
            <p>
              We are one of only two Diamond Certified Drupal Partners globally,
              the highest certification tier offered by the Drupal Association.
              This means you can be confident that we’re the best team out there
              to solve your problems.
            </p>
            <p>
              Your team can’t win if you constantly struggle with slow developer
              velocity and a hamstrung marketing team. And your content surely
              won’t shine if you’re missing a backend that empowers your team to
              do their best work.
            </p>
            <p>
              We’re also the only agency with a Drupal 9 core maintainer. This
              allows us to stay on the cutting-edge of all things Drupal and
              provides us the ability to contribute a substantial number of
              hours giving back to the open-source community.
            </p>
            <p>We’re here to dream big with you.</p>
            <div>
              <ul>
                <li>Drupal migration</li>
                <li>Replatform/redesign</li>
                <li>Content Migration</li>
              </ul>
              <ul>
                <li>Ongoing support</li>
                <li>Training and resource augmentation</li>
              </ul>
            </div>
          </section>
        </SplitSection>
      </FullWidthSection>
      <ProjectsSlider
        data={caseStudies}
        backgroundColor={colors.lightgray}
        tech='Drupal'
      />
      <LogoGrid
        logoset='drupal'
        title='Some of Our Drupal Clients'
        backgroundColor={colors.white}
        minHeight='0'
      />
      <SplitSection
        gridTemplateColumns='repeat(3, 1fr)'
        css={css`
          ${mediaQueries.phoneLarge} {
            ${container.textOnly} padding-top: 30px;
          }
        `}
      >
        <Tripple>
          <h2>1,200+</h2>
          <p>Open Source Contributions</p>
        </Tripple>
        <Tripple>
          <h2>177,000+</h2>
          <p>Hours on D8</p>
        </Tripple>
        <Tripple>
          <h2>Drupal 9</h2>
          <p>Building it as we speak</p>
        </Tripple>
      </SplitSection>
      <SplitSection
        gridColumnGap='16px'
        css={css`
          ${container.min} ${mediaQueries.phoneLarge} {
            padding: 110px 0;
          }
          article {
            ${mediaQueries.phoneLarge} {
              padding-bottom: 30px;
            }
          }
          h2 {
            color: ${colors.reallydarkgray};
            font-family: ${fonts.sans};
            font-size: 21px;
            font-weight: ${weights.bold};
            margin-bottom: 14px;
          }
          p {
            font-weight: ${weights.light};
            margin-bottom: 50px;
            letter-spacing: -0.1px;
          }
        `}
      >
        <article>
          <h2>Drupal 9</h2>
          <p>
            Our Drupal 8 core maintainer is also on the front lines of D9,
            enabling us to better prepare for D9 too. Our team is comfortable
            running the day-to-day needs while preparing for the eventual move
            to D9. We’re going to continue leading the future of Drupal and if
            you need to level up your gameplan, check out our{' '}
            <Link to='/insights/drupal-9-readiness-guide/'>
              definitive guide to Drupal 9
            </Link>
            .
          </p>
        </article>
        <article>
          <h2>Drupal Migrations</h2>
          <p>
            We’ve migrated clients from every CMS under the sun, including
            WordPress, Craft, Sitecore, Adobe, and even custom CMS. We use an
            established process and custom tooling to create fast, strategic
            content migrations.
          </p>
        </article>
        <article>
          <h2>Integrations</h2>
          <p>
            Your integration may be complex but you won’t know it. We have
            experienced architects and engineers who have worked on some of the
            biggest, most complex integrations with Salesforce, Pardot, Magento,
            BigCommerce and more. (This is where we can truly say you won’t find
            better Drupal engineers out there.)
          </p>
        </article>
        <article>
          <h2>Ongoing Support</h2>
          <p>
            Our support and optimization practice is a well-oiled machine — we
            find a security issue on 99% of the Drupal sites we take over. We
            start with a 65-point audit of your site, looking at the Drupal
            configuration, database, source code, security, performance, SEO,
            and best practices. Once we’re moving full steam ahead, your
            dedicated support engineers and project manager help make progress
            on real priorities while keeping everything else running smoothly.
          </p>
        </article>
      </SplitSection>
      <Quote
        size='small'
        data={{
          field_quote:
            'It’s a rare opportunity that an agency like TAG can fit in so well with our in-house team. The support, partnership, and commitment to creating a custom solution for our multi-lingual sites made all the difference in our successful launch.',
          field_footer_text:
            'Steve Reichgut,  Former Director of Web Engineering & Web Operations at Benefit Cosmetics',
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
      sort: { fields: created, order: DESC }
      limit: 5
      filter: {
        field_hidden: { eq: false }
        relationships: {
          field_tags: { elemMatch: { name: { regex: "/drupal/i" } } }
        }
      }
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
                fluid(maxWidth: 450, maxHeight: 400) {
                  ...GatsbyImageSharpFluid_withWebp
                }
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
                      fluid(maxWidth: 630, maxHeight: 630) {
                        ...GatsbyImageSharpFluid_withWebp
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
    caseStudies: allCaseStudy(
      limit: 10
      filter: { field_hidden: { eq: false } }
    ) {
      nodes {
        id
        title
        field_subtitle
        field_inverse_header
        field_image_arrangement
        field_image {
          alt
        }
        field_secondary_image {
          alt
        }
        field_tertiary_image {
          alt
        }
        path {
          alias
        }
        relationships {
          field_tags {
            name
          }
          field_image {
            id
            localFile {
              publicURL
              childImageSharp {
                fluid(maxWidth: 850, maxHeight: 850, cropFocus: NORTH) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
              childImageMobile: childImageSharp {
                fixed(width: 335, height: 260, cropFocus: CENTER) {
                  ...GatsbyImageSharpFixed_withWebp_noBase64
                }
              }
              childImageTypeA: childImageSharp {
                fixed(width: 450, height: 320, cropFocus: CENTER) {
                  ...GatsbyImageSharpFixed_withWebp_noBase64
                }
              }
              childImageTypeB: childImageSharp {
                fixed(width: 380, height: 420, cropFocus: CENTER) {
                  ...GatsbyImageSharpFixed_withWebp_noBase64
                }
              }
              childImageTypeC: childImageSharp {
                fixed(width: 420, height: 340, cropFocus: CENTER) {
                  ...GatsbyImageSharpFixed_withWebp_noBase64
                }
              }
            }
          }
          field_secondary_image {
            id
            localFile {
              publicURL
              childImageSharp {
                fluid(maxWidth: 850, maxHeight: 850) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
              childImageMobile: childImageSharp {
                fixed(width: 1, height: 1) {
                  ...GatsbyImageSharpFixed_withWebp_noBase64
                }
              }
              childImageTypeA: childImageSharp {
                fixed(width: 250, height: 180, cropFocus: CENTER) {
                  ...GatsbyImageSharpFixed_withWebp_noBase64
                }
              }
              childImageTypeB: childImageSharp {
                fixed(width: 340, height: 260, cropFocus: CENTER) {
                  ...GatsbyImageSharpFixed_withWebp_noBase64
                }
              }
              childImageTypeC: childImageSharp {
                fixed(width: 270, height: 210, cropFocus: CENTER) {
                  ...GatsbyImageSharpFixed_withWebp_noBase64
                }
              }
            }
          }
          field_tertiary_image {
            id
            localFile {
              publicURL
              childImageSharp {
                fluid(maxWidth: 850, maxHeight: 850) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
              childImageMobile: childImageSharp {
                fixed(width: 1, height: 1) {
                  ...GatsbyImageSharpFixed_withWebp_noBase64
                }
              }
              childImageTypeA: childImageSharp {
                fixed(width: 250, height: 495, cropFocus: CENTER) {
                  ...GatsbyImageSharpFixed_withWebp_noBase64
                }
              }
              childImageTypeB: childImageSharp {
                fixed(width: 230, height: 210, cropFocus: CENTER) {
                  ...GatsbyImageSharpFixed_withWebp_noBase64
                }
              }
              childImageTypeC: childImageSharp {
                fixed(width: 320, height: 210, cropFocus: CENTER) {
                  ...GatsbyImageSharpFixed_withWebp_noBase64
                }
              }
            }
          }
        }
      }
    }
  }
`;

export default Drupal;
