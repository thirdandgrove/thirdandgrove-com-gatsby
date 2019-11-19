/* eslint-disable jsx-a11y/label-has-for */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import { css } from '@emotion/core';

import Input from '../Input';
import Button from '../Button';
import { encode } from '../../util';

export default () => {
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
            type='email'
            name='email'
            id='nws-email'
            placeholder='Email'
            value={email}
            onChange={evt => updateEmail(evt.target.value)}
          />
        )}
      </label>
      <Button onClick={onSubmit} disabled={submitted}>
        {submitted ? 'Thank You' : 'Sign Me Up'}
      </Button>
    </form>
  );
};
