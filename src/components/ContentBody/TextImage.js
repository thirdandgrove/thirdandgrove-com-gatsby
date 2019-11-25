/* eslint-disable react/no-danger */
import React from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';
import { css } from '@emotion/core';

import {
  weights,
  container,
  mediaQueries,
  contentH2,
  contentHeadings,
  dropCap,
} from '../../styles';
import SplitSection from '../SplitSection';

const TextImage = ({ data }) => {
  const renderDropCap = data.type === 'insight' && data.isFirstText;
  const sectionStyle = css`
    ${container.min}
    font-weight: ${weights.thin};
    grid-column-gap: 20px;
    padding: 0 20px;

    ${mediaQueries.phoneLarge} {
      padding: 0;
    }

    ${renderDropCap && dropCap}
    
    a {
      text-decoration: underline;
    }

    h2 {
      ${contentH2}
    }

    h3 {
      ${contentHeadings}
    }
  `;

  return data.field_reversed ? (
    <SplitSection css={sectionStyle} gridTemplateColumns='45% 49%'>
      <section>
        <Img
          fluid={data.relationships.field_image.localFile.childImageSharp.fluid}
          alt={data.field_image.alt}
          css={css`
            margin-bottom: 40px;
            padding: 0;
          `}
        />
      </section>
      <section
        dangerouslySetInnerHTML={{ __html: data.field_body.processed }}
      />
    </SplitSection>
  ) : (
    <SplitSection css={sectionStyle} gridTemplateColumns='54% 40%'>
      <section
        dangerouslySetInnerHTML={{ __html: data.field_body.processed }}
      />
      <section>
        <Img
          fluid={data.relationships.field_image.localFile.childImageSharp.fluid}
          alt={data.field_image.alt}
          css={css`
            margin-bottom: 40px;
            padding: 0;
          `}
        />
      </section>
    </SplitSection>
  );
};

TextImage.propTypes = {
  data: PropTypes.object.isRequired,
};

export default TextImage;
