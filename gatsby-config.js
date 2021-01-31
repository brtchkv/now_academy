const path = require('path');

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: "Gatsby + Strapi Blog",
    description: "Gatsby blog with Strapi",
    author: "Strapi team",
  },
  plugins: [
	  "gatsby-plugin-react-helmet",
	  `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    {
      resolve: "gatsby-source-strapi",
      options: {
        apiURL: process.env.API_URL || "http://nowacademy.io:1337",
        contentTypes: [
          // List of the Content Types you want to be able to request from Gatsby.
          "article",
          "level",
          "term",
          "term-type",
          "cryptocurrency-in-3-minutes",
        ],
        queryLimit: 1000,
      },
    },
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "changeNOW 2020",
        short_name: "NOWAcademy",
        start_url: "/",
        background_color: "#00C26F",
        theme_color: "#00C26F",
        display: "minimal-ui",
	      icon: `src/assets/images/favicon.png`,
      },
    },
	  {
		  resolve: `gatsby-plugin-less`,
		  options: {
			  javascriptEnabled: true,
			  modifyVars: {
				  dark: true,
				  'primary-color': '#00C26F',
				  'modal-content-bg': '#fff',
				  'menu-dark-bg': '#2B2B36',
				  'menu-dark-item-active-bg': '#2B2B36',
				  'layout-header-background': '#2B2B36',
			  }
		  }
	  },
	  {
		  resolve: `gatsby-plugin-alias-imports`,
		  options: {
			  alias: {
				  '@home': path.resolve(__dirname, 'src/sections/Home'),
				  '@level': path.resolve(__dirname, 'src/sections/Level'),
				  '@glossary': path.resolve(__dirname, 'src/sections/Glossary'),
				  '@article': path.resolve(__dirname, 'src/sections/Article'),
				  '@search': path.resolve(__dirname, 'src/sections/Search'),
				  '@components': path.resolve(__dirname, 'src/components'),
				  '@styles': path.resolve(__dirname, 'src/styles/'),
				  '@utils': path.resolve(__dirname, 'src/utils/'),
				  '@assets': path.resolve(__dirname, 'src/assets/'),
			  },
		  },
	  },
	  {
		  resolve: `gatsby-plugin-google-fonts`,
		  options: {
			  fonts: [
				  `Roboto\:300,400,500`,
			  ],
			  display: 'swap'
		  }
	  },
    "gatsby-plugin-offline",
    "gatsby-plugin-sass"
  ],
};
