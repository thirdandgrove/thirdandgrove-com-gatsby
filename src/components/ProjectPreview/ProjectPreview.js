import React from 'react';
import { navigate } from 'gatsby';
import PropTypes from 'prop-types';
import { css } from '@emotion/core';

import Button from '../Button';
import { colors, weights, smSectionHead } from '../../styles';

import ImageCollage from './ImageCollage';

const ProjectPreview = ({ project, index }) => (
  <div
    css={css`
      display: flex;
      height: 650px;
      max-width: 100%;
      justify-content: center;
      align-items: center;
      padding: 3rem;
      section {
        z-index: 2;
        h1 {
          width: 1120px;
          height: 222px;
          color: ${colors.darkgray};
          font-size: 104px;
          font-weight: ${weights.black};
          letter-spacing: 1.39px;
          line-height: 98px;
          margin: 5rem 0 3rem 0;
        }
      }
    `}
    key={project.title}
  >
    <section>
      <h3 css={smSectionHead}>Our Work</h3>
      <h1>{project.title}</h1>
      <Button onClick={() => navigate(project.path.alias)}>
        view case study
      </Button>
    </section>
    <ImageCollage
      images={{
        primary:
          project.relationships.field_image.localFile.childImageSharp.fluid.src,
        secondary:
          project.relationships.field_secondary_image.localFile.childImageSharp
            .fluid.src,
        tertiary:
          project.relationships.field_tertiary_image.localFile.childImageSharp
            .fluid.src,
      }}
      index={index}
    />
  </div>
);

ProjectPreview.propTypes = {
  project: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
};

export default ProjectPreview;
