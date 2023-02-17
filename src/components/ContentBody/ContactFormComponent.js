import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/react';

import ContactForm from '../ContactForm';
import FullWidthSection from '../FullWidthSection';
import { colors, fonts, mediaQueries, weights } from '../../styles';

const ContactFormComponent = ({ data }) => {
  const { field_header_text: header } = data;
  const { field_subhead_text: subtitle } = data;

  const headerTitle = css`
    @keyframes headerSlide {
      0% {
        transform: translateY(50%);
      }
      100% {
        transform: translateY(0);
      }
    }

    @keyframes afterReveal {
      0% {
        height: 100%;
      }
      100% {
        height: 0;
      }
    }

    position: relative;
    padding: 0 20px;
    line-height: 1.23;
    font-size: 39px;
    font-weight: ${weights.medium};
    letter-spacing: -0.45px;
    text-align: center;
    color: ${colors.darkgray};
    transform: translateY(50%);
    animation-name: headerSlide;
    animation-duration: 0.7s;
    animation-timing-function: ease-out;
    animation-iteration-count: 1;
    animation-fill-mode: forwards;

    &::after {
      content: '';
      display: block;
      position: absolute;
      bottom: 0;
      left: 0;
      height: 100%;
      width: 100%;
      animation-name: afterReveal;
      animation-duration: inherit;
      animation-timing-function: inherit;
      animation-iteration-count: inherit;
      animation-fill-mode: inherit;
    }

    ${mediaQueries.phoneLarge} {
      font-size: 72px;
      line-height: 1.17;
      letter-spacing: -1px;
    }
  `;
  const headerSubTitle = css`
    margin-top: 32px;
    font-family: ${fonts.sans};
    font-size: 15px;
    line-height: 2.4;
    text-transform: inherit;
    color: ${colors.darkgray};
    text-align: center;
    padding-left: 20px;
    padding-right: 20px;
    max-width: 600px;
    width: 100%;
    transform: translateY(50%);
    animation-name: headerSlide;
    animation-duration: 0.7s;
    animation-timing-function: ease-out;
    animation-iteration-count: 1;
    animation-fill-mode: forwards;

    ${mediaQueries.desktop} {
      margin-bottom: 42px;
    }
  `;
  return (
    <FullWidthSection height='0' minHeight='0'>
      {header && (
        <h1 data-cy='titleText' className='balance-text' css={headerTitle}>
          {header}
        </h1>
      )}
      {subtitle && (
        <span data-cy='labelText' css={headerSubTitle}>
          {subtitle}
        </span>
      )}
      <ContactForm />
    </FullWidthSection>
  );
};

ContactForm.propTypes = {
  data: PropTypes.object.isRequired,
};

export default ContactFormComponent;
