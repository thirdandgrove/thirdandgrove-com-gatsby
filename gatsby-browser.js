/* eslint-disable global-require */
// Check if production branch
// We don't need to add these to production bundle
const branchENV =
  process.env.BRANCH !== undefined
    ? process.env.BRANCH !== 'master'
      ? 'development'
      : 'production'
    : 'development';

// Set polyfills for ie11 development
if (branchENV === 'development') {
  // Sets babel-polyfill for ie11
  require('babel-polyfill');

  // Sets shadow dom polyfill for ie11
  require('@webcomponents/shadydom');

  // Sets EventSource polyfill for ie11
  const {
    NativeEventSource,
    EventSourcePolyfill,
  } = require('event-source-polyfill');
  global.EventSource = NativeEventSource || EventSourcePolyfill;
}

exports.onClientEntry = () => {
  // Don't need to do anything here, but if you don't
  // export something, the import won't work.
};
/* eslint-disable global-require */
