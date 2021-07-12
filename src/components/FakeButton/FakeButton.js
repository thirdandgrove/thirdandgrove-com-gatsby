import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';

import { btnStyles } from '../../styles';

// A fake button for use within a link (a tag)
const FakeButton = ({ children, ...props }) => {
  const StyledButton = styled.div`
    ${btnStyles};
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

export default FakeButton;
