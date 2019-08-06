import React from 'react';
import { navigate } from 'gatsby';
import { css } from '@emotion/core';

import { colors, mediaQueries } from '../../styles';
import Button from '../Button';

import TextWrapper from './TextWrapper';

const wrapperStyles = css`
  ${mediaQueries.phoneLarge} {
    min-height: 500px;
  }
`;

const ContactUs = () => (
  <TextWrapper backgroundColor={colors.yellow} css={wrapperStyles}>
    <h3>Get to know us.</h3>
    <Button onClick={() => navigate(`/contact/`)}>Contact Us</Button>
  </TextWrapper>
);

export default ContactUs;
