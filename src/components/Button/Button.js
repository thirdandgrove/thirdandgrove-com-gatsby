import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';

import { btnStyles, btnLightStyles } from '../../styles';

const Button = ({ children, fontColor, ...props }) => {
  const StyledButton =
    fontColor === 'light'
      ? styled.button`
          ${btnLightStyles};
        `
      : styled.button`
          ${btnStyles};
        `;
  return (
    <StyledButton {...props}>
      <span role='img' aria-label='Button Gradient Color'>
        {children}
      </span>
    </StyledButton>
  );
};

Button.propTypes = {
  children: PropTypes.node,
  fontColor: PropTypes.string,
};

Button.defaultProps = {
  children: null,
  fontColor: null,
};

export default Button;
