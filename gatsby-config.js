module.exports = {
  siteMetadata: {
    title: 'hillary Keel | writing',
    Description: 'Poetry and Prose by Brooklyn-based writer Hillary Keel',
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-catch-links`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/pages`,
        name: 'pages',
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        excerpt_separator: `<!-- end -->`
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Raleway\:600`, // you can also specify font weights and styles
        ]
      }
    }
  ],
};   
  
