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
      'tief op!',
      'mini loempias!',
      'hüde!',
      'nitraatje derbij!',
      'wat kijk je',
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
      'doei',
      'WEH?',
      'er zit knoflook in m\'n reet, FEEST!',
      'ik heb de koude schotel gewonnen van het Lindeplein 11!',
      'doe mij een capucijn, das fijn!',
      'het wc-papier is op!',
      'hoesten, we have a problem!',
      'levitation bitchery',
    ],
  },

  plugins: [
    'gatsby-plugin-styled-components',
  ],
};
