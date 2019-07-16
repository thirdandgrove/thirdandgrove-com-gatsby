/* eslint-disable jsx-a11y/label-has-for */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import { css } from '@emotion/core';

import Input from '../Input';
import Button from '../Button';
import TextArea from '../TextArea';
import { mediaQueries, colors } from '../../styles';

const ContactFrom = () => {
  const [formState, updateForm] = useState({
    comments: '',
    email: '',
    name: '',
    phone: '',
    website: '',
  });
  const [sending, updateSending] = useState(false);
  const [errors, updateErrors] = useState(null);

  const updateInput = event => {
    updateForm({ ...formState, [event.target.name]: event.target.value });
  };

  const encode = data => {
    return Object.keys(data)
      .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
      .join('&');
  };

  const submitContact = event => {
    event.preventDefault();
    updateSending(true);
    const { name, email } = formState;
    // validate inputs
    if (!name || !email) {
      // notify user of required fields
      updateSending(false);
      updateErrors({ name, email });
      return;
    }
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({ 'form-name': 'contact', ...formState }),
    }).then(() => {
      updateForm({
        comments: 'Thank you for your inquiry.',
        email: '',
        name: '',
        phone: '',
        website: '',
      });
      updateSending(false);
    });
  };

  const ErrorToaster = ({ errs }) => {
    const hasErrors = errs && Object.keys(errs).filter(key => !errs[key]);
    return errs ? (
      <span
        css={css`
          align-self: center;
          p {
            display: inline;
            color: ${colors.red};
          }
        `}
      >
        {hasErrors &&
          hasErrors.map((key, i) => (
            <p>
              {key} is required{' '}
              {i !== hasErrors.length - 1 && <span>&nbsp;&amp;&nbsp;</span>}
            </p>
          ))}
      </span>
    ) : null;
  };

  return (
    <main
      css={css`
        margin: 0 auto;
        margin-top: 2rem;
        width: 100vw;
        display: flex;
        flex-direction: column;
        ${mediaQueries.phoneLarge} {
          width: 980px;
        }
      `}
    >
      <form
        name='contact'
        method='POST'
        data-netlify='true'
        data-cy='contactForm'
        netlify-honeypot='bot-field'
        onSubmit={submitContact}
      >
        <input type='hidden' name='contact' value='contact' />
        <span
          css={css`
            display: flex;
            flex-direction: column;
            align-items: center;
            margin: 0 3rem;

            ${mediaQueries.phoneLarge} {
              display: grid;
              grid-template-columns: repeat(2, 480px);
              grid-column-gap: 1rem;
              margin: 0;
              align-items: stretch;
            }
          `}
        >
          <Input
            value={formState.name}
            onChange={updateInput}
            type='text'
            placeholder='name'
            name='name'
          />
          <Input
            value={formState.email}
            onChange={updateInput}
            type='email'
            placeholder='email'
            name='email'
          />
          <Input
            value={formState.website}
            onChange={updateInput}
            placeholder='website [optional]'
            name='website'
          />
          <Input
            value={formState.phone}
            onChange={updateInput}
            type='tel'
            placeholder='phone [optional]'
            name='phone'
          />
        </span>
        <span
          css={css`
            display: flex;
            flex-direction: column;
            align-items: center;
            margin: 0 3rem;
            ${mediaQueries.phoneLarge} {
              display: inline;
              margin: 0;
            }
          `}
        >
          <TextArea
            value={formState.comments}
            onChange={updateInput}
            data-cy='messageField'
            name='comments'
            placeholder='Leave a message'
          />
        </span>
        <span
          css={css`
            display: flex;
            justify-content: center;
            margin-top: 4rem;
            flex-direction: column;
          `}
        >
          <Button data-cy='contactSubmit' disabled={sending} type='submit'>
            send
          </Button>
          <ErrorToaster errs={errors} />
        </span>
      </form>
    </main>
  );
};

export default ContactFrom;
