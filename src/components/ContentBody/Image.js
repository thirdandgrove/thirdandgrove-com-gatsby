import React from 'react';
import PropTypes from 'prop-types';

import LazyImage from '../LazyImage';

const Image = ({ data }) => (
  <LazyImage id={data.relationships.field_image.id} />
);

Image.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Image;
