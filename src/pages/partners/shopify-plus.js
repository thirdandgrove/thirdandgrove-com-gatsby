import React from 'react';
import { graphql } from 'gatsby';
import { css } from '@emotion/core';

import Layout from '../../components/layout';
import FullWidthSection from '../../components/FullWidthSection';
import LogoGrid from '../../components/LogoGrid';
import ProjectsSlider from '../../components/ProjectsSlider';
import CTA from '../../components/CTA';
import { colors } from '../../styles';
import { partnersSub } from '../../styles/custom-css';

export default query => {
  const { caseStudies } = query.data;

  return (
    <Layout
      headerData={{
        title: 'Ecommerce that converts',
        color: colors.yellow,
        mobileMinHeight: '707px',
        width: '480px',
        titlePadding: '0 100px',
      }}
    >
      <FullWidthSection height='400px' align='left' css={partnersSub}>
        <h4>Shopify Plus</h4>
      </FullWidthSection>
      <CTA
        headline={
          <>
            The premier Shopify
            <br />
            Plus-Certified Agency
          </>
        }
        subTitle={
          <>
            We build brands through goal-busting experiences.
            <br />
            Ready to get started?
          </>
        }
        cta="LET'S Talk"
        headlineStyle={css`
          font-size: 3rem;
        `}
        subTitleStyle={css`
          text-align: center;
        `}
        padding='238px 0px'
      />
      <LogoGrid
        logoset='shopifyPlus'
        title='Taking Names'
        backgroundColor={colors.lightgray}
        minHeight='0'
      />
      <ProjectsSlider
        data={caseStudies}
        backgroundColor={colors.white}
        tech='Shopify Plus'
      />
      <CTA headline="Now let's get you promoted" padding='127px 0px' />
    </Layout>
  );
};

export const query = graphql`
  {
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
