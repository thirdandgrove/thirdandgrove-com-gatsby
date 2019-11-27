import React from 'react';
import { navigate } from 'gatsby';
import PropTypes from 'prop-types';
import { css } from '@emotion/core';

import { colors } from '../../styles';
import FullWidthSection from '../FullWidthSection';
import Button from '../Button';

const CTA = ({ backgroundColor, headline, tagline, cta, link }) => {
  return (
    <FullWidthSection
      backgroundColor={backgroundColor}
      minHeight='300px'
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
      <p
        css={css`
          color: ${colors.reallydarkgray}
          font-size: 16px;
          font-weight: 300;
          text-align: center;
        `}
      >
        {tagline}
      </p>
      <Button onClick={() => navigate(link)}>{cta}</Button>
    </FullWidthSection>
  );
};

CTA.propTypes = {
  backgroundColor: PropTypes.string,
  headline: PropTypes.string,
  tagline: PropTypes.string,
  cta: PropTypes.string,
  link: PropTypes.string,
};

CTA.defaultProps = {
  backgroundColor: colors.lightblue,
  headline: `Want to catch up over coffee?`,
  tagline: `We're located in Downtown Crossing but enjoy putting in some miles to get around the city.`,
  cta: `GET IN TOUCH`,
  link: `/contact/`,
};

export default CTA;
