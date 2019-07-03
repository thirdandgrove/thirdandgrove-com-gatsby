import React from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';
import { css } from '@emotion/core';

import { mediaQueries } from '../../styles';

const ImageCollage = ({ images, type }) => {
  const selectedClass = () => 1;

  const collageWrapper = css`
    ${mediaQueries.phoneLarge} {
      outline: solid 1px red;
      grid-column: 2 / 4;
      grid-row: 1 / 4;
      display: grid;
      grid-template-columns: repeat(16, 1fr);
      grid-template-rows: repeat(14, 20px);
      grid-column-gap: 20px;
      grid-row-gap: 20px;

      &.type-a {
        .primary-wrapper {
          padding-top: 71%;
        }

        .secondary-wrapper {
          padding-top: 72%;
        }

        .tertiary-wrapper {
          padding-top: 198%;
        }
      }

      &.type-b {
        .primary-wrapper {
          padding-top: 81%;
          grid-column: 8 / 17;
          grid-row: 3 / 11;
        }

        .secondary-wrapper {
          padding-top: 76%;
          grid-column: 2 / 8;
          grid-row: 8 / 15;
        }

        .tertiary-wrapper {
          padding-top: 89%;
          grid-column: 1 / 8;
          grid-row: 1 / 6;
        }
      }

      &.type-c {
        .primary-wrapper {
          padding-top: 110%;
        }

        .secondary-wrapper {
          padding-top: 78%;
        }

        .tertiary-wrapper {
          padding-top: 65.6%;
        }
      }
    }
  `;

  const primaryWrapperMobile = css`
    position: relative;
    height: 0;
    padding-top: 77.6%;
    overflow: hidden;
  `;

  const secTertWrapperBase = css`
    position: relative;
    display: none;
    ${mediaQueries.phoneLarge} {
      display: block;
      height: 0;
      overflow: hidden;
    }
  `;

  const imageStyles = css`
    display: block !important;
    position: absolute !important;
    height: 100% !important;
    width: 100% !important;
    top: 0;
  `;

  // Pass array of fixed images with media query for art direction.
  // @see https://www.gatsbyjs.org/packages/gatsby-image/#art-directing-multiple-images
  return (
    <div className={type} css={collageWrapper}>
      <div css={primaryWrapperMobile} className='primary-wrapper'>
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
  );
};

ImageCollage.propTypes = {
  images: PropTypes.object.isRequired,
  type: PropTypes.string.isRequired,
};

export default ImageCollage;
