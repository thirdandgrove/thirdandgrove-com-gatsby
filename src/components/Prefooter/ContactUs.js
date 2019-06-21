import React from 'react';
import { navigate } from 'gatsby';

import { colors } from '../../styles';
import Button from '../Button';

import TextWrapper from './TextWrapper';

const ContactUs = () => (
  <TextWrapper backgroundColor={colors.yellow}>
    <h3>Get To Know</h3>
    <Button onClick={() => navigate(`/contact`)}>Contact Us</Button>
  </TextWrapper>
);

export default ContactUs;
