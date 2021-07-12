/* eslint-disable func-names */
/* eslint-disable no-use-before-define */
/* eslint-disable consistent-return */
/* eslint-disable vars-on-top */
/* eslint-disable no-undef */
/* eslint-disable no-var */

function initGTM() {
  if (window.gtmDidInit) {
    return false;
  }

  window.gtmDidInit = true;

  var script = document.createElement('script');

  script.type = 'text/javascript';
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtm.js?id=GTM-MKBKRBC`;

  script.onload = function () {
    dataLayer.push({
      event: 'gtm.js',
      'gtm.start': new Date().getTime(),
      'gtm.uniqueEventId': 0,
    });
  };

  document.head.appendChild(script);
}

function initGTMOnEvent(event) {
  initGTM();
  event.currentTarget.removeEventListener(event.type, initGTMOnEvent);
}

exports.onClientEntry = function () {
  document.onreadystatechange = function () {
    if (document.readyState !== 'loading') setTimeout(initGTM, 1000);
  };

  document.addEventListener('scroll', initGTMOnEvent);
  document.addEventListener('mousemove', initGTMOnEvent);
  document.addEventListener('touchstart', initGTMOnEvent);
};
