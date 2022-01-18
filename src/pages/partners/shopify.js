import React from 'react';
import { graphql, Link } from 'gatsby';
import { css } from '@emotion/react';

import Layout from '../../components/layout';
import Button from '../../components/Button';
import FullWidthSection from '../../components/FullWidthSection';
import LogoGrid from '../../components/LogoGrid';
import InsightsSlider from '../../components/InsightsSlider';
import CTAGrid from '../../components/CTAGrid';
import Capability from '../../components/Capability';
import Improvement from '../../components/Improvement';
import ContactForm from '../../components/ContactForm';
import { colors, mediaQueries } from '../../styles';

const Shopify = query => {
  const { allShopifyPlusCtaGridFourJson, allFile, insights } = query.data;

  return (
    <Layout
      headerData={{
        title: 'Ecommerce that converts',
        color: colors.yellow,
        mobileMinHeight: '707px',
        width: '480px',
        titlePadding: '0 100px',
        children: (
          <Link to='/partners/shopify/#contact'>
            <Button
              css={css`
                margin-top: 50px;
              `}
            >
              Contact Us
            </Button>
          </Link>
        ),
      }}
    >
      <FullWidthSection
        align='left'
        css={css`
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          padding: 106px 20px 121px;

          ${mediaQueries.phoneLarge} {
            padding: 76px 0 80px;
          }
        `}
      >
        <Improvement
          id='hawaiian-host'
          brand='hawaiian-host'
          brandWidth='200px'
          content='At a time when a Pacific getaway was out of reach, we helped Hawaiian Host send the taste of the islands to your front door.'
          imageSrc={query.data.hawaiianHostMac.childImageSharp.fluid}
          imageAlt='Hawaiian Host'
          stats={[
            { description: 'Increase in traffic', percent: '61%' },
            { description: 'Increase in Order Value', percent: '37%' },
          ]}
          index={0}
          link='/work/hawaiian-host'
          showButton
        />
        <Improvement
          id='badlands'
          brand='badlands'
          brandWidth='250px'
          content='We helped Badlands pivot their D2C strategy to bring the best outdoor gear in the world directly to diehards all across America.'
          imageSrc={query.data.badlandsMac.childImageSharp.fluid}
          imageAlt='Badlands'
          stats={[
            { description: 'Increase in Conversion Rate', percent: '364%' },
          ]}
          index={1}
          link='/work/badlands/'
          showButton
        />
      </FullWidthSection>
      <CTAGrid
        items={allShopifyPlusCtaGridFourJson.edges}
        images={allFile.edges}
        gridColumns='1fr 1fr 1fr 1fr'
        altStyle={false}
        maxWidth
        invisibleCta
        noPaddingImg
        extraCSSSection={css`
          padding-bottom: 0 !important;

          > div {
            padding-bottom: 40px;
          }
        `}
      />
      <LogoGrid
        logoset='shopifyApps'
        title='Our Favorite Partners'
        subtitle='These are our top apps that we use with merchants on Shopify'
        backgroundColor={colors.white}
        styles={css`
          padding-top: 25px !important;
          padding-bottom: 80px !important;

          > h2 {
            font-size: 33px;
            font-weight: 700;
            letter-spacing: normal;
            line-height: 1.2;
          }
          > h3 {
            font-size: 16px;
            font-weight: 100;
            font-family: 'NB International Pro', sans-serif;
            margin-bottom: 0;
          }
          > div {
            display: flex;
            justify-content: center;
            flex-wrap: wrap;
            margin-bottom: 10px;

            ${mediaQueries.phoneLarge} {
              margin-bottom: 0;
            }
          }
          > div > div {
            width: auto;
            flex: unset;
            padding: 0 10px;
            margin-bottom: 0;

            ${mediaQueries.phoneLarge} {
              margin-bottom: 30px;
            }
          }
          > div > div > img {
            margin-bottom: 0;
          }
        `}
        minHeight='100px !important'
        defaultItemWidth='20%'
      />
      <Capability
        id='weknow'
        imageSrc={query.data.weKnowImageDesktop.childImageSharp.gatsbyImageData}
        imageAlt='We know that app'
        content={
          <>
            <h2>We know these apps too.</h2>
            <div
              css={css`
                display: flex;
              `}
            >
              <ul>
                <li>SAP</li>
                <li>Net Suite</li>
                <li>Salesforce Marketing Cloud</li>
                <li>Salesforce CRM</li>
                <li>Bold Apps</li>
                <li>Loyalty Lion</li>
                <li>Gorgias</li>
                <li>PowerReviews</li>
                <li>Shipstation</li>
                <li>AS/400</li>
              </ul>
              <ul>
                <li>ShipWorks</li>
                <li>Nosto</li>
                <li>Shogun</li>
                <li>Swell</li>
                <li>Smile.io</li>
                <li>Shippo</li>
                <li>ZenDesk</li>
                <li>Drupal</li>
                <li>Wordpress</li>
                <li>Gatsby Cloud</li>
              </ul>
            </div>
          </>
        }
        index={0}
        maxWidth
      />
      <Capability
        id='migration'
        imageSrc={
          query.data.platformMigrationImageDesktop.childImageSharp
            .gatsbyImageData
        }
        imageAlt='White shoe'
        content={
          <>
            <h2>Platform Migrations</h2>
            <ul>
              <li>Woo Commerce</li>
              <li>SAP Hybris</li>
              <li>Magento 1&2</li>
              <li>Oracle Commerce Cloud</li>
              <li>Salesforce Commerce Cloud</li>
            </ul>
          </>
        }
        index={1}
        maxWidth
      />
      <LogoGrid
        logoset='shopifyPlus'
        title='Taking Names'
        backgroundColor={colors.lightgray}
        minHeight='0'
      />
      <InsightsSlider
        data={insights}
        showButton={false}
        showTitle={false}
        backgroundColor={colors.lightgray}
      />
      <FullWidthSection
        backgroundColor={colors.lightblue}
        padding='110px 0'
        minHeight='100%'
      >
        <h3
          id='contact'
          css={css`
            font-size: 36px;
            margin-bottom: 20px;
            ${mediaQueries.phoneLarge} {
              font-size: 48px;
              margin: 0 0 1.45rem;
            }
          `}
        >
          The premier Shopify
          <br />
          Plus-Certified Agency
        </h3>
        <p
          css={css`
            font-size: 16px;
            line-height: 27px;
            font-weight: lighter;
            text-align: center;
          `}
        >
          We build brands through goal-busting experiences.
          <br />
          Ready to get started?
        </p>
        <ContactForm formName='shopify-support' />
      </FullWidthSection>
    </Layout>
  );
};

export const query = graphql`
  {
    allShopifyPlusCtaGridFourJson {
      edges {
        node {
          icon
          title
          description
        }
      }
    }
    allFile(filter: { absolutePath: { regex: "/shopify-plus/" } }) {
      edges {
        node {
          name
          publicURL
          absolutePath
        }
      }
    }
    hawaiianHostMac: file(
      relativePath: { eq: "hawaiian-host-macbook@2x.png" }
    ) {
      childImageSharp {
        fluid(maxWidth: 1440, quality: 100) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    badlandsMac: file(relativePath: { eq: "badlands-macbook@2x.png" }) {
      childImageSharp {
        fluid(maxWidth: 1440, quality: 100) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    weKnowImageDesktop: file(relativePath: { eq: "we-know.png" }) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED)
      }
    }
    platformMigrationImageDesktop: file(
      relativePath: { eq: "platform-migration.png" }
    ) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED)
      }
    }
    insights: allInsight(
      sort: { fields: created, order: DESC }
      limit: 5
      filter: {
        field_hidden: { eq: false }
        relationships: {
          field_tags: { elemMatch: { name: { regex: "/shopify plus/i" } } }
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
  }
`;

export default Shopify;
