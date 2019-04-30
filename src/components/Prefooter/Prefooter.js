import React from 'react';
import styled from '@emotion/styled';

import Button from '../Button';
import { colors, mediaQueries } from '../../styles';

const Wrapper = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: 1fr 1fr;
  margin: 0;
  padding: 0;
  ${mediaQueries.phoneLarge} {
    display: flex;
    flex-direction: column;
  }
`;

const Rectangle = styled.span`
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

const BeUs = () => (
  <Rectangle backgroundColor={colors.lightblue}>
    <h3>Be Us</h3>
    <Button>Work at Tag</Button>
  </Rectangle>
);

const ContactUs = () => (
  <Rectangle backgroundColor={colors.yellow}>
    <h3>Get To Know</h3>
    <Button>Contact Us</Button>
  </Rectangle>
);

export default () => (
  <Wrapper>
    <ContactUs />
    <BeUs />
  </Wrapper>
);
