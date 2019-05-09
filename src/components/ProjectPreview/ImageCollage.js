import React from 'react';
import PropTypes from 'prop-types';

const ImageCollage = ({ index, images }) => {
  return <p>images</p>;
};

ImageCollage.propTypes = {
  index: PropTypes.number.isRequired,
  images: PropTypes.object.isRequired,
};

export default ImageCollage;
