import React from 'react';
import { graphql } from 'gatsby';
import { css } from '@emotion/react';

import Layout from '../../components/layout';
import FullWidthSection from '../../components/FullWidthSection';
import LogoGrid from '../../components/LogoGrid';
import CTAGrid from '../../components/CTAGrid';
import Capability from '../../components/Capability';
import Improvement from '../../components/Improvement';
import ContactForm from '../../components/ContactForm';
import Quote from '../../components/ContentBody/Quote';
import { colors, mediaQueries, container, fonts, weights } from '../../styles';

const Shopify = query => {
  const { allShopifyJson } = query.data;
  const { hero, testimonials, services, belowHero } = allShopifyJson?.nodes[0];
  const sectionPadding = css`
    padding: 50px 20px 0;
    ${mediaQueries.phoneLarge} {
      padding: 0;
    }
  `;

  return (
    <Layout
      headerData={{
        title: hero[0]?.title,
        subTitle: hero[0]?.subtitle,
        color: colors.yellow,
        mobileMinHeight: '450px',
        width: '480px',
        titlePadding: '75px 100px 0',
        height: '450px',
      }}
    >
      <FullWidthSection
        align='left'
        minHeight='300px'
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
        <h4>{belowHero[0].title}</h4>
        <p>{belowHero[0].description}</p>
      </FullWidthSection>

      <FullWidthSection
        align='left'
        css={css`
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          padding: 106px 20px 121px;

          ${mediaQueries.phoneLarge} {
            padding: 0 0 80px;
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
        items={services}
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
            <h2>See our full list of Partners</h2>
            <div
              css={css`
                display: flex;
                gap: 40px;
              `}
            >
              <ul>
                <li>Algolia</li>
                <li>Afterpay</li>
                <li>Attentive</li>
                <li>Boost Search</li>
                <li>Findify</li>
                <li>Foursixty</li>
                <li>Dynamic Yield</li>
                <li>Listrak</li>
                <li>Gorgias</li>
                <li>Klevu</li>
                <li>Nosto</li>
              </ul>
              <ul>
                <li>Omnisend</li>
                <li>OneTrust</li>
                <li>Rise.ai</li>
                <li>Yottaa</li>
                <li>Zendesk</li>
              </ul>
            </div>
          </>
        }
        index={0}
        maxWidth
      />

      <FullWidthSection
        css={css`
          display: grid;
          grid-template-columns: 1fr;
          grid-gap: 2rem;
          align-items: baseline;

          ${mediaQueries.phoneLarge} {
            grid-template-columns: 1fr 1fr;
          }
        `}
      >
        {testimonials &&
          testimonials.map(testimonial => {
            return (
              <Quote
                size='small'
                data={{
                  field_quote: testimonial.field_quote,
                  field_footer_text: testimonial.field_footer_text,
                }}
              />
            );
          })}
      </FullWidthSection>

      <LogoGrid
        logoset='shopifyPlus'
        title='Taking Names'
        backgroundColor={colors.lightgray}
        minHeight='0'
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
    allShopifyJson {
      nodes {
        testimonials {
          field_quote
          field_footer_text
        }
        hero {
          title
          subtitle
        }
        services {
          title
          description
        }
        belowHero {
          title
          description
        }
      }
    }
  }
`;

export default Shopify;
