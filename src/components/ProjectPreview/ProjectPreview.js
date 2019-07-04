import React from 'react';
import { navigate } from 'gatsby';
import PropTypes from 'prop-types';
import { css } from '@emotion/core';

import Button from '../Button';
import { smSectionHead, container, mediaQueries } from '../../styles';

import ImageCollage from './ImageCollage';

const slideStyles = css`
  ${mediaQueries.phoneLarge} {
    position: relative;
    min-height: 540px;
  }
`;

const ProjectPreview = ({ project }) => {
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
      phoneLarge: primaryImageData.childImageTypeA,
    },
    secondary: {
      mobile: secondaryImageData.childImageMobile,
      phoneLarge: secondaryImageData.childImageTypeA,
    },
    tertiary: {
      mobile: tertiaryImageData.childImageMobile,
      phoneLarge: tertiaryImageData.childImageTypeA,
    },
  };
  switch (project.field_image_arrangement) {
    case 'type-b':
      images.primary.phoneLarge = primaryImageData.childImageTypeB;
      images.secondary.phoneLarge = secondaryImageData.childImageTypeB;
      images.tertiary.phoneLarge = tertiaryImageData.childImageTypeB;
      break;
    case 'type-c':
      images.primary.phoneLarge = primaryImageData.childImageTypeC;
      images.secondary.phoneLarge = secondaryImageData.childImageTypeC;
      images.tertiary.phoneLarge = tertiaryImageData.childImageTypeC;
      break;
    default:
      break;
  }

  return (
    <div key={project.title} css={[container.max, slideStyles]}>
      <h3 css={smSectionHead}>Our Work</h3>
      <h1>{project.title}</h1>
      <ImageCollage images={images} type={project.field_image_arrangement} />
      <Button onClick={() => navigate(project.path.alias)}>
        View Case Study
      </Button>
    </div>
  );
};

ProjectPreview.propTypes = {
  project: PropTypes.object.isRequired,
};

export default ProjectPreview;
