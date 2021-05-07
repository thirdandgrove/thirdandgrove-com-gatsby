import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';

import { btnStyles } from '../../styles';

const Button = ({ children, ...props }) => {
  const StyledButton = styled.button`
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
};

Button.defaultProps = {
  children: null,
};

export default Button;
