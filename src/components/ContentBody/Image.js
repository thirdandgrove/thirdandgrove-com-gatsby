import React from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';

const Image = ({ data }) => (
  <Img fluid={data.relationships.field_image.localFile.childImageSharp.fluid} />
);

Image.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Image;
