import React from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';
import { css } from '@emotion/core';

import { mediaQueries } from '../../styles';

const ImageCollage = ({ images }) => {
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

  // Prepare fixed images data for art-directed images using media queries.
  // @see https://www.gatsbyjs.org/packages/gatsby-image/#art-directing-multiple-images
  const srcset = {
    primary: [
      images.primary.mobile.fixed,
      {
        ...images.primary.desktop.fixed,
        media: `${mediaQueries.desktop}`,
      },
    ],
    secondary: [
      images.secondary.mobile.fixed,
      {
        ...images.secondary.desktop.fixed,
        media: `(min-width: 1200px)`,
      },
    ],
    tertiary: [
      images.tertiary.mobile.fixed,
      {
        ...images.tertiary.desktop.fixed,
        media: `${mediaQueries.desktop}`,
      },
    ],
  };

  return (
    <article css={flexWrap}>
      <div className='twoStack'>
        <Img
          // src={images.secondary.mobile.fixed.src}
          fixed={images.secondary.mobile.fixed}
          alt='secondary'
          className={`secondary${selectedClass()}`}
        />
      </div>
    </article>
  );
};

ImageCollage.propTypes = {
  images: PropTypes.object.isRequired,
};

export default ImageCollage;
