import React from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';
import { css } from '@emotion/core';

import { container, mediaQueries } from '../../styles';

const Image = ({ data }) => {
  // We expect this data to always exist, but adding a safety check so
  // server-side builds do not fail.
  const imageSrc =
    data.relationships.field_image &&
    data.relationships.field_image.localFile &&
    data.relationships.field_image.localFile.childImageSharp &&
    data.relationships.field_image.localFile.childImageSharp.fluid;

  return (
    <>
      {imageSrc && (
        <Img
          fluid={imageSrc}
          alt={data.field_image.alt}
          css={css`
            margin: 0 20px 70px;

            ${mediaQueries.phoneLarge} {
              ${container.min};
              margin: 0 auto 70px;
            }
          `}
        />
      )}
    </>
  );
};

Image.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Image;
