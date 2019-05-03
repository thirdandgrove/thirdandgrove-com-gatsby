import React from 'react';
import { css } from '@emotion/core';

import Input from '../Input';
import Button from '../Button';
import TextArea from '../TextArea';
import { mediaQueries } from '../../styles';

const ContactFrom = () => {
  return (
    <main
      css={css`
        margin: 0 auto;
        margin-top: 4rem;
        width: 980px;
        ${mediaQueries.phoneLarge} {
          width: 100%;
        }
      `}
    >
      <span
        css={css`
          display: grid;
          grid-template-columns: 480px 480px;
          grid-column-gap: 1rem;
          ${mediaQueries.phoneLarge} {
            display: flex;
            flex-direction: column;
            align-items: center;
            width: 80%;
          }
        `}
      >
        <Input type='text' placeholder='name' name='name' />
        <Input type='email' placeholder='email' name='email' />
        <Input type='url' placeholder='website' name='website' />
        <Input type='tel' placeholder='phone' name='phone' />
      </span>
      <TextArea name='comments' placeholder='Leave a message' />
      <span
        css={css`
          display: flex;
          justify-content: center;
          margin-top: 4rem;
        `}
      >
        <Button>send</Button>
      </span>
    </main>
  );
};

export default ContactFrom;
