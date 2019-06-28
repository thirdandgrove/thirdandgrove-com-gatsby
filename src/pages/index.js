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
    field_primary_image_scale
    field_tertiary_image_scale
    field_secondary_image_scale
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
        }
      }
    }
  }
`;
