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
  const Card = styled.div`
    opacity: 1 !important;

    h3 {
      margin: 15px 20px 20px;
      font-weight: ${weights.bold};
      font-size: 21px;
      line-height: 1.57;

      ${mediaQueries.phoneLarge} {
        margin: 0 0 30px;
        font-size: 48px;
        line-height: 1.375;
        letter-spacing: -0.2px;
      }
    }
    footer {
      margin: 0 20px;
      font-family: ${fonts.sans};
      font-weight: ${weights.light};
      font-size: 15px;
      line-height: 1.7;

      ${mediaQueries.phoneLarge} {
        margin: 0;
        letter-spacing: 0.2px;
      }
    }
  `;

  const P = styled.p`
    color: #282829;
    font-family: 'NB International Pro';
    font-size: 16px;
    font-weight: 300;
    letter-spacing: 0.2px;
    line-height: 27px;
    text-align: center;
    width: 50%;
    opacity: 0;
    transition: opacity 1s ease;
  `;

  const H3 = styled.h3`
    color: #282829;
    font-family: Canela;
    font-size: 115px !important;
    font-weight: 500;
    letter-spacing: 1.53px;
    line-height: 76px;
    text-align: center;
    color: ${colors.lightblue};
    transition: color 1s ease;
    text-shadow: -1.25px -1.25px 0 #000, 1.25px -1.25px 0 #000,
      -1.25px 1.25px 0 #000, 1.25px 1.25px 0 #000;
  `;

  return (
    <Card ref={ref}>
      <span
        css={[
          container.max,
          css`
            display: block;

            ${mediaQueries.phoneLarge} {
              display: flex;
              flex-direction: column;
              align-items: center;
              justify-content: center;
            }

            .slider-button {
              opacity: 0;
              transition: opacity 1s ease;
            }
          `,
        ]}
      >
        <H3>{title}</H3>
        <P>{description}</P>
        <Button className='slider-button' onClick={() => navigate(`${link}`)}>
          Learn More
        </Button>
      </span>
    </Card>
  );
}

export default CapabilitiesSlide;
