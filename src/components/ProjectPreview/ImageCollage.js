import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/core';

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
  return (
    <article css={flexWrap}>
      <div className='twoStack'>
        <img
          src={images.secondary}
          alt='secondary'
          className={`secondary${selectedClass()}`}
        />
        <img
          src={images.primary}
          alt='primary'
          className={`primary${selectedClass()}`}
        />
      </div>
      <img
        src={images.tertiary}
        alt='tertiary'
        className={`tertiary${selectedClass()}`}
      />
    </article>
  );
};

ImageCollage.propTypes = {
  images: PropTypes.object.isRequired,
};

export default ImageCollage;
