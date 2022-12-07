import React from 'react';

import { EasterEggProvider } from './src/context/EasterEggContext';

const wrapRootElement = ({ element }) => {
  return <EasterEggProvider>{element}</EasterEggProvider>;
};

// eslint-disable-next-line import/prefer-default-export
export { wrapRootElement };
