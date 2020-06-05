/* eslint-disable jsx-a11y/label-has-for */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/core';

import Input from '../Input';
import Button from '../Button';
import { encode } from '../../util';
import { colors } from '../../styles';

const NewsletterOverlayForm = ({ setIsActive, isActive }) => {
  const [email, updateEmail] = useState('');
  const [submitted, hasSubmitted] = useState(false);

  const onSubmit = evt => {
    evt.preventDefault();
    if (!email) {
      return;
    }
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({ 'form-name': 'newsletter', email }),
    }).then(() => {
      updateEmail('');
      hasSubmitted(true);
      setTimeout(() => {
        setIsActive(!isActive);
      }, 1000);
    });
  };
  return (
    <form
      name='newsletter'
      data-netlify='true'
      netlify-honeypot='bot-field'
      css={css`
        display: flex;
        justify-content: center;
        flex-direction: column;
      `}
    >
      <label htmlFor='nws-email'>
        {!submitted && (
          <Input
            css={css`
              background-color: ${colors.white};
              letter-spacing: 0;
            `}
            type='email'
            name='email'
            id='nws-email'
            placeholder='Email'
            value={email}
            onChange={evt => updateEmail(evt.target.value)}
          />
        )}
      </label>
      <Button
        onClick={onSubmit}
        disabled={submitted}
        css={css`
          max-width: 200px;
          width: 100%;
          margin: auto;
        `}
      >
        {submitted ? 'Thank You' : 'Sign Me Up'}
      </Button>
    </form>
  );
};

NewsletterOverlayForm.propTypes = {
  setIsActive: PropTypes.func.isRequired,
  isActive: PropTypes.bool.isRequired,
};

export default NewsletterOverlayForm;
