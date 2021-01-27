import React from 'react';
import { navigate } from 'gatsby';
import { css } from '@emotion/react';

import { colors, mediaQueries } from '../../styles';
import Button from '../Button';

import TextWrapper from './TextWrapper';

const wrapperStyles = css`
  ${mediaQueries.phoneLarge} {
    min-height: 500px;
  }
`;

const GetInTouch = () => (
  <TextWrapper backgroundColor={colors.yellow} css={wrapperStyles}>
    <h3>Get in touch today.</h3>
    <Button onClick={() => navigate(`/contact/`)}>Contact Us</Button>
  </TextWrapper>
);

export default GetInTouch;
