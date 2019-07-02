import React from 'react';
import { navigate } from 'gatsby';
import PropTypes from 'prop-types';
import { css } from '@emotion/core';

import Button from '../Button';
import { colors, weights, smSectionHead } from '../../styles';

import ImageCollage from './ImageCollage';

const ProjectPreview = ({ project, index }) => {
  // Prepare image srcset based on Type (A, B, or C).
  const primaryImageData = project.relationships.field_image.localFile;
  const secondaryImageData =
    project.relationships.field_secondary_image.localFile;
  const tertiaryImageData =
    project.relationships.field_tertiary_image.localFile;

  // Assuming type-a is the default.
  const images = {
    primary: {
      mobile: primaryImageData.childImageMobile,
      desktop: primaryImageData.childImageTypeA,
    },
    secondary: {
      mobile: secondaryImageData.childImageMobile,
      desktop: secondaryImageData.childImageTypeA,
    },
    tertiary: {
      mobile: tertiaryImageData.childImageMobile,
      desktop: tertiaryImageData.childImageTypeA,
    },
  };
  switch (project.field_image_arrangement) {
    case 'type-b':
      images.primary.desktop = primaryImageData.childImageTypeB;
      images.secondary.desktop = secondaryImageData.childImageTypeB;
      images.tertiary.desktop = primaryImageData.childImageTypeB;
      break;
    case 'type-c':
      images.primary.desktop = primaryImageData.childImageTypeC;
      images.secondary.desktop = secondaryImageData.childImageTypeC;
      images.tertiary.desktop = primaryImageData.childImageTypeC;
      break;
    default:
      break;
  }

  return (
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
      <ImageCollage images={images} type={project.field_image_arrangement} />
    </div>
  );
};

ProjectPreview.propTypes = {
  project: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
};

export default ProjectPreview;
