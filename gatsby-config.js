require('dotenv').config();

module.exports = {
  siteMetadata: {
    title: `Third and Grove`,
    description: `We are design-first technologists helping innovative brands make their next move. We work directly with incredible organizations to build complex systems and innovative digital experiences in technologies like Drupal, Shopify Plus, and WordPress, and our emoji game is strong.`,
    author: `@thirdandgrove`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/static/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-emotion`,
    `gatsby-plugin-svgr`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `third-and-grove`,
        short_name: `tag`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
      },
    },
    // {
    //   resolve: `gatsby-source-drupal`,
    //   options: {
    //     baseUrl: process.env.DRUPAL_URL,
    //     basicAuth: {
    //       username: process.env.BASIC_AUTH_USERNAME,
    //       password: process.env.BASIC_AUTH_PASSWORD,
    //     },
    //   },
    // },
    {
      resolve: `gatsby-source-drupal`,
      options: {
        baseUrl: process.env.DRUPAL_URL2,
        basicAuth: {
          username: process.env.BASIC_AUTH_USERNAME2,
          password: process.env.BASIC_AUTH_PASSWORD2,
        },
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
  ],
};
