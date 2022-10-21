// const linkResolver = require("./example-route-to-linkResolver");

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  siteMetadata: {
    title: `Gatsby Prismic Test`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
    // ...
    "gatsby-plugin-image",
    {
      resolve: "gatsby-source-prismic",
      options: {
        repositoryName: process.env.GATSBY_PRISMIC_REPO_NAME,
        accessToken: process.env.PRISMIC_ACCESS_TOKEN,
        customTypesApiToken: process.env.PRISMIC_CUSTOM_TYPES_API_TOKEN,
        // linkResolver: (doc) => linkResolver(doc),
      },
    },
  ],
};
