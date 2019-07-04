import React from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';
import { css } from '@emotion/core';

import { mediaQueries } from '../../styles';

const ImageCollage = ({ images, type }) => {
  const selectedClass = () => 1;

  // Doing all this positioning the old-fashioned way because it doesn't actually
  // follow consistent layout rules that could be used to form a grid. Prepare for
  // allllll the intrinsic ratios.
  const collageWrapper = css`
    margin-bottom: 40px;

    ${mediaQueries.phoneLarge} {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      margin-bottom: 0;
      z-index: -1;

      &.type-a {
        left: 430px;
        right: 70px;

        .collage-board {
          padding-top: 75%;
        }

        .primary-wrapper {
          top: 0;
          left: 0;
          width: 62.5%;
          height: 59.26%;
        }

        .secondary-wrapper {
          bottom: 0;
          right: 37.5%;
          width: 34.72%;
          height: 33.33%;
        }

        .tertiary-wrapper {
          bottom: 0;
          right: 0;
          width: 34.72%;
          height: 91.67%;
        }
      }

      &.type-b {
        left: 450px;
        right: 20px;

        .collage-board {
          padding-top: 66.67%;
        }

        .primary-wrapper {
          top: 8%;
          right: 0;
          width: 50.67%;
          height: 84%;
        }

        .secondary-wrapper {
          bottom: 0;
          left: 0;
          width: 45.33%;
          height: 52%;
        }

        .tertiary-wrapper {
          top: 0;
          right: 54.67%;
          width: 30.67%;
          height: 42%;
        }
      }

      &.type-c {
        left: 430px;
        right: 20px;

        .collage-board {
          padding-top: 58.44%;
        }

        .primary-wrapper {
          top: 12.22%;
          right: 0;
          width: 54.5%;
          height: 75.56%;
        }

        .secondary-wrapper {
          bottom: 0;
          right: 58.44%;
          width: 35.06%;
          height: 46.67%;
        }

        .tertiary-wrapper {
          top: 0;
          left: 0;
          width: 41.56%;
          height: 46.67%;
        }
      }
    }
  `;

  const collageBoardBase = css`
    ${mediaQueries.phoneLarge} {
      position: relative;
      height: 0;
      overflow: hidden;
    }
  `;

  const primaryWrapperBase = css`
    position: relative;
    height: 0;
    padding-top: 77.6%;
    overflow: hidden;

    ${mediaQueries.phoneLarge} {
      position: absolute;
      padding-top: 0;
    }
  `;

  const secTertWrapperBase = css`
    display: none;
    position: absolute;
    overflow: hidden;

    ${mediaQueries.phoneLarge} {
      display: block;
    }
  `;

  const imageStyles = css`
    position: absolute !important;
    width: 100% !important;
    height: 100% !important;
    top: 0;
    left: 0;
  `;

  // Pass array of fixed images with media query for art direction.
  // @see https://www.gatsbyjs.org/packages/gatsby-image/#art-directing-multiple-images
  return (
    <div className={type} css={collageWrapper}>
      <div className='collage-board' css={collageBoardBase}>
        <div css={primaryWrapperBase} className='primary-wrapper'>
          <Img
            fixed={[
              images.primary.mobile.fixed,
              {
                ...images.primary.phoneLarge.fixed,
                media: mediaQueries.phoneLarge.replace(`@media`, ``).trim(),
              },
            ]}
            alt='primary'
            className={`primary${selectedClass()}`}
            css={imageStyles}
          />
        </div>
        <div css={secTertWrapperBase} className='secondary-wrapper'>
          <Img
            fixed={[
              images.secondary.mobile.fixed,
              {
                ...images.secondary.phoneLarge.fixed,
                media: mediaQueries.phoneLarge.replace(`@media`, ``).trim(),
              },
            ]}
            alt='secondary'
            className={`secondary${selectedClass()}`}
            css={imageStyles}
          />
        </div>
        <div css={secTertWrapperBase} className='tertiary-wrapper'>
          <Img
            fixed={[
              images.tertiary.mobile.fixed,
              {
                ...images.tertiary.phoneLarge.fixed,
                media: mediaQueries.phoneLarge.replace(`@media`, ``).trim(),
              },
            ]}
            alt='tertiary'
            className={`tertiary${selectedClass()}`}
            css={imageStyles}
          />
        </div>
      </div>
    </div>
  );
};

ImageCollage.propTypes = {
  images: PropTypes.object.isRequired,
  type: PropTypes.string.isRequired,
};

export default ImageCollage;
