import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/core';

import { colors } from '../../styles';
import FullWidthSection from '../FullWidthSection';

const Text = ({ data }) => {
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
        padding: 3rem;
        height: 100%;
      `}
    >
      <section
        css={textCss}
        dangerouslySetInnerHTML={{ __html: data.field_body.processed }}
      />
    </FullWidthSection>
  );
};

Text.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Text;
