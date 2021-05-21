module.exports = {
  ensureTrailingSlash: str => (str.endsWith('/') ? str : `${str}/`),
  encode: data => {
    return Object.keys(data)
      .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
      .join('&');
  },
  modifyExternalLinks: html => {
    const checkDomain = url => {
      let u = url;
      if (u.indexOf('//') === 0) {
        u = window.location.protocol + u;
      }
      return u
        .toLowerCase()
        .replace(/([a-z])?:\/\//, '$1')
        .split('/')[0];
    };

    const isExternalURL = url => {
      return (
        ((url.length > 1 && url.indexOf(':') > -1) || url.indexOf('//') > -1) &&
        checkDomain(window.location.href) !== checkDomain(url)
      );
    };

    const parser = new DOMParser();
    const content = parser.parseFromString(html, 'text/html');
    const anchors = [...content.getElementsByTagName('a')];

    anchors.forEach(v => {
      const href = v.getAttribute('href');

      if (isExternalURL(href)) {
        v.setAttribute('target', '_blank');
        v.setAttribute('rel', 'noreferrer');
      }
    });

    return content.body.innerHTML;
  },
  updatePaths: json => {
    return new Promise((resolve, reject) => {
      return [json.data].map(
        ({ caseStudies, insights, legacyInsights, redirects }) => {
          if (!caseStudies || !insights || !legacyInsights || !redirects) {
            const error = new Error('missing dependency');
            reject(error);
            throw error;
          }

          const caseStudyNodes = caseStudies.nodes;
          const insightsNodes = insights.nodes;
          const legacyInsightsNodes = legacyInsights.nodes;
          const updatedRedirects = [];
          const nodeArray = caseStudyNodes.concat(
            insightsNodes,
            legacyInsightsNodes
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
