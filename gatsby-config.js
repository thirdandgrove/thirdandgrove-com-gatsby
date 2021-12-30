require('dotenv').config();

const isProduction =
  process.env.BRANCH !== undefined && process.env.BRANCH === 'master'
    ? 'production'
    : 'development';

module.exports = {
  siteMetadata: {
    title: `Third and Grove`,
    description: `We are design-first technologists helping innovative brands make their next move. We work directly with incredible organizations to build complex systems and innovative digital experiences in technologies like Drupal, Shopify Plus, and WordPress, and our emoji game is strong.`,
    author: `@thirdandgrove`,
    siteUrl: `https://www.thirdandgrove.com`,
  },
  plugins: [
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-netlify`,
      options: {
        headers: {
          '/*.woff': ['Cache-Control:  max-age=31536000'],
          '/*.woff2': ['Cache-Control:  max-age=31536000'],
          '/*.png': ['Cache-Control:  max-age=31536000'],
          '/*.svg': ['Cache-Control:  max-age=31536000'],
        },
        mergeCachingHeaders: true,
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
      },
    },
    {
      resolve: `gatsby-source-drupal`,
      options: {
        preview: true,
        baseUrl: process.env.DRUPAL_URL,
        basicAuth: {
          username: process.env.BASIC_AUTH_USERNAME,
          password: process.env.BASIC_AUTH_PASSWORD,
        },
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
              allInsight(sort: {order: DESC, fields: created}, filter: {field_hidden: {eq: false}, relationships: {field_tags: {elemMatch: {name: {eq: "Drupal"}}}}}, limit: 10) {
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
        sitemap: 'https://www.thirdandgrove.com/sitemap.xml',
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
    {
      resolve: 'gatsby-plugin-webpack-bundle-analyser-v2',
      options: {
        devMode: true,
      },
    },
  ],
};
