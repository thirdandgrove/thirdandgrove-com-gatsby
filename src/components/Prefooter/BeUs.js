import React from 'react';
import { navigate } from 'gatsby';
import { css } from '@emotion/core';

import Button from '../Button';
import { colors, mediaQueries } from '../../styles';

import TextWrapper from './TextWrapper';

const wrapperStyles = css`
  ${mediaQueries.phoneLarge} {
    min-height: 500px;
  }
`;

const BeUs = () => (
  <TextWrapper backgroundColor={colors.lightblue} css={wrapperStyles}>
    <h3>Get to be us.</h3>
    <Button onClick={() => navigate(`/careers/`)}>Work at TAG</Button>
  </TextWrapper>
);

export default BeUs;
