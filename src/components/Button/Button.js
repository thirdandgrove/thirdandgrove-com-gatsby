import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { colors, fonts, weights } from '../../styles';

const Button = ({ children, ...props }) => {
  const StyledButton = styled.button`
    position: relative;
    min-width: 220px;
    padding: 0;
    border: none;
    outline: none;
    font-family: ${fonts.sans};
    font-weight: ${weights.bold};
    font-size: 15px;
    line-height: 1.2;
    letter-spacing: 2px;
    text-transform: uppercase;
    background: transparent;
    color: ${colors.darkgray};
    cursor: pointer;

    span {
      display: block;
      position: relative;
      padding: 12px 15px 10px;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-image: linear-gradient(
        to bottom,
        ${colors.darkgray},
        ${colors.darkgray} 50%,
        ${colors.white} 50%
      );
      background-size: 100% 200%;
      background-position: top;
      transition: all 0.3s ease;
    }
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
      transition: all 0.3s ease;

      span {
        background-position: bottom;
      }

      &::before {
        height: 100%;
      }
    }
  `;
  return (
    <StyledButton {...props}>
      <span>{children}</span>
    </StyledButton>
  );
};

Button.propTypes = {
  children: PropTypes.node,
};

Button.defaultProps = {
  children: null,
};

export default Button;
