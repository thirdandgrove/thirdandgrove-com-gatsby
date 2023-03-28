import React from 'react';
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3';

import { EasterEggProvider } from './src/context/EasterEggContext';

const wrapRootElement = ({ element }) => {
  return (
    <GoogleReCaptchaProvider
      reCaptchaKey='6LdPoTclAAAAAJb_x_AYAwTdnPRxdQqlz-YfM8UA'
      scriptProps={{
        async: false,
        defer: false,
        appendTo: 'head',
        nonce: undefined,
      }}
    >
      <EasterEggProvider>{element}</EasterEggProvider>
    </GoogleReCaptchaProvider>
  );
};

// eslint-disable-next-line import/prefer-default-export
export { wrapRootElement };
