/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Top Dollar's World`,
    siteUrl: `https://www.yourdomain.tld`
  },
  plugins: ["gatsby-plugin-styled-components",
            "gatsby-plugin-image",
            "gatsby-plugin-sharp",
            "gatsby-plugin-sitemap",
            "gatsby-plugin-mdx", 
            "gatsby-transformer-sharp", 
  //   {
  //   resolve: 'gatsby-source-filesystem',
  //   options: {
  //     "name": "images",
  //     "path": "./src/images/"
  //   },
  //   __key: "images"
  // }, {
  //   resolve: 'gatsby-source-filesystem',
  //   options: {
  //     "name": "pages",
  //     "path": "./src/pages/"
  //   },
  //   __key: "pages"
  // },     
  {
    resolve: "gatsby-source-filesystem",
    options: {
      name: `blog`,
      path: `${__dirname}/blog`,
    },
    __key: "blog"
  }]
};