import React, { useState } from 'react';
import { css } from '@emotion/react';

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

  const fieldsetStyles = css`
    border: none;
    margin: 0;
    padding: 0;
  `;

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
      <fieldset css={fieldsetStyles}>
        <legend
          css={css`
            display: none;
          `}
        >
          Newsletter Form
        </legend>
        {/* eslint-disable-next-line */}
        <label
          htmlFor='nws-email'
          css={css`
            display: none;
          `}
        >
          Email Address
        </label>
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
      </fieldset>
      <Button onClick={onSubmit} disabled={submitted}>
        {submitted ? 'Thank You' : 'Sign Me Up'}
      </Button>
    </form>
  );
};
