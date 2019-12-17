import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/core';
import { Link } from 'gatsby';

import { colors } from '../../styles';
import FullWidthSection from '../FullWidthSection';
import { FakeButton } from '../Button';

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
      <Link to={link}>
        <FakeButton>{cta}</FakeButton>
      </Link>
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
  headline: `Want to chat more?`,
  cta: `GET IN TOUCH`,
  link: `/contact/`,
};

export default CTA;
