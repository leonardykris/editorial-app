module.exports = {
  plugins: [
    {
      resolve: `gatsby-theme-blog`,
      options: {},
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // The property ID; the tracking code won't be generated without it
        trackingId: "G-FNZ06CQ57R",
      }
    },
  ],
  // Customize your site metadata:
  siteMetadata: {
    title: `Editorial`,
    author: `Leonardy Kristianto`,
    description: `Opinions of curated articles and interviews`,
    social: [
      {
        name: `Twitter`,
        url: `https://twitter.com/leonardykris`,
      },
      {
        name: `LinkedIn`,
        url: `https://linkedin.com/in/leonardykris`,
      },
    ],
  },
}
