import React from 'react';
import { css } from '@emotion/core';

import { colors } from '../../styles';
import FullWidthSection from '../FullWidthSection';

export default ({ data }) => {
  const textCss = css`
    p {
      font-family: NBInternationalPro;
      font-size: 21px;
      color: ${colors.darkgray};
      letter-spacing: 0;
      line-height: 36px;
    }
  `;
  return (
    <FullWidthSection
      css={css`
        display: block;
        padding: 3rem;
      `}
    >
      <section
        css={textCss}
        dangerouslySetInnerHTML={{ __html: data.field_body.processed }}
      />
    </FullWidthSection>
  );
};
