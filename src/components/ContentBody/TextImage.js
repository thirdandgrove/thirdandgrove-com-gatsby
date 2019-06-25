/* eslint-disable react/no-danger */
import React from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';
import { css } from '@emotion/core';

import { mediaQueries, container } from '../../styles';
import SplitSection from '../SplitSection';

const TextImage = ({ data }) => {
  return data.field_reversed ? (
    <SplitSection css={container.max} gridOverride='45% 49%'>
      <Img
        fluid={data.relationships.field_image.localFile.childImageSharp.fluid}
      />
      <section
        dangerouslySetInnerHTML={{ __html: data.field_body.processed }}
      />
    </SplitSection>
  ) : (
    <SplitSection css={container.max} gridOverride='49% 45%'>
      <section
        dangerouslySetInnerHTML={{ __html: data.field_body.processed }}
      />
      <Img
        fluid={data.relationships.field_image.localFile.childImageSharp.fluid}
        css={css`
          margin-bottom: 40px;
        `}
      />
    </SplitSection>
  );
};

TextImage.propTypes = {
  data: PropTypes.object.isRequired,
};

export default TextImage;
