import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/core';

const ImageCollage = ({ index, images }) => {
  const gridWrap = css`
    height: 100%;
    width: 50vw;
    position: relative;
    left: -30vw;
    background-color: red;
    z-index: 1;
    /* display: grid;
    grid-template-columns: repeat(auto-fill, 30px);
    grid-auto-rows: 30px; */
  `;
  const collage1 = css`
    div {
      height: 50px;
      width: 80px;
    }
  `;
  const collage2 = css`
    div {
      background-color: blue;
      height: 50px;
      width: 80px;
    }
  `;
  const collage3 = css`
    div {
      background-color: green;
      height: 50px;
      width: 80px;
    }
  `;
  const cssSelected = () =>
    // eslint-disable-next-line no-nested-ternary
    index % 3 === 0 ? collage3 : index % 2 === 0 ? collage2 : collage1;
  return (
    <span css={[gridWrap, cssSelected]}>
      <div />
      <div />
      <div />
      {/* <img src={images.primary} alt='primary study' />
      <p>image2</p>
      <p>image3</p> */}
    </span>
  );
};

ImageCollage.propTypes = {
  index: PropTypes.number.isRequired,
  images: PropTypes.object.isRequired,
};

export default ImageCollage;
