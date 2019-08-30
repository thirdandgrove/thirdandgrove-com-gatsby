import React from 'react';
import styled from '@emotion/styled';

import { btnStyles } from '../../styles';

// A fake button for use within a link (a tag)
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
