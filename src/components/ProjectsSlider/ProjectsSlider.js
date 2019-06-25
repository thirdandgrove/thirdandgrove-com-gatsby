import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { css } from '@emotion/core';
import Slider from 'react-slick';

import { container } from '../../styles';
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
  const data = useStaticQuery(graphql`
    {
      allCaseStudy {
        nodes {
          ...CaseStudyFragment
        }
      }
    }
  `);
  return (
    <FullWidthSection>
      <Slider
        {...settings}
        css={[
          container.max,
          css`
            .slick-track {
              display: flex;
            }
          `,
        ]}
      >
        {data.allCaseStudy.nodes.map((node, i) => {
          return <ProjectPreview key={node.title} index={i} project={node} />;
        })}
      </Slider>
    </FullWidthSection>
  );
};

export default ProjectsSlider;
