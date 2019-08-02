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
  dropCap,
} from '../../styles';
import SplitSection from '../SplitSection';

const TextImage = ({ data }) => {
  // We expect this data to always exist, but adding a safety check so
  // server-side builds do not fail.
  const imageSrc =
    data.relationships.field_image &&
    data.relationships.field_image.localFile &&
    data.relationships.field_image.localFile.childImageSharp &&
    data.relationships.field_image.localFile.childImageSharp.fluid;

  const renderDropCap = data.type === 'insight' && data.isFirstText;
  const sectionStyle = css`
    ${container.min};
    font-weight: ${weights.thin};
    grid-column-gap: 20px;
    padding: 0 20px;

    ${mediaQueries.phoneLarge} {
      padding: 0;
    }

    h2,
    h3 {
      ${contentHeadings};
    }

    ${renderDropCap && dropCap}
  `;

  let component = <></>;
  if (imageSrc) {
    if (data.field_reversed) {
      component = (
        <SplitSection css={sectionStyle} gridTemplateColumns='45% 49%'>
          <Img
            fluid={
              data.relationships.field_image.localFile.childImageSharp.fluid
            }
            alt={data.field_image.alt}
          />
          <section
            dangerouslySetInnerHTML={{ __html: data.field_body.processed }}
          />
        </SplitSection>
      );
    } else {
      component = (
        <SplitSection css={sectionStyle} gridTemplateColumns='54% 40%'>
          <section
            dangerouslySetInnerHTML={{ __html: data.field_body.processed }}
          />
          <Img
            fluid={
              data.relationships.field_image.localFile.childImageSharp.fluid
            }
            alt={data.field_image.alt}
            css={css`
              margin-bottom: 40px;
            `}
          />
        </SplitSection>
      );
    }
  }

  return component;
};

TextImage.propTypes = {
  data: PropTypes.object.isRequired,
};

export default TextImage;
