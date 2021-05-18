import * as React from "react"

import Layout from "../layout/base"
import Banner from "../components/banner"
import AboutUs from "../components/about-home-section"
import Services from "../components/services-home-section"
import WhyUs from "../components/whyus-home-section"


// markup
const IndexPage = () => {
  return (
		<Layout>
			<Banner />
			<AboutUs />
			<Services />
			<WhyUs />
		</Layout>
  )
}

export default IndexPage

