import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';

import { btnStyles } from '../../styles';

// A fake button for use within a link (a tag)

// eslint-disable-next-line import/prefer-default-export
export const FakeButton = ({ children, ...props }) => {
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
