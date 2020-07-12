/* eslint-disable import/no-dynamic-require */
/* eslint-disable global-require */
import React, { useRef } from 'react';
import { navigate } from 'gatsby';
import PropTypes from 'prop-types';
import { css } from '@emotion/core';
import styled from '@emotion/styled';

import Button from '../Button';
import {
  colors,
  mediaQueries,
  smSectionHead,
  fonts,
  weights,
  container,
} from '../../styles';

function CapabilitiesSlide({ title, key, description, icon, link }) {
  const ref = useRef('');

  const imageSrc = require(`${icon}`);
  const Card = styled.div`
    opacity: 1 !important;

    .animate-opacity {
      opacity: 0;
      transition: opacity 1s ease;
    }

    h3 {
      margin: 15px 20px 20px;
      line-height: 1.57;

      ${mediaQueries.desktop} {
        margin: 0;
        line-height: 1.375;
      }
    }
  `;

  const P = styled.p`
    color: ${colors.tagGray};
    font-family: 'NB International Pro';
    font-size: 16px;
    font-weight: 300;
    letter-spacing: 0.2px;
    line-height: 27px;
    text-align: center;
    max-width: 420px;
    width: calc(100% - 24px);

    ${mediaQueries.phoneLarge} {
      margin-top: 24px;
      margin-bottom: 84px;
    }
  `;

  const H3 = styled.h3`
    color: ${colors.tagGray};
    font-size: 60px !important;
    font-weight: 500;
    letter-spacing: -0.7px;
    line-height: 90px;
    text-align: center;
    color: ${colors.lightblue};
    transition: color 1s ease;
    text-shadow: 1px 1px 0 ${colors.tagGray}, -1px 1px 0 ${colors.tagGray},
      1px -1px 0 ${colors.tagGray}, -1px -1px 0 ${colors.tagGray},
      1px 0 0 ${colors.tagGray}, 0 1px 0 ${colors.tagGray},
      -1px 0 0 ${colors.tagGray}, -1px 0 0 ${colors.tagGray};

    ${mediaQueries.desktop} {
      color: ${colors.tagGray};
      font-family: Canela;
      font-size: 115px !important;
      font-weight: 500;
      letter-spacing: 1.53px;
      line-height: 76px;
      text-align: center;
      color: ${colors.lightblue};
      transition: color 1s ease;
      text-shadow: 1px 1px 0 ${colors.tagGray}, -1px 1px 0 ${colors.tagGray},
        1px -1px 0 ${colors.tagGray}, -1px -1px 0 ${colors.tagGray},
        1px 0 0 ${colors.tagGray}, 0 1px 0 ${colors.tagGray},
        -1px 0 0 ${colors.tagGray}, -1px 0 0 ${colors.tagGray};
    }
  `;

  return (
    <Card ref={ref}>
      <span
        css={[
          container.max,
          css`
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;

            img {
              width: 50px;
              height: 50px;
            }

            .slider-button {
              opacity: 0;
              transition: opacity 1s ease;
              margin-bottom: 48px;

              ${mediaQueries.phoneLarge} {
                margin-bottom: 0;
              }
            }
          `,
        ]}
      >
        <img className='animate-opacity' src={imageSrc} alt={title} />
        <H3>{title}</H3>
        <P className='animate-opacity'>{description}</P>
        <Button
          className='slider-button animate-opacity'
          onClick={() => navigate(`${link}`)}
        >
          Learn More
        </Button>
      </span>
    </Card>
  );
}

export default CapabilitiesSlide;
