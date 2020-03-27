/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */
require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  siteMetadata: {
    title: "Mondkapje FM 2",
    nutshell: "Zet je radio op 1.5 meter."
  },

  plugins: [
    'gatsby-plugin-styled-components',
  ],
};
