import React from 'react';
import PropTypes from 'prop-types';
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

const WhatWeDo = ({ text, link, linkText }) => {
  return (
    <TextWrapper backgroundColor={colors.yellow} css={wrapperStyles}>
      <h3>{text}</h3>
      <Button onClick={() => navigate(link)}>{linkText}</Button>
    </TextWrapper>
  );
};

WhatWeDo.propTypes = {
  text: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  linkText: PropTypes.string.isRequired,
};

export default WhatWeDo;
