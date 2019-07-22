import React from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';
import { css } from '@emotion/core';

import { container, mediaQueries } from '../../styles';

const Image = ({ data }) => (
  <Img
    fluid={data.relationships.field_image.localFile.childImageSharp.fluid}
    css={css`
      padding: 0 20px;

      ${mediaQueries.desktop} {
        ${container.min};
        padding: 0;
      }
    `}
  />
);

Image.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Image;
