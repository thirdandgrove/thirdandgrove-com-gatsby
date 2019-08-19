import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';

import { colors, fonts, weights } from '../../styles';

// A fake button for use within a link (a tag)

// eslint-disable-next-line import/prefer-default-export
export const FakeButton = ({ children, ...props }) => {
  const StyledButton = styled.div`
    position: relative;
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
      padding: 17px 28px;
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

FakeButton.propTypes = {
  children: PropTypes.node,
};

FakeButton.defaultProps = {
  children: null,
};
