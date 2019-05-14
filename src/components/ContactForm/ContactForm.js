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
        <Input type='text' placeholder='name' name='name' />
        <Input type='email' placeholder='email' name='email' />
        <Input type='url' placeholder='website' name='website' />
        <Input type='tel' placeholder='phone' name='phone' />
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
        <TextArea name='comments' placeholder='Leave a message' />
      </span>
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
