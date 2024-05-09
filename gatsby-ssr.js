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
  var setHeadComponents = _ref.setHeadComponents;

  setHeadComponents([
    <script
      key='reb2b'
      dangerouslySetInnerHTML={{
        __html: `
        !function () {
              var reb2b = window.reb2b = window.reb2b || [];
              if (reb2b.invoked) return;
              reb2b.invoked = true;
              reb2b.methods = ["identify", "collect"];
              reb2b.factory = function (method) {
                return function () {
                  var args = Array.prototype.slice.call(arguments);
                  args.unshift(method);
                  reb2b.push(args);
                  return reb2b;
                };
              };
              for (var i = 0; i < reb2b.methods.length; i++) {
                var key = reb2b.methods[i];
                reb2b[key] = reb2b.factory(key);
              }
              reb2b.load = function (key) {
                var script = document.createElement("script");
                script.type = "text/javascript";
                script.async = true;
                script.src = "https://s3-us-west-2.amazonaws.com/b2bjsstore/b/" + key + "/reb2b.js.gz";
                var first = document.getElementsByTagName("script")[0];
                first.parentNode.insertBefore(script, first);
              };
              reb2b.SNIPPET_VERSION = "1.0.1";
              reb2b.load("X0NW1GHXD7O4");
            }();
          `,
      }}
    />,
  ]);

  setPostBodyComponents([
    _react2.default.createElement('script', {
      key: 'polyfill-io',
      src: 'https://polyfill.io/v3/polyfill.min.js?flags=gated&features=IntersectionObserver%2CMap%2CSet',
      crossOrigin: 'anonymous',
    }),
  ]);
}
