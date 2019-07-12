module.exports = {
  siteMetadata: {
    title: `DrupalCamp CR 2019`,
    description: `Este Camp es uno de los más grandes de América Latina y el más constante de la región.`,
    author: `@drupalcr`,
  },
  plugins: [
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
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // Drupal Sourve plugin.
    // {
    //   resolve: `gatsby-source-drupal`,
    //   options: {
    //     baseUrl: `http://dev-drupalcr-gatsby.pantheonsite.io/`,
    //     apiBase: `jsonapi`,
    //   },
    // },
    // Markdown source plugin.
    // {
    //   resolve: `gatsby-source-filesystem`,
    //   options: {
    //     path: `${__dirname}/src/markdown`,
    //     name: `markdown`,
    //   },
    // },
    // `gatsby-transformer-remark`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
