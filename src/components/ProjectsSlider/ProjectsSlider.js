import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import { css } from '@emotion/core';
import Slider from 'react-slick';

import ProjectPreview from '../ProjectPreview';
import FullWidthSection from '../FullWidthSection';

const ProjectsSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <StaticQuery
      query={graphql`
        {
          allCaseStudy {
            nodes {
              id
              title
              field_subtitle
              field_inverse_header
              field_primary_image_scale
              field_tertiary_image_scale
              field_secondary_image_scale
              relationships {
                field_tags {
                  name
                }
                field_image {
                  id
                  localFile {
                    publicURL
                  }
                }
                field_tertiary_image {
                  id
                  localFile {
                    publicURL
                  }
                }
                field_secondary_image {
                  id
                  localFile {
                    publicURL
                  }
                }
              }
            }
          }
        }
      `}
      render={data => (
        <FullWidthSection>
          <Slider
            {...settings}
            css={css`
              max-width: 100%;
              max-height: 100%;
            `}
          >
            {data.allCaseStudy.nodes.map((node, i) => {
              return (
                <ProjectPreview key={node.title} index={i} project={node} />
              );
            })}
          </Slider>
        </FullWidthSection>
      )}
    />
  );
};

const mosterQuery = graphql`
  {
    allCaseStudy {
      nodes {
        id
        title
        field_subtitle
        field_inverse_header
        field_primary_image_scale
        field_tertiary_image_scale
        field_secondary_image_scale
        relationships {
          field_components {
            ... on component__text {
              relationships {
                component_type {
                  name
                }
              }
              field_body {
                value
                format
                processed
              }
            }
            ... on component__image {
              relationships {
                component_type {
                  name
                }
                field_image {
                  localFile {
                    publicURL
                  }
                }
              }
            }
            ... on component__quote {
              relationships {
                component_type {
                  name
                }
              }
              field_quote
              field_footer_text
            }
            ... on component__prefooter {
              field_body {
                value
                format
                processed
              }
              field_secondary_body {
                value
                format
                processed
              }
              relationships {
                component_type {
                  name
                }
                field_image {
                  localFile {
                    publicURL
                  }
                }
              }
            }
            ... on component__text_image_split {
              field_body {
                value
                format
                processed
              }
              field_reversed
              relationships {
                component_type {
                  name
                }
                field_image {
                  localFile {
                    publicURL
                  }
                }
              }
            }
            ... on component__text_quote_split {
              field_body {
                processed
              }
              field_quote
              field_reversed
              relationships {
                component_type {
                  name
                }
              }
            }
          }
          field_tags {
            name
          }
          field_image {
            id
            localFile {
              publicURL
            }
          }
          field_tertiary_image {
            id
            localFile {
              publicURL
            }
          }
          field_secondary_image {
            id
            localFile {
              publicURL
            }
          }
        }
      }
    }
  }
`;

export default ProjectsSlider;
