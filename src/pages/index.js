import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/layout';
import InsightsSlider from '../components/InsightsSlider';
import WhatWeDo from '../components/WhatWeDo';
import SplitSection from '../components/SplitSection';
import { ContactUs, BeUs } from '../components/Prefooter';
import ProjectsSlider from '../components/ProjectsSlider';

export default () => {
  return (
    <Layout
      headerData={{
        title: 'We are an obsessive digital innovation company.',
      }}
    >
      <ProjectsSlider />
      <WhatWeDo />
      <InsightsSlider />
      <SplitSection>
        <ContactUs />
        <BeUs />
      </SplitSection>
    </Layout>
  );
};

// define fragments
export const query = graphql`
  fragment InsightFragment on insight {
    id
    title
    field_inverse_header
    created(formatString: "MMMM DD YYYY")
    path {
      alias
    }
    relationships {
      node_type {
        name
      }
      uid {
        name
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
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
          }
        }
      }
    }
  }
  fragment CaseStudyFragment on case_study {
    id
    title
    field_subtitle
    field_inverse_header
    field_image_arrangement
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
            fluid(maxWidth: 850, maxHeight: 850) {
              ...GatsbyImageSharpFluid
            }
          }
          childImageMobile: childImageSharp {
            fixed(width: 335, height: 260) {
              ...GatsbyImageSharpFixed
            }
          }
          childImageTypeA: childImageSharp {
            fixed(width: 900, height: 640) {
              ...GatsbyImageSharpFixed
            }
          }
          childImageTypeB: childImageSharp {
            fixed(width: 760, height: 840) {
              ...GatsbyImageSharpFixed
            }
          }
          childImageTypeC: childImageSharp {
            fixed(width: 840, height: 680) {
              ...GatsbyImageSharpFixed
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
              ...GatsbyImageSharpFluid
            }
          }
          childImageMobile: childImageSharp {
            fixed(width: 1, height: 1) {
              ...GatsbyImageSharpFixed
            }
          }
          childImageTypeA: childImageSharp {
            fixed(width: 500, height: 360) {
              ...GatsbyImageSharpFixed
            }
          }
          childImageTypeB: childImageSharp {
            fixed(width: 680, height: 520) {
              ...GatsbyImageSharpFixed
            }
          }
          childImageTypeC: childImageSharp {
            fixed(width: 540, height: 420) {
              ...GatsbyImageSharpFixed
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
              ...GatsbyImageSharpFluid
            }
          }
          childImageMobile: childImageSharp {
            fixed(width: 1, height: 1) {
              ...GatsbyImageSharpFixed
            }
          }
          childImageTypeA: childImageSharp {
            fixed(width: 500, height: 990) {
              ...GatsbyImageSharpFixed
            }
          }
          childImageTypeB: childImageSharp {
            fixed(width: 460, height: 410) {
              ...GatsbyImageSharpFixed
            }
          }
          childImageTypeC: childImageSharp {
            fixed(width: 640, height: 420) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    }
  }
`;
