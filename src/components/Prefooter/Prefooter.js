import React from 'react';
import { navigate } from 'gatsby';
import styled from '@emotion/styled';

import Button from '../Button';
import Rectangle from './Rectangle';
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

const BeUs = () => (
  <Rectangle backgroundColor={colors.lightblue}>
    <h3>Be Us</h3>
    <Button onClick={() => navigate(`/careers`)}>Work at Tag</Button>
  </Rectangle>
);

const ContactUs = () => (
  <Rectangle backgroundColor={colors.yellow}>
    <h3>Get To Know</h3>
    <Button onClick={() => navigate(`/contact`)}>Contact Us</Button>
  </Rectangle>
);

export default ({ children }) => (
  <Wrapper>
    {children || (
      <>
        <ContactUs />
        <BeUs />
      </>
    )}
  </Wrapper>
);
