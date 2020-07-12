import React from 'react';
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

export default function CapabilitiesSlideNav({ title }) {
  const NavItem = styled.p`
    color: ${colors.tagGray};
    font-family: 'NB International Pro';
    font-size: 15px;
    font-weight: bold;
    letter-spacing: 2px;
    line-height: 36px;
    text-align: center;
    text-transform: uppercase;
    padding-bottom: 10px;

    span {
      display: none;
      ${mediaQueries.phoneLarge} {
        display: flex;
      }
    }
  `;

  return (
    <NavItem className='slider-nav'>
      <span>{title}</span>
    </NavItem>
  );
}
