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
    title: 'Mondkapje FM',
    nutshell: 'Zet je radio op 1.5 meter!',
    boatQuotes: [
      'goedemiddag!',
      'mini loempias!',
      'hüde!',
      'nitraatje derbij!',
      'barbecuesaus',
      'hatsjoeh!',
      '200 kilo staal!',
      'aan de kant!',
      'hou op',
      'ga weg',
      'doei',
      'WEH?',
      'hoesten, we have a problem!',
      'that is very nies!',
    ],
  },

  plugins: [
    'gatsby-plugin-styled-components',
  ],
};
