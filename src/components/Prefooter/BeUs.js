import React from 'react';
import { navigate } from 'gatsby';

import Button from '../Button';
import { colors } from '../../styles';

import TextWrapper from './TextWrapper';

const BeUs = () => (
  <TextWrapper backgroundColor={colors.lightblue}>
    <h3>Be Us</h3>
    <Button onClick={() => navigate(`/careers`)}>Work at Tag</Button>
  </TextWrapper>
);

export default BeUs;
