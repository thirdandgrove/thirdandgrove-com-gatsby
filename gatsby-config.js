/* eslint-disable no-undef */
const { readFileSync, writeFileSync } = require('fs');
require('dotenv').config();

const isProduction =
  process.env.BRANCH !== undefined && process.env.BRANCH === 'master'
    ? 'production'
    : 'development';

const siteUrl = process.env.URL || `https://www.thirdandgrove.com`;

module.exports = {
  siteMetadata: {
    title: `Third and Grove`,
    description: `We are design-first technologists helping innovative brands make their next move. We work directly with incredible organizations to build complex systems and innovative digital experiences in technologies like Drupal, Shopify Plus, and WordPress, and our emoji game is strong.`,
    author: `@thirdandgrove`,
    siteUrl: `https://www.thirdandgrove.com`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-csp`,
      options: {
        disableOnDev: true,
        mergeScriptHashes: false,
        mergeStyleHashes: false,
        directives: {
          'default-src': `'self' data: www.google-analytics.com https://polyfill.io https://www.google.com https://cdnjs.cloudflare.com https://www.gstatic.com`,
          'script-src': `'self' 'unsafe-inline' 'unsafe-eval' data: www.google-analytics.com https://polyfill.io https://www.google.com https://cdnjs.cloudflare.com https://www.gstatic.com www.googletagmanager.com snap.licdn.com static.ads-twitter.com googleads.g.doubleclick.net https://sc.lfeeder.com`,
          'style-src': `'self' 'unsafe-inline' fonts.googleapis.com fonts.gstatic.com https://d33wubrfki0l68.cloudfront.net`,
          'img-src': `'self' data: www.google-analytics.com www.google.com.ec https://www.google.com/ads https://www.google.com/pagead https://cdn.linkedin.oribi.io https://px.ads.linkedin.com https://www.google.com/ads/ga-audiences https://tr-rc.lfeeder.com`,
          'font-src': `'self' data: fonts.gstatic.com https://d33wubrfki0l68.cloudfront.net`,
          'connect-src': `'self' https://www.thirdandgrove.com analytics.google.com extreme-ip-lookup.com stats.g.doubleclick.net www.google-analytics.com https://cdn.linkedin.oribi.io https://px.ads.linkedin.com`,
        },
      },
    },
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        query: `
        {
          allCaseStudy(filter: { field_hidden: { eq: false } }) {
            nodes {
              modifiedGmt: changed
              uri: path {
                alias
              }
            }
          }
          allLandingPage(filter: { field_hidden: { eq: false } }) {
            nodes {
              modifiedGmt: changed
              uri: path {
                alias
              }
            }
          }
          allInsight(filter: { field_hidden: { eq: false } }) {
            nodes {
              modifiedGmt: changed
              uri: path {
                alias
              }
            }
          }
          allNodeLegacyInsight {
            nodes {
              modifiedGmt: changed
              uri: path {
                alias
              }
            }
          }
        }
      `,
        resolveSiteUrl: () => siteUrl,
        resolvePages: ({
          allCaseStudy: { nodes: allCaseStudyNodes },
          allLandingPage: { nodes: allLandingPageNodes },
          allInsight: { nodes: allInsightNodes },
          allNodeLegacyInsight: { nodes: allNodeLegacyInsightNodes },
        }) => {
          const drupalNodeMap = [
            ...allCaseStudyNodes,
            ...allLandingPageNodes,
            ...allInsightNodes,
            ...allNodeLegacyInsightNodes,
          ].map(node => {
            return {
              path: node.uri.alias,
              lastmod: node.modifiedGmt,
            };
          });
          return drupalNodeMap;
        },
        serialize: ({ path, lastmod, changefreq, priority }) => {
          return {
            url: path,
            lastmod,
            changefreq,
            priority,
          };
        },
      },
    },
    {
      resolve: `gatsby-plugin-netlify`,
      options: {
        transformHeaders: (headers, path) => {
          if (path) {
            if (path.endsWith('/')) {
              const filePath = `./public${path}index.html`;
              const rawHtml = readFileSync(filePath).toString();
              const csp =
                /<meta http-equiv="Content-Security-Policy" content="(.*?)"\/>/
                  .exec(rawHtml)[1]
                  .replace(/&#x27;/g, `'`);
              headers.push(`Content-Security-Policy: ${csp}`);
              writeFileSync(
                filePath,
                rawHtml.replace(
                  /<meta http-equiv="Content-Security-Policy" content=".*?"\/>/g,
                  ''
                )
              );
            }
          }
          return headers;
        },
        headers: {
          '/*': [
            "Content-Security-Policy: default-src 'self' data: www.google-analytics.com https://polyfill.io https://www.google.com https://cdnjs.cloudflare.com https://www.gstatic.com",
            "Content-Security-Policy: script-src 'self' 'unsafe-inline' 'unsafe-eval' data: www.google-analytics.com https://polyfill.io https://www.google.com https://cdnjs.cloudflare.com https://www.gstatic.com www.googletagmanager.com snap.licdn.com static.ads-twitter.com googleads.g.doubleclick.net https://sc.lfeeder.com",
            "Content-Security-Policy: style-src 'self' 'unsafe-inline' fonts.googleapis.com fonts.gstatic.com https://d33wubrfki0l68.cloudfront.net",
            "Content-Security-Policy: img-src 'self' data: www.google-analytics.com www.google.com.ec https://www.google.com/ads https://www.google.com/pagead https://cdn.linkedin.oribi.io https://px.ads.linkedin.com https://www.google.com/ads/ga-audiences https://tr-rc.lfeeder.com",
            "Content-Security-Policy: font-src 'self' data: fonts.gstatic.com https://d33wubrfki0l68.cloudfront.net",
            "Content-Security-Policy: connect-src 'self' https://www.thirdandgrove.com analytics.google.com extreme-ip-lookup.com stats.g.doubleclick.net www.google-analytics.com https://cdn.linkedin.oribi.io https://px.ads.linkedin.com",
          ],
        },
        mergeSecurityHeaders: true,
        mergeCachingHeaders: true,
        generateMatchPathRewrites: true,
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/data/`,
      },
    },
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-transformer-sharp`,
      options: {
        checkSupportedExtensions: false,
      },
    },
    {
      resolve: 'gatsby-plugin-sharp',
      options: {
        defaultQuality: 80,
      },
    },
    `gatsby-plugin-emotion`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `third-and-grove`,
        short_name: `tag`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#EBC900`,
        display: `minimal-ui`,
        icon: 'static/images/icon.png',
        theme_color_in_head: false, // This will avoid adding theme-color meta tag.
      },
    },
    {
      resolve: `gatsby-source-drupal`,
      options: {
        baseUrl: process.env.DRUPAL_URL,
        basicAuth: {
          username: process.env.BASIC_AUTH_USERNAME,
          password: process.env.BASIC_AUTH_PASSWORD,
        },
        fastBuilds: true,
      },
    },
    `gatsby-plugin-remove-serviceworker`,
    {
      resolve: `gatsby-plugin-google-tagmanager`,
      options: {
        id: 'GTM-MKBKRBC',
        includeInDevelopment: false,
      },
    },
    {
      resolve: `gatsby-plugin-gtag`,
      options: {
        trackingId: 'UA-46758288-8',
        head: false,
      },
    },
    {
      resolve: `gatsby-plugin-feed`,
      options: {
        query: `
        {
          site {
            siteMetadata {
              title
              description
              siteUrl
            }
          }
        }
      `,
        setup: ({
          query: {
            site: { siteMetadata },
          },
        }) => {
          return {
            ...siteMetadata,
            site_url: 'https://www.thirdandgrove.com/drupal-planet-rss.xml',
            language: 'en',
          };
        },
        feeds: [
          {
            serialize: ({ query: { site, allInsight } }) => {
              return allInsight.nodes.map(node => {
                return {
                  title: node.title,
                  description:
                    node.field_summary && node.field_summary.processed,
                  guid: site.siteMetadata.siteUrl + node.path.alias,
                  custom_elements: [
                    {
                      'dc:creator': node.relationships.uid.name,
                    },
                    {
                      pubDate: node.created,
                    },
                    {
                      link: site.siteMetadata.siteUrl + node.path.alias,
                    },
                  ],
                };
              });
            },
            query: `
            {
              allInsight(
                sort: { created: DESC },
                filter: { field_hidden: { eq: false }, relationships: { field_tags: { elemMatch: { name: { eq: "Drupal"} } } } },
                limit: 10
                ) {
                nodes {
                  title
                  field_summary {
                    processed
                  }
                  created(formatString: "ddd, DD MMM YYYY hh:mm:ss +0000")
                  relationships {
                    uid {
                      name:display_name
                    }
                  }
                  path {
                    alias
                  }
                }
              }
            }
          `,
            output: '/drupal-planet-rss.xml',
            title: 'Drupal Planet RSS Feed',
            language: 'en',
            match: '^/insights/',
          },
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://www.thirdandgrove.com/',
        sitemap: 'https://www.thirdandgrove.com/sitemap/sitemap-index.xml',
        resolveEnv: () => isProduction,
        env: {
          production: {
            policy: [{ userAgent: '*', disallow: ['/careers/*'] }],
          },
          development: {
            policy: [{ userAgent: '*', disallow: ['/'] }],
          },
        },
      },
    },
  ],
};
