import React from 'react';
import { navigate } from 'gatsby';
import { css } from '@emotion/react';

import Button from '../Button';
import { colors, mediaQueries } from '../../styles';

import TextWrapper from './TextWrapper';

const wrapperStyles = css`
  ${mediaQueries.phoneLarge} {
    min-height: 500px;
  }
`;

const SeeInsights = () => (
  <TextWrapper backgroundColor={colors.lightblue} css={wrapperStyles}>
    <h3>Explore our Insights.</h3>
    <Button onClick={() => navigate(`/insights/`)}>Insights</Button>
  </TextWrapper>
);

export default SeeInsights;
