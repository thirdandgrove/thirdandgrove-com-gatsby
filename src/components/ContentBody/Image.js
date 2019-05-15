import React from 'react';
import { css } from '@emotion/core';

import FullWidthSection from '../FullWidthSection';

export default ({ data }) => (
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
