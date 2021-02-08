import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/react';
import { graphql, Link } from 'gatsby';

import { FakeButton } from '../components/Button';
import CTA from '../components/CTA';
import CTAGrid from '../components/CTAGrid';
import Layout from '../components/layout';
import ProjectsSlider from '../components/ProjectsSlider';
import Quote from '../components/ContentBody/Quote';
import LogoGrid from '../components/LogoGrid';
import { colors, container, mediaQueries, weights } from '../styles';

const ShopifyPlusFoodAndBeverage = ({ data }) => {
  const sectionStyle = css`
    padding: 50px 20px;
    position: relative;

    ${mediaQueries.phoneLarge} {
      padding: 100px 0 100px 0;
    }

    .basic-block--container {
      width: 820px;
      max-width: 100%;
      margin: 0 auto;
      ${container.textOnly}
      padding-left: 0;
      padding-right: 0;

      ${mediaQueries.phoneLarge} {
        padding-left: 20px;
        padding-right: 20px;
      }
    }

    .basic-block--cta {
      width: fit-content;
      margin: 0 auto;
    }

    h2 {
      font-size: 27px;
      line-height: 39px;
      ${mediaQueries.phoneLarge} {
        font-size: 39px;
        font-weight: ${weights.medium};
        line-height: 48px;
        margin-bottom: 24px;
      }
    }

    p {
      font-weight: ${weights.light};
    }
  `;

  return (
    <Layout
      headerData={{
        metaTitle: `Fully-baked D2C food and beverage ecommerce`,
        title: <>Fully-baked D2C food and beverage ecommerce</>,
        mobileMinHeight: '93vh',
        hideNav: true,
        color: colors.shopifyGreen,
        invert: true,
      }}
    >
      <CTA
        backgroundColor={colors.lightgray}
        headline='Building food and beverage D2C ecommerce experiences that delight and convert'
        subTitle="We have deep expertise working with iconic food and beverage brands to craft direct-to-consumer digital buying experiences that blow our clients' KPIs out of the water. Reach out to learn how we can help your brand."
        cta='Contact Us'
        altStyle
      />
      <ProjectsSlider
        data={data.allCaseStudy}
        backgroundColor={colors.white}
        tech='Shopify Plus Food and Beverage'
        minHeight='750'
      />
      <Quote
        center
        altStyle
        size='large'
        padding='100px 0 100px 0'
        backgroundColor={colors.yellow}
        quoteColor={colors.white}
        data={{
          field_quote:
            'It is a quantum leap forward and we are looking forward to the next leap as well!',
          field_footer_text:
            'Mike Hoefer, Director, King Arthur Baking Company',
        }}
      />
      <section css={sectionStyle}>
        <div className='basic-block--container'>
          <div className='basic-block--title'>
            <h2>
              We are a full service digital commerce agency specializing in food
              and beverage. We help brands design, build, optimize, and market
              their D2C brands online.
            </h2>
          </div>
          <div className='basic-block--content'>
            <p>
              Our creative and strategy teams ideate delightful buying
              experiences for food and beverage brands.
            </p>

            <p>
              We specialize in Shopify, and have deep expertise with Shopify’s
              app store, theme store, front end development, and backend
              integrations. We have integrated with every ERP and CRM tool under
              the sun, including SAP, Microsoft Dynamics (DX), Salesforce,
              NetSuite, QuickBooks, Workday, and Sage.
            </p>

            <p>
              We are fluent in the most crucial regulatory requirements for U.S.
              food brands, including website accessibility ADA guidelines (WCAG
              AA) and the California Consumer Privacy Act (CCPA).
            </p>

            <p>
              We have extensive experience with the highly-regulated alcohol
              industry, including shipping, tax, and marketing. We have built
              deep integrations with ShipCompliant and WineShipping.com to
              fulfill orders, as well as custom needs.
            </p>
          </div>
        </div>
        <Link to='/contact/'>
          <FakeButton className='basic-block--cta'>Contact Us</FakeButton>
        </Link>
      </section>
      <LogoGrid
        logoset='shopifyPlusFoodAndBeverage'
        title='A few of our friends'
      />
      <CTAGrid
        items={data.allShopifyPlusFoodAndBeverageSupportCtaGridTwoJson.edges}
        images={data.allFile.edges}
        cta='Contact Us'
        gridColumns='1fr 1fr'
      />
      <Quote
        center
        altStyle
        size='large'
        padding='100px 0 100px 0'
        backgroundColor={colors.yellow}
        quoteColor={colors.white}
        data={{
          field_quote:
            "Working with Third and Grove has been nothing short of phenomenal. They've successfully built solutions and delivered experiences that help merchants win.",
          field_footer_text: 'Rob Barr, Agency Partnerships, ReCharge Payments',
        }}
      />
      <LogoGrid
        logoset='awards'
        title='Award Wall'
        backgroundColor={colors.white}
        minHeight='0'
        defaultItemWidth='33%'
      />
      <CTA
        backgroundColor={colors.lightgray}
        headline='What are you waiting for?'
        subTitle='Take your D2C food and beverage brand to the next level with Shopify and Third and Grove.'
        cta='Contact Us'
        altStyle
      />
    </Layout>
  );
};

ShopifyPlusFoodAndBeverage.propTypes = {
  data: PropTypes.object.isRequired,
};

export default ShopifyPlusFoodAndBeverage;

export const query = graphql`
  {
    allFile(filter: { absolutePath: { regex: "/drupal-support/" } }) {
      edges {
        node {
          name
          publicURL
          absolutePath
        }
      }
    }
    allShopifyPlusFoodAndBeverageSupportCtaGridTwoJson {
      edges {
        node {
          icon
          title
          description
        }
      }
    }
    allCaseStudy(limit: 10, filter: { field_hidden: { eq: false } }) {
      nodes {
        ...CaseStudyFragment
      }
    }
  }
  fragment CaseStudyFragment on case_study {
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
`;
