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
          families: ['Poppins Condensed:200, 300, 400, 600, 700, 800']
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
		{
			resolve: "gatsby-plugin-scroll-reveal",
			options: {
					threshold: 1, // Percentage of an element's area that needs to be visible to launch animation
					once: true, // Defines if animation needs to be launched once
					disable: false, // Flag for disabling animations

					// Advanced Options
					selector: '[data-sal]', // Selector of the elements to be animated
					animateClassName: 'sal-animate', // Class name which triggers animation
					disabledClassName: 'sal-disabled', // Class name which defines the disabled state
					rootMargin: '0% 50%', // Corresponds to root's bounding box margin
					enterEventName: 'sal:in', // Enter event name
					exitEventName: 'sal:out', // Exit event name
			}
		},
		{
      resolve: "gatsby-source-filesystem",
      options: {
        name: "posts",
        path: "./src/posts/",
      },
      __key: "posts",
    },
		`gatsby-transformer-remark`,
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: "./src/data/",
      },
    }
  ],
};
