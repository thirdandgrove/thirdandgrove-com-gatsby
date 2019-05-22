/* eslint-disable jsx-a11y/label-has-for */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import { css } from '@emotion/core';

import Input from '../Input';
import Button from '../Button';
import TextArea from '../TextArea';
import { mediaQueries } from '../../styles';

const ContactFrom = () => {
  const [formState, updateForm] = useState({
    comments: '',
    email: '',
    name: '',
    phone: '',
    website: '',
  });
  const updateInput = event => {
    updateForm({ ...formState, [event.target.name]: event.target.value });
  };
  // const submitContact = () => {
  //   const { name, email } = formState;
  //   // validate inputs
  //   if (!name || !email) {
  //     // notify user of required fields
  //     console.error('missing required fields');
  //   }
  //   fetch(`http://localhost:8080/pipedrive`, {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify(formState),
  //   }).then(() => console.log('success'));
  // };
  return (
    <main
      css={css`
        margin: 0 auto;
        margin-top: 2rem;
        width: 980px;
        display: flex;
        flex-direction: column;
        ${mediaQueries.phoneLarge} {
          width: 100vw;
        }
      `}
    >
      <form
        css={css`
          display: none;
        `}
        netlify-honeypot='bot-field'
      >
        <p>
          <label>
            Don’t fill this out if you are human: <input name='bot-field' />
          </label>
        </p>
        <p>
          <label>
            Email: <input type='text' name='email' />
          </label>
        </p>
        <p>
          <label>
            Message: <textarea name='message' />
          </label>
        </p>
        <p>
          <button type='submit'>Send</button>
        </p>
      </form>
      <form name='contact-us' method='post' data-netlify='true'>
        <span
          css={css`
            display: grid;
            grid-template-columns: repeat(2, 480px);
            grid-column-gap: 1rem;
            ${mediaQueries.phoneLarge} {
              display: flex;
              flex-direction: column;
              align-items: center;
              margin: 0 3rem;
            }
          `}
        >
          <Input
            required
            value={formState.name}
            onChange={updateInput}
            type='text'
            placeholder='name'
            name='name'
          />
          <Input
            required
            value={formState.email}
            onChange={updateInput}
            type='email'
            placeholder='email'
            name='email'
          />
          <Input
            value={formState.website}
            onChange={updateInput}
            type='url'
            placeholder='website'
            name='website'
          />
          <Input
            value={formState.phone}
            onChange={updateInput}
            type='tel'
            placeholder='phone'
            name='phone'
          />
        </span>
        <span
          css={css`
            ${mediaQueries.phoneLarge} {
              display: flex;
              flex-direction: column;
              align-items: center;
              margin: 0 3rem;
            }
          `}
        >
          <TextArea
            value={formState.comments}
            onChange={updateInput}
            name='comments'
            placeholder='Leave a message'
          />
        </span>
        <span
          css={css`
            display: flex;
            justify-content: center;
            margin-top: 4rem;
          `}
        >
          <Button type='submit'>send</Button>
        </span>
      </form>
    </main>
  );
};

export default ContactFrom;
