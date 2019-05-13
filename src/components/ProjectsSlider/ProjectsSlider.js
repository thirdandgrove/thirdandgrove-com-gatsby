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

export default ProjectsSlider;
