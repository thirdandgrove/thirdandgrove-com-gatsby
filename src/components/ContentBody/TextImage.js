import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/core';

import SplitSection from '../SplitSection';
import { colors } from '../../styles';

const TextImage = ({ data }) => {
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
    <SplitSection padding=' 0 3rem'>
      {data.field_reversed ? (
        <>
          <img
            src={data.relationships.field_image.localFile.publicURL}
            alt='article text split'
          />
          <section
            css={textCss}
            dangerouslySetInnerHTML={{ __html: data.field_body.processed }}
          />
        </>
      ) : (
        <>
          <section
            css={textCss}
            dangerouslySetInnerHTML={{ __html: data.field_body.processed }}
          />
          <img
            src={data.relationships.field_image.localFile.publicURL}
            alt='article text split'
          />
        </>
      )}
    </SplitSection>
  );
};

TextImage.propTypes = {
  data: PropTypes.object.isRequired,
};

export default TextImage;
