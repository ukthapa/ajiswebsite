module.exports = {
  siteMetadata: {
    title: "ajiswebsite",
		siteUrl: "https://ajiswebsite.com"
  },
  plugins: [
    "gatsby-plugin-sass",
    "gatsby-plugin-image",
    // {
    //   resolve: "gatsby-plugin-google-analytics",
    //   options: {
    //     trackingId: "",
    //   },
    // },
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
		{
			resolve: 'gatsby-plugin-web-font-loader',
      options: {
        google: {
          families: ['Manrope Condensed:100, 300, 500, 600, 800']
        }
      }
		},
    {
      resolve: "gatsby-plugin-manifest",
      options: {
				start_url: '/',
        icon: "src/images/icon.png",
      },
    },
    "gatsby-plugin-mdx",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
		"gatsby-transformer-json",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
		// {
    //   resolve: "gatsby-source-filesystem",
    //   options: {
    //     name: "posts",
    //     path: "./src/posts/",
    //   },
    //   __key: "posts",
    // },
    // {
    //   resolve: "gatsby-source-filesystem",
    //   options: {
    //     path: "./src/data/",
    //   },
    // },
  ],
};
