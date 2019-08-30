import React from 'react';
import styled from '@emotion/styled';

import { btnStyles } from '../../styles';

// A fake button for use within a link (a tag)
// eslint-disable-next-line react/prop-types
export default ({ children, ...props }) => {
  const StyledButton = styled.div`
    ${btnStyles};
  `;
  return (
    <StyledButton {...props}>
      <span>{children}</span>
    </StyledButton>
  );
};
