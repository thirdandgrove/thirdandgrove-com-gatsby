module.exports = {
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
          landingPages,
          insights,
          legacyInsights,
          redirects,
        }) => {
          if (
            !caseStudies ||
            !landingPages ||
            !insights ||
            !legacyInsights ||
            !redirects
          ) {
            const error = new Error('missing dependency');
            reject(error);
            throw error;
          }

          const caseStudyNodes = caseStudies.nodes;
          const landingPageNodes = landingPages.nodes;
          const insightsNodes = insights.nodes;
          const legacyInsightsNodes = legacyInsights.nodes;
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
