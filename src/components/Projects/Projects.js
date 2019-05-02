import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import { css } from '@emotion/core';
import Slider from 'react-slick';

import FullWidthSection from '../FullWidthSection';

const Projects = () => {
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
            {data.allNodeProject.nodes.map(node => {
              return (
                <div key={node.title}>
                  <h3>{node.title}</h3>
                  <img
                    alt='project logo'
                    src={
                      node.relationships.field_logo.localFile.childImageSharp
                        .fluid.src
                    }
                  />
                </div>
              );
            })}
          </Slider>
        </FullWidthSection>
      )}
    />
  );
};

export default Projects;
