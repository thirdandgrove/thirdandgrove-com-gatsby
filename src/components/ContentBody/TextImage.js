/* eslint-disable react/no-danger */
import React from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';
import { css } from '@emotion/core';
import { mediaQueries, container } from '../../styles';

import SplitSection from '../SplitSection';

const TextImage = ({ data }) => {
  return (
    <SplitSection css={container.max}>
      {data.field_reversed ? (
        <>
          <Img
            fluid={
              data.relationships.field_image.localFile.childImageSharp.fluid
            }
            css={css`
              ${mediaQueries.desktop} {
                margin-right: 50px;
              }
            `}
          />
          <section
            dangerouslySetInnerHTML={{ __html: data.field_body.processed }}
          />
        </>
      ) : (
        <>
          <section
            dangerouslySetInnerHTML={{ __html: data.field_body.processed }}
          />
          <Img
            fluid={
              data.relationships.field_image.localFile.childImageSharp.fluid
            }
            css={css`
              margin-bottom: 40px;

              ${mediaQueries.desktop} {
                margin-left: 50px;
              }
            `}
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
