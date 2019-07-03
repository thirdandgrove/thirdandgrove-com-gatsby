import React from 'react';
import { navigate } from 'gatsby';
import PropTypes from 'prop-types';
import { css } from '@emotion/core';

import Button from '../Button';
import { smSectionHead, container, mediaQueries } from '../../styles';

import ImageCollage from './ImageCollage';

const slideStyles = css`
  ${mediaQueries.phoneLarge} {
    display: grid;
    grid-column-gap: 20px;
    grid-template-columns: 400px 110px auto;
    grid-template-rows: 50px auto 50px;
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
      <h3
        css={[
          smSectionHead,
          css`
            ${mediaQueries.phoneLarge} {
              grid-column: 1 / 2;
              grid-row: 1 / 2;
            }
          `,
        ]}
      >
        Our Work
      </h3>
      <h1
        css={css`
          ${mediaQueries.phoneLarge} {
            grid-column: 1 / 3;
            grid-row: 2 / 3;
          }
        `}
      >
        {project.title}
      </h1>

      <ImageCollage images={images} type={project.field_image_arrangement} />
      <Button
        onClick={() => navigate(project.path.alias)}
        css={css`
          ${mediaQueries.phoneLarge} {
            grid-column: 1 / 2;
            grid-row: 3 / 4;
          }
        `}
      >
        View Case Study
      </Button>
    </div>
  );
};

ProjectPreview.propTypes = {
  project: PropTypes.object.isRequired,
};

export default ProjectPreview;
