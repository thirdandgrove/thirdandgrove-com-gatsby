import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/core';

import SplitSection from '../SplitSection';
import LazyImage from '../LazyImage';
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
  const imageCss = css`
    justify-self: center;
    align-self: center;
  `;
  return (
    <SplitSection padding='3rem'>
      {data.field_reversed ? (
        <>
          <LazyImage id={data.relationships.field_image.id} />
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
          <LazyImage id={data.relationships.field_image.id} />
        </>
      )}
    </SplitSection>
  );
};

TextImage.propTypes = {
  data: PropTypes.object.isRequired,
};

export default TextImage;
