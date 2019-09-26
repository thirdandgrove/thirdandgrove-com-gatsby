/* eslint-disable */
Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.onRenderBody = onRenderBody;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function onRenderBody(_ref) {
  var setPostBodyComponents = _ref.setPostBodyComponents;

  setPostBodyComponents([
    _react2.default.createElement('script', {
      key: 'polyfill-io',
      src:
        'https://polyfill.io/v3/polyfill.min.js?flags=gated&features=IntersectionObserver%2CMap%2CSet',
      crossOrigin: 'anonymous',
    }),
  ]);
}
