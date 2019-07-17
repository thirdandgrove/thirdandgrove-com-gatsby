/* eslint-disable react/no-danger */
import React from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';
import { css } from '@emotion/core';

import { fonts, weights, container, mediaQueries } from '../../styles';
import SplitSection from '../SplitSection';

const sectionStyle = css`
  ${container.min};
  font-weight: ${weights.thin};
  grid-column-gap: 20px;
  padding: 0 20px;

  ${mediaQueries.desktop} {
    padding: 0;
  }

  h3 {
    font-family: ${fonts.sans};
    font-size: 16px;
    font-weight: ${weights.bold};
    letter-spacing: 0.2px;
    line-height: 1.69;
    margin-bottom: 30px;

    ${mediaQueries.desktop} {
      margin-bottom: 60px;
    }
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
