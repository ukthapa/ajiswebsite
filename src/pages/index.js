import * as React from "react"

import Layout from "../layout/base"
import Banner from "../components/banner"


// markup
const IndexPage = () => {
  return (
		<Layout>
			<Banner />

		</Layout>
  )
}

export default IndexPage

const bannerData = () => {
	bannerTitle : 'Turn your Technological Fantasy into a Livable Reality.'
	bannerContent : 'Our Intelligent data systems, Information, and Interactive technology solutions are powering corporations, securing communities, and enhancing the quality of life worldwide.'
	bannerImg : 'hero-img.jpg'
}

return bannerData;
