import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/core';

const ImageCollage = ({ index, images }) => {
  const slideNumber = index + 1;
  const gridWrap = css`
    z-index: 1;
    display: grid;
    grid-template-rows: repeat(3, 1fr);
    grid-template-columns: repeat(3, 1fr);

    position: relative;
    height: 500px;
    width: 50vw;
    left: -30vw;

    .primary1 {
      grid-area: 1 / 1;
    }
    .primary2 {
      grid-area: 1 / 1;
    }
    .primary3 {
      grid-area: 1 / 1;
    }

    .secondary1 {
      grid-area: 2 / 3;
    }
    .secondary2 {
      grid-area: 2 / 3;
    }
    .secondary3 {
      grid-area: 2 / 3;
    }

    .tertiary1 {
      grid-area: 3 / 1;
    }
    .tertiary2 {
      grid-area: 3 / 1;
    }
    .tertiary3 {
      grid-area: 3 / 1;
    }
  `;
  const selectedClass = () =>
    // eslint-disable-next-line no-nested-ternary
    slideNumber % 3 === 0 ? 3 : slideNumber % 2 === 0 ? 2 : 1;
  return (
    <article css={gridWrap}>
      <img
        src={images.primary}
        alt='primary'
        className={`primary${selectedClass()}`}
      />
      <img
        src={images.secondary}
        alt='secondary'
        className={`secondary${selectedClass()}`}
      />
      <img
        src={images.tertiary}
        alt='tertiary'
        className={`tertiary${selectedClass()}`}
      />
    </article>
  );
};

ImageCollage.propTypes = {
  index: PropTypes.number.isRequired,
  images: PropTypes.object.isRequired,
};

export default ImageCollage;
