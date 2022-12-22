import React from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';
import { css } from '@emotion/react';

import { container, mediaQueries } from '../../styles';

const Image = ({ data }) => {
  return data.relationships.field_image.localFile.childImageSharp ? (
    <Img
      fluid={data.relationships.field_image.localFile.childImageSharp.fluid}
      alt={data.field_image.alt}
      css={css`
        margin: 0 20px 25px;

        ${mediaQueries.phoneLarge} {
          ${container.min};
          padding-left: 0;
          padding-right: 0;
          margin: 0 auto 25px;
        }
      `}
    />
  ) : (
    <div
      css={css`
        width: 680px;
        max-width: 100%;
        padding-left: 0;
        padding-right: 0;
        margin: 0 auto 25px;
      `}
    >
      <img
        src={data.relationships.field_image.localFile.publicURL}
        alt={data.field_image.alt}
        css={css`
          margin: 0 20px 0;

          ${mediaQueries.phoneLarge} {
            ${container.min};
            padding-left: 0;
            padding-right: 0;
            margin: 0 auto 0;
          }
        `}
      />
    </div>
  );
};

Image.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Image;
