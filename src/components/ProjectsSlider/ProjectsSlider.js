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
              ...CaseStudyFragment
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
