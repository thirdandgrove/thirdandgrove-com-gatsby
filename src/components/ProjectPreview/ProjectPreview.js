import React from 'react';
import { navigate } from 'gatsby';
import PropTypes from 'prop-types';
import { css } from '@emotion/react';

import Button from '../Button';
import { smSectionHead, container, mediaQueries, weights } from '../../styles';
import { ensureTrailingSlash } from '../../util';

import ImageCollage from './ImageCollage';

const slideTitleWrapper = css`
  display: flex;
  width: 100%;
  min-height: 120px;
  margin-bottom: 10px;
  align-items: center;
  word-wrap: initial;
  ${mediaQueries.phoneLarge} {
    max-width: 550px;
    min-height: 194px;
    margin-bottom: 40px;
  }
`;

const h1Styles = css`
  width: 100%;
  margin-bottom: 0;
  font-size: 48px;
  line-height: 1.27;
  font-weight: ${weights.black};
  letter-spacing: 0.8px;
  opacity: 0;
  transition: 0.6s ease all;

  .slick-active & {
    opacity: 1;
  }

  ${mediaQueries.phoneLarge} {
    margin-bottom: 0;
    font-size: 90px;
    line-height: 0.94;
    letter-spacing: 1.4px;
    transform: translateX(200px);
    opacity: 0;

    .slick-active & {
      transform: translateX(0);
    }
  }
`;

const h3Styles = css`
  margin: 40px 0 20px;
  line-height: 1;

  ${mediaQueries.phoneLarge} {
    margin-top: 0;
  }
`;

const ProjectPreview = ({ project, minHeight }) => {
  const slideStyles = css`
    text-align: center;
    ${mediaQueries.phoneLarge} {
      position: relative;
      min-height: ${minHeight}px;
      padding-bottom: 20px;
      text-align: left;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;
    }
  `;
  // Prepare image srcset based on Type (A, B, or C).
  const primaryImageData = project.relationships.field_image.localFile;
  const secondaryImageData =
    project.relationships.field_secondary_image.localFile;
  const tertiaryImageData =
    project.relationships.field_tertiary_image.localFile;

  // Assuming type-a is the default.
  const images = {
    primary: {
      mobile: primaryImageData.childImageMobile.gatsbyImageData,
      phoneLarge: primaryImageData.childImageTypeA.gatsbyImageData,
      alt: project.field_image.alt,
    },
    secondary: {
      mobile: secondaryImageData.childImageMobile.gatsbyImageData,
      phoneLarge: secondaryImageData.childImageTypeA.gatsbyImageData,
      alt: project.field_secondary_image.alt,
    },
    tertiary: {
      mobile: tertiaryImageData.childImageMobile.gatsbyImageData,
      phoneLarge: tertiaryImageData.childImageTypeA.gatsbyImageData,
      alt: project.field_tertiary_image.alt,
    },
  };
  switch (project.field_image_arrangement) {
    case 'type-b':
      images.primary.phoneLarge =
        primaryImageData.childImageTypeB.gatsbyImageData;
      images.secondary.phoneLarge =
        secondaryImageData.childImageTypeB.gatsbyImageData;
      images.tertiary.phoneLarge =
        tertiaryImageData.childImageTypeB.gatsbyImageData;
      break;
    case 'type-c':
      images.primary.phoneLarge =
        primaryImageData.childImageTypeC.gatsbyImageData;
      images.secondary.phoneLarge =
        secondaryImageData.childImageTypeC.gatsbyImageData;
      images.tertiary.phoneLarge =
        tertiaryImageData.childImageTypeC.gatsbyImageData;
      break;
    default:
      break;
  }

  return (
    <div key={project.title} css={[container.max, slideStyles]}>
      <h3 css={[smSectionHead, h3Styles]}>Our Work</h3>
      <div css={slideTitleWrapper}>
        <h1 css={h1Styles}>{project.title}</h1>
      </div>
      <ImageCollage images={images} type={project.field_image_arrangement} />
      <Button onClick={() => navigate(ensureTrailingSlash(project.path.alias))}>
        View Case Study
      </Button>
    </div>
  );
};

ProjectPreview.propTypes = {
  project: PropTypes.object.isRequired,
  minHeight: PropTypes.string,
};

ProjectPreview.defaultProps = {
  minHeight: '750',
};

export default ProjectPreview;
