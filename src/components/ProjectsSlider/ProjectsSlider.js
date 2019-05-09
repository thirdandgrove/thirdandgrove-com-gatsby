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
    centerMode: true,
  };
  return (
    <StaticQuery
      query={graphql`
        {
          allNodeProject(sort: { fields: created, order: DESC }, limit: 10) {
            nodes {
              title
              field_external_link {
                uri
                title
              }
              relationships {
                field_logo {
                  localFile {
                    childImageSharp {
                      fluid {
                        src
                      }
                    }
                  }
                }
                field_case_study {
                  title
                  body {
                    processed
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
            {data.allNodeProject.nodes.map((node, i) => {
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
