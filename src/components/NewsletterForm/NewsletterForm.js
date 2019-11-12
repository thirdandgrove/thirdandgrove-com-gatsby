import React, { useState } from 'react';
import { css } from '@emotion/core';

import Input from '../Input';
import Button from '../Button';

export default () => {
  const [email, updateEmail] = useState('');
  const onSubmit = () => {
    console.log('sumbit newsletter form');
    // submit email to endpoint
    // clear state with message
  };
  return (
    <>
      <Input
        type='text'
        placeholder='Email'
        value={email}
        onChange={evt => updateEmail(evt.target.value)}
      />
      <Button onClick={onSubmit}>Sign Me Up</Button>
    </>
  );
};
