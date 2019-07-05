import React from 'react';
import { navigate } from 'gatsby';
import PropTypes from 'prop-types';
import { css } from '@emotion/core';

import Button from '../Button';
import { smSectionHead, container, mediaQueries, weights } from '../../styles';

import ImageCollage from './ImageCollage';

const slideStyles = css`
  text-align: center;
  ${mediaQueries.phoneLarge} {
    position: relative;
    min-height: 540px;
    text-align: left;
  }
`;

// @todo talk to designers about h1 consistency across slides and font being
// too big for certain client names on mobile.
const h1Styles = css`
  margin-bottom: 10px;
  font-size: 48px;
  line-height: 1.27;
  font-weight: ${weights.black};
  letter-spacing: 0.8px;

  ${mediaQueries.phoneLarge} {
    max-width: 550px;
    min-height: 182px;
    margin-bottom: 40px;
    font-size: 104px;
    line-height: 0.94;
    letter-spacing: 1.4px;
  }
`;

const h3Styles = css`
  margin: 40px 0 20px;
  line-height: 1;

  ${mediaQueries.phoneLarge} {
    margin-top: 0;
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
      <h3 css={[smSectionHead, h3Styles]}>Our Work</h3>
      <h1 css={h1Styles}>{project.title}</h1>
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
