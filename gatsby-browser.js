import React from 'react';
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3';
import { Helmet } from 'react-helmet';

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
      <Helmet>
        <script>
          {`
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
          `}
        </script>
      </Helmet>
      <EasterEggProvider>{element}</EasterEggProvider>
    </GoogleReCaptchaProvider>
  );
};

// eslint-disable-next-line import/prefer-default-export
export { wrapRootElement };
