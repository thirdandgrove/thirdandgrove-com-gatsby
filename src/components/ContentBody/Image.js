import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/core';

import FullWidthSection from '../FullWidthSection';

const Image = ({ data }) => (
  <FullWidthSection padding=' 0 3rem'>
    <img
      css={css`
        height: 100%;
        width: 100%;
        padding: 0 3rem;
        object-fit: cover;
      `}
      src={data.relationships.field_image.localFile.publicURL}
      alt='article full width'
    />
  </FullWidthSection>
);

Image.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Image;
