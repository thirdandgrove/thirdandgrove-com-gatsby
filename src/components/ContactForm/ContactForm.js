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
  const submitContact = () => {
    const { name, email, comments, phone, website } = formState;
    // validate inpute
    if ((!name, !email)) {
      // notify user of required fields
    }
  };
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
        <Button onClick={submitContact}>send</Button>
      </span>
    </main>
  );
};

export default ContactFrom;
