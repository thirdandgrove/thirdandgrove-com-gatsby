import React from 'react';
import { navigate } from 'gatsby';
import { css } from '@emotion/react';
import loadable from '@loadable/component';

import { colors, mediaQueries } from '../../styles';

const Button = loadable(() => import('../Button'));
const TextWrapper = loadable(() => import('./TextWrapper'));

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
