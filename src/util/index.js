module.exports = {
  ensureTrailingSlash: str => (str.endsWith('/') ? str : `${str}/`),
  encode: data => {
    return Object.keys(data)
      .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
      .join('&');
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

          const caseStudyNodeId = caseStudies.nodes;
          const insightsNodeId = insights.nodes;
          const legacyInsightsNodeId = legacyInsights.nodes;
          const updatedRedirects = [];
          const nodeArray = caseStudyNodeId.concat(
            insightsNodeId,
            legacyInsightsNodeId
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
