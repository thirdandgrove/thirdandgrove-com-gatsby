import React from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';
import { css } from '@emotion/core';

import { container, mediaQueries } from '../../styles';

const Image = ({ data }) => (
  <Img
    fluid={data.relationships.field_image.localFile.childImageSharp.fluid}
    alt={data.field_image.alt}
    css={css`
      margin: 0 20px 70px;

      ${mediaQueries.phoneLarge} {
        ${container.min};
        padding-left: 0;
        padding-right: 0;
        margin: 0 auto 70px;
      }
    `}
  />
);

Image.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Image;
