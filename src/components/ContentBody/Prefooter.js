import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/core';
import Img from 'gatsby-image';

import { TextWrapper } from '../Prefooter';
import SplitSection from '../SplitSection';
import { colors, fonts, weights } from '../../styles';

const Prefooter = ({ data }) => (
  <SplitSection>
    {/* TODO: change data model to provide a color */}
    <TextWrapper backgroundColor={colors.yellow}>
      {/* TODO: change data model to reference another article? */}
      <span
        css={css`
          a {
            background-color: transparent;
            outline: none;
            border: none;
            border-bottom: 1px solid ${colors.darkgray};
            width: 220px;
            height: 18px;
            color: ${colors.darkgray};
            font-family: ${fonts.sans};
            font-weight: ${weights.bold};
            font-size: 15px;
            letter-spacing: 2px;
            line-height: 36px;
            padding-bottom: 14px;
            text-transform: uppercase;
            text-decoration: none;
            cursor: pointer;
          }
        `}
        dangerouslySetInnerHTML={{
          __html: data.field_secondary_body.processed,
        }}
      />
    </TextWrapper>
    <Img
      fluid={data.relationships.field_image.localFile.childImageSharp.fluid}
    />
  </SplitSection>
);

Prefooter.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Prefooter;
