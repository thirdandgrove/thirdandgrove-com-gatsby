import React from 'react';
import { navigate } from 'gatsby';

import TextWrapper from './TextWrapper';
import Button from '../Button';
import { colors } from '../../styles';

const ContactUs = () => (
  <TextWrapper backgroundColor={colors.yellow}>
    <h3>Get To Know</h3>
    <Button onClick={() => navigate(`/contact`)}>Contact Us</Button>
  </TextWrapper>
);

export default ContactUs;
