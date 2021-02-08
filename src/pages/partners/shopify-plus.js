import React from 'react';
import { graphql } from 'gatsby';
import { css } from '@emotion/react';

import Layout from '../../components/layout';
import Button from '../../components/Button';
import FullWidthSection from '../../components/FullWidthSection';
import LogoGrid from '../../components/LogoGrid';
import InsightsSlider from '../../components/InsightsSlider';
import CTAGrid from '../../components/CTAGrid';
import Capability from '../../components/Capability';
import Improvement from '../../components/Improvement';
import { colors, mediaQueries } from '../../styles';

const ShopifyPlus = query => {
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
          <Button
            css={css`
              margin-top: 50px;
            `}
          >
            Contact Us
          </Button>
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
          imageSrc={query.data.hawaiianHostMac.childImageSharp.fluid}
          imageAlt='Hawaiian Host'
          stats={[
            { description: 'Increase in traffic', percent: '61%' },
            { description: 'Increase in Order Value', percent: '37%' },
          ]}
          index={0}
          showButton
        />
        <Improvement
          id='badlands'
          brand='badlands'
          brandWidth='250px'
          imageSrc={query.data.badlandsMac.childImageSharp.fluid}
          imageAlt='Badlands'
          stats={[
            { description: 'Increase in Conversion Rate', percent: '364%' },
          ]}
          index={1}
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
      />
      <Capability
        id='weknow'
        imageSrc={query.data.weKnowImageDesktop.childImageSharp.fluid}
        imageAlt='We know that one'
        content={
          <>
            <h2>Yeah. we know that one</h2>
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
                <li>ReCharge</li>
                <li>Bold Apps</li>
                <li>Klaviyo</li>
                <li>Yotpo</li>
                <li>PowerReviews</li>
                <li>Shipstation</li>
                <li>AS/400</li>
              </ul>
              <ul>
                <li>ShipWorks</li>
                <li>Nosto</li>
                <li>Shogun</li>
                <li>Swell</li>
                <li>Loyalty Lion</li>
                <li>Smile.io</li>
                <li>Shippo</li>
                <li>Gorgias</li>
                <li>ZenDesk</li>
                <li>Drupal</li>
                <li>Wordpress</li>
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
          query.data.platformMigrationImageDesktop.childImageSharp.fluid
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
    hawaiianHostMac: file(relativePath: { eq: "hawaiian-host-macbook.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    badlandsMac: file(relativePath: { eq: "badlands-macbook.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    weKnowImageDesktop: file(relativePath: { eq: "we-know.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    platformMigrationImageDesktop: file(
      relativePath: { eq: "platform-migration.png" }
    ) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp
        }
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

export default ShopifyPlus;
