import React from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/core';
import { colors } from '../../styles';

export default ({ children, ...props }) => {
  const Button = styled.button`
    position: relative;
    min-width: 220px;
    padding: 12px 15px 10px;
    border: none;
    outline: none;
    font-family: 'NB International Pro';
    font-weight: 600;
    font-size: 15px;
    line-height: 1.2;
    letter-spacing: 2px;
    text-transform: uppercase;
    background: transparent;
    color: ${colors.darkgray};
    cursor: pointer;
    &::before {
      content: '';
      display: block;
      position: absolute;
      left: 0;
      bottom: 0;
      width: 100%;
      height: 1px;
      transition: 0.3s ease height;
      background: ${colors.darkgray};
    }
    &:hover,
    &:focus {
      color: ${colors.white};
      &::before {
        height: 100%;
      }
    }
  `;
  return (
    <Button {...props}>
      <span
        css={css`
          position: relative;
        `}
      >
        {children}
      </span>
    </Button>
  );
};
