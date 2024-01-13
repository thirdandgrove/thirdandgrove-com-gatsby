module.exports = {
  emailDomains: [
    'gmail',
    'hotmail',
    'aol',
    'msn',
    'wanadoo',
    'orange',
    'comcast',
    'live',
    'rediffmail',
    'free',
    'gmx',
    'web',
    'yahoo',
    'yandex',
    'ymail',
    'libero',
    'outlook',
    'uol',
    'bol',
    'mail',
    'cox',
    'sbcglobal',
    'sfr',
    'verizon',
    'googlemail',
    'ig',
    'bigpond',
    'terra',
    'neuf',
    'alice',
    'rocketmail',
    'att',
    'laposte',
    'facebook',
    'bellsouth',
    'charter',
    'rambler',
    'tiscali',
    'shaw',
    'sky',
    'earthlink',
    'optonline',
    'freenet',
    't-online',
    'aliceadsl',
    'virgilio',
    'home',
    'qq',
    'telenet',
    'me',
    'voila',
    'planet',
    'tin',
    'ntlworld',
    'arcor',
    'frontiernet',
    'hetnet',
    'zonnet',
    'club-internet',
    'juno',
    'optusnet',
    'blueyonder',
    'bluewin',
    'skynet',
    'sympatico',
    'windstream',
    'mac',
    'centurytel',
    'chello',
    'aim',
  ],
  validateEmail: email => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  },
  verifyToken: async token => {
    try {
      const response = await fetch('/.netlify/functions/verify', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ token }),
      });
      const json = await response.json();
      return json;
    } catch (error) {
      console.log('error ', error);
    }
    return null;
  },
  ensureTrailingSlash: str => (str.endsWith('/') ? str : `${str}/`),
  encode: data => {
    return Object.keys(data)
      .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
      .join('&');
  },
  updateExternalLinks: anchorArray =>
    anchorArray &&
    [...anchorArray]
      .filter(
        a =>
          a.getAttribute('href') &&
          a.hostname !== window.location.hostname &&
          (a.getAttribute('href') && a.hostname).indexOf(`thirdandgrove`) === -1
      )
      .forEach(a => {
        a.setAttribute('target', '_blank');
        a.setAttribute('rel', 'noreferrer');
      }),
  updatePaths: json => {
    return new Promise((resolve, reject) => {
      return [json.data].map(
        ({
          caseStudies,
          insights,
          legacyInsights,
          redirects,
          landingPages,
        }) => {
          if (
            !caseStudies ||
            !insights ||
            !legacyInsights ||
            !redirects ||
            !landingPages
          ) {
            const error = new Error('missing dependency');
            reject(error);
            throw error;
          }

          const caseStudyNodes = caseStudies.nodes;
          const insightsNodes = insights.nodes;
          const legacyInsightsNodes = legacyInsights.nodes;
          const landingPageNodes = landingPages.nodes;
          const updatedRedirects = [];
          const nodeArray = caseStudyNodes.concat(
            insightsNodes,
            legacyInsightsNodes,
            landingPageNodes
          );

          redirects.edges.forEach(({ node }) => {
            if (node.redirect_redirect.uri.indexOf('/node/') !== -1) {
              const nid = node.redirect_redirect.uri.replace(
                'internal:/node/',
                ''
              );

              nodeArray.forEach(value => {
                if (Number(nid) === value.drupal_internal__nid) {
                  node.redirect_redirect.uri = value.path.alias;
                }
              });
            }
            updatedRedirects.push({
              node,
            });
          });

          redirects.edges = updatedRedirects;

          resolve(redirects);
          return redirects;
        }
      );
    });
  },
};
