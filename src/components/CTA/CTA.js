import React from 'react';
import { navigate } from 'gatsby';
import PropTypes from 'prop-types';
import { css } from '@emotion/core';

import { colors } from '../../styles';
import FullWidthSection from '../FullWidthSection';
import Button from '../Button';

const CTA = ({ backgroundColor, headline, cta, link }) => {
  return (
    <FullWidthSection
      backgroundColor={backgroundColor}
      minHeight='300px'
      height='300px'
      align-items='center'
      css={css`
        padding-top: 40px;
        padding-bottom: 40px;
      `}
    >
      <h1
        css={css`
          color: ${colors.reallydarkgray};
          font-weight: 600;
          text-align: center;
        `}
      >
        {headline}
      </h1>
      <Button onClick={() => navigate(link)}>{cta}</Button>
    </FullWidthSection>
  );
};

CTA.propTypes = {
  backgroundColor: PropTypes.string,
  headline: PropTypes.string,
  cta: PropTypes.string,
  link: PropTypes.string,
};

CTA.defaultProps = {
  backgroundColor: colors.lightblue,
  headline: `Want to catch up over coffee?`,
  cta: `GET IN TOUCH`,
  link: `/contact/`,
};

export default CTA;
