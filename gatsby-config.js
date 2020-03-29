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
    nutshell: 'Zet je radio op 1.5 meter.',
    boatQuotes: [
      'tief op!',
      'mini loempias!',
      'hüde!',
      'nitraatje derbij!',
      'Marloes, kun jij mijn rug even insmeren?',
      'wat kijk je',
      'fuck! Marloes, ik ben vergeten het gasfornuis uit te zetten!',
      'barbecuesaus',
      'zet je mondkapje op mafkees! ben je gek ofzo!?',
      'hatsjoeh!',
      '200 kilo staal!',
      'ja, weet ik, ik ben zelf al eens naar Berlijn geweest, allemaal curryworst vreten enzo, super gezellig, haha!',
      'fuck de ether!',
      'reetveter',
      'aan de kant!',
      'hou op',
      'ga weg',
      'ik was hier eerst',
      'Marloes, hou je mond!',
      'doei',
    ],
  },

  plugins: [
    'gatsby-plugin-styled-components',
  ],
};
