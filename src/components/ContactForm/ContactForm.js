import React from 'react';
import { css } from '@emotion/core';

import { colors } from '../../styles';
import Input from '../Input';
import Button from '../Button';

const ContactFrom = () => {
  return (
    <span>
      <Input type='text' placeholder='name' name='name' />
      <Input type='text' placeholder='email' name='email' />
      <Input type='text' placeholder='website' name='website' />
      <Input type='text' placeholder='phone' name='phone' />
      <textarea
        css={css`
          background: transparent;
          outline: 1px solid ${colors.darkgray};
          border: none;
          width: 100%;
          color: ${colors.darkgray};
          font-family: 'NB International Pro';
          font-weight: 600;
          font-size: 15px;
          letter-spacing: 2px;
          line-height: 36px;
          text-transform: uppercase;
          padding: 20px;
          &:placeholder {
            font-family: 'NB International Pro';
            font-weight: 600;
            color: ${colors.darkgray};
            text-transform: uppercase;
          }
        `}
        name='comments'
        placeholder='Leave a message'
      />
      <Button>send</Button>
    </span>
  );
};

export default ContactFrom;
