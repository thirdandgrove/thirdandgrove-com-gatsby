import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/core';

const ImageCollage = ({ index, images }) => {
  const collage1 = css`
    color: red;
  `;
  const collage2 = css`
    color: blue;
  `;
  const collage3 = css`
    color: green;
  `;
  const cssSelected = () =>
    // eslint-disable-next-line no-nested-ternary
    index % 3 === 0 ? collage3 : index % 2 === 0 ? collage2 : collage1;
  return (
    <span css={cssSelected}>
      <p>image1</p>
      <p>image2</p>
      <p>image3</p>
    </span>
  );
};

ImageCollage.propTypes = {
  index: PropTypes.number.isRequired,
  images: PropTypes.object.isRequired,
};

export default ImageCollage;
