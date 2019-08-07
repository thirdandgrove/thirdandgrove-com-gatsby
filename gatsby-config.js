require('dotenv').config();

module.exports = {
  siteMetadata: {
    title: `Third and Grove`,
    description: `We are design-first technologists helping innovative brands make their next move. We work directly with incredible organizations to build complex systems and innovative digital experiences in technologies like Drupal, Shopify Plus, and WordPress, and our emoji game is strong.`,
    author: `@thirdandgrove`,
  },
  plugins: [
    `gatsby-plugin-netlify`,
    `gatsby-plugin-netlify-cache`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
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
    {
      resolve: `gatsby-source-resumator`,
      options: {
        apiKey: process.env.RESUMATOR_API_KEY,
      },
    },
    `gatsby-plugin-offline`,
    {
      resolve: `gatsby-plugin-google-tagmanager`,
      options: {
        id: 'GTM-MKBKRBC',
        includeInDevelopment: false,
      },
    },
  ],
};
