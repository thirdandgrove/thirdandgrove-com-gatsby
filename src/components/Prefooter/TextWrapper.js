import React from 'react';
import styled from '@emotion/styled';

const TextWrapper = styled.span`
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  height: 500px;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
  flex-shrink: 0;
  background-color: ${props => props.backgroundColor};
  h3 {
    font-family: Canela;
    font-size: 72px;
    font-weight: 500;
    letter-spacing: -1px;
    line-height: 84px;
  }
`;

export default TextWrapper;
