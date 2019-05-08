import React from 'react';
import styled from '@emotion/styled';

import { mediaQueries } from '../../styles';

const Wrapper = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: 1fr 1fr;
  margin: ${props => props.margin || 0};
  padding: ${props => props.padding || 0};
  ${mediaQueries.phoneLarge} {
    display: flex;
    flex-direction: column;
  }
`;

export default ({ children, ...props }) => (
  <Wrapper {...props}>{children}</Wrapper>
);
