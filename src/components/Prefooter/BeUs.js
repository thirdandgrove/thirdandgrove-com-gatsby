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

const BeUs = () => (
  <TextWrapper backgroundColor={colors.lightblue} css={wrapperStyles}>
    <h3>Get to be us.</h3>
    <Button>
      <a
        href='https://thirdandgrove.breezy.hr/'
        target='_blank'
        rel='noreferrer'
      >
        Work at TAG
      </a>
    </Button>
  </TextWrapper>
);

export default BeUs;
