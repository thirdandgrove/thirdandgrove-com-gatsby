import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/react';

import Input from '../Input';
import Button from '../Button';
import { encode } from '../../util';
import { colors } from '../../styles';

const NewsletterSimpleOverlayForm = ({
  setIsActive,
  isActive,
  buttonText,
  confirmMessage,
}) => {
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
      body: encode({ 'form-name': 'acquia-engage', email }),
    }).then(() => {
      updateEmail('');
      hasSubmitted(true);
      setTimeout(() => {
        setIsActive(!isActive);
      }, 1000);
    });
  };

  const fieldsetStyles = css`
    border: none;
    margin: 0;
    padding: 0;
  `;

  return (
    <form
      name='acquia-engage'
      data-netlify='true'
      netlify-honeypot='bot-field'
      css={css`
        display: flex;
        justify-content: center;
        flex-direction: column;
      `}
    >
      <input type='hidden' name='form-name' value='acquia-engage' />
      <fieldset css={fieldsetStyles}>
        {/* eslint-disable-next-line */}
        <label htmlFor='nws-email' />
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
      </fieldset>
      <Button
        onClick={onSubmit}
        disabled={submitted}
        css={css`
          max-width: 200px;
          width: 100%;
          margin: auto;
        `}
      >
        {submitted ? confirmMessage : buttonText}
      </Button>
    </form>
  );
};

NewsletterSimpleOverlayForm.propTypes = {
  setIsActive: PropTypes.func.isRequired,
  isActive: PropTypes.bool.isRequired,
  confirmMessage: PropTypes.string.isRequired,
  buttonText: PropTypes.string.isRequired,
};

export default NewsletterSimpleOverlayForm;
