const cheerio = require('cheerio');

module.exports = {
  ensureTrailingSlash: str => (str.endsWith('/') ? str : `${str}/`),
  encode: data => {
    return Object.keys(data)
      .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
      .join('&');
  },
  modifyExternalLinks: (html, siteUrl) => {
    const checkDomain = url => {
      let u = url;
      if (u.indexOf('//') === 0) {
        u = siteUrl + u;
      }
      return u
        .toLowerCase()
        .replace(/([a-z])?:\/\//, '$1')
        .split('/')[0];
    };

    const $ = cheerio.load(html);

    $('a').each((i, elem) => {
      const href = $(elem).attr('href');
      if (checkDomain(siteUrl) !== checkDomain(href)) {
        $(elem).attr('target', '_blank');
        $(elem).attr('rel', 'noreferrer');
      }
    });

    return $.html();
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
