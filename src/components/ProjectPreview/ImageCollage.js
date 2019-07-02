import React from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';
import { css } from '@emotion/core';

import { mediaQueries } from '../../styles';

const ImageCollage = ({ images, type }) => {
  const flexWrap = css`
    display: flex;
    position: relative;
    height: 500px;
    width: 30vw;
    left: -30vw;
    z-index: 1;
    .twoStack {
      display: flex;
      flex-direction: column;
      padding: 2rem;
    }
  `;
  // // Alternate between the classes based on slide number
  // const slideNumber = index + 1;
  // const selectedClass = () =>
  //   // eslint-disable-next-line no-nested-ternary
  //   slideNumber % 3 === 0 ? 3 : slideNumber % 2 === 0 ? 2 : 1;
  const selectedClass = () => 1;

  // Pass array of fixed images with media query for art direction.
  // @see https://www.gatsbyjs.org/packages/gatsby-image/#art-directing-multiple-images
  return (
    <article className={type} css={flexWrap}>
      <div className='twoStack'>
        <Img
          fixed={[
            images.secondary.mobile.fixed,
            {
              ...images.secondary.desktop.fixed,
              media: mediaQueries.desktop.replace(`@media`, ``).trim(),
            },
          ]}
          alt='secondary'
          className={`secondary${selectedClass()}`}
        />
        <Img
          fixed={[
            images.primary.mobile.fixed,
            {
              ...images.secondary.desktop.fixed,
              media: mediaQueries.desktop.replace(`@media`, ``).trim(),
            },
          ]}
          alt='primary'
          className={`primary${selectedClass()}`}
        />
      </div>
      <Img
        fixed={[
          images.tertiary.mobile.fixed,
          {
            ...images.tertiary.desktop.fixed,
            media: mediaQueries.desktop.replace(`@media`, ``).trim(),
          },
        ]}
        alt='primary'
        className={`tertiary${selectedClass()}`}
      />
    </article>
  );
};

ImageCollage.propTypes = {
  images: PropTypes.object.isRequired,
  type: PropTypes.string.isRequired,
};

export default ImageCollage;
