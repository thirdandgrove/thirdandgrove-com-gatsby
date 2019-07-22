/* eslint-disable react/no-danger */
import React from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';
import { css } from '@emotion/core';

import {
  weights,
  container,
  mediaQueries,
  contentHeadings,
} from '../../styles';
import SplitSection from '../SplitSection';

const sectionStyle = css`
  ${container.min};
  ${contentHeadings};
  font-weight: ${weights.thin};
  grid-column-gap: 20px;
  padding: 0 20px;

  ${mediaQueries.phoneLarge} {
    padding: 0;
  }
`;

const TextImage = ({ data }) => {
  return data.field_reversed ? (
    <SplitSection css={sectionStyle} gridOverride='45% 49%'>
      <Img
        fluid={data.relationships.field_image.localFile.childImageSharp.fluid}
      />
      <section
        dangerouslySetInnerHTML={{ __html: data.field_body.processed }}
      />
    </SplitSection>
  ) : (
    <SplitSection css={sectionStyle} gridOverride='54% 40%'>
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
