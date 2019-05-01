import React from 'react';
import styled from '@emotion/styled';

import Button from '../Button';
import { colors } from '../../styles';

const WhatWeDo = () => {
  const Container = styled.section`
    width: 100%;
    height: 850px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-color: ${colors.lightblue};
    h3 {
      height: 50px;
      color: ${colors.darkgray};
      font-family: Canela-Thin;
      font-size: 36px;
      font-weight: 100;
      letter-spacing: 0.4px;
      line-height: 76px;
    }
    h1 {
      height: 150px;
      color: ${colors.darkgray};
      font-family: Canela;
      font-size: 120px;
      font-weight: 500;
      letter-spacing: -1.5px;
      line-height: 150px;
    }
    .faded {
      opacity: 0.5;
    }
  `;
  return (
    <Container>
      <h3>What We Do</h3>
      <h1>Technology</h1>
      <h1 className='faded'>Strategy</h1>
      <h1 className='faded'>Creative</h1>
      <Button>Our Capabilities</Button>
    </Container>
  );
};

export default WhatWeDo;
