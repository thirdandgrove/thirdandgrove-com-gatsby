import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/core';

import { TextWrapper } from '../Prefooter';
import SplitSection from '../SplitSection';
import Button from '../Button';
import { colors } from '../../styles';

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
            font-family: 'NB International Pro';
            font-weight: 600;
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
    <img
      css={css`
        height: 100%;
        width: 100%;
        object-fit: cover;
      `}
      src={data.relationships.field_image.localFile.publicURL}
      alt='prefooter'
    />
  </SplitSection>
);

Prefooter.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Prefooter;
