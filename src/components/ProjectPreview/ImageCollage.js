import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/core';

const ImageCollage = ({ index, images }) => {
  const gridWrap = css`
    position: relative;
    left: -30vw;
    z-index: 1;
    display: grid;
    grid-template-rows: repeat(3, 1rem);
    grid-template-columns: repeat(3, 1rem);
  `;
  const collage1 = css`
    .primary {
      background-color: yellow;
      grid-area: 1 / 1;
    }
    .secondary {
      background-color: blue;
      grid-area: 2 / 3;
    }
    .tertiary {
      background-color: orange;
      grid-area: 3 / 1;
    }
  `;
  return (
    <article css={[gridWrap, collage1]}>
      <img src={images.primary} alt='primary' className='primary' />
      <img src={images.secondary} alt='secondary' className='secondary' />
      <img src={images.tertiary} alt='tertiary' className='tertiary' />
    </article>
  );
};

ImageCollage.propTypes = {
  index: PropTypes.number.isRequired,
  images: PropTypes.object.isRequired,
};

export default ImageCollage;
