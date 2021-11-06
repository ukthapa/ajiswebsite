import * as React from "react"

import Layout from "../layout/base"
import SEO from "../components/seo"
import Banner from "../components/banner"
import AboutUs from "../components/about-home-section"
import Services from "../components/services-home-section"
import WhyUs from "../components/whyus-home-section"
import Clients from "../components/clients-home-section"
// import SimpleSlider from "../components/simple-swiper-slider"
// markup
const IndexPage = (props) => {
	// const swiperData = {
	// 	slides: [
	// 		{
	// 			img : 'chat.png',
	// 			title : 'Direct contact'
	// 		},
	// 		{
	// 			img : 'target.png',
	// 			title : 'Target'
	// 		},
	// 		{
	// 			img : 'customer-service.png',
	// 			title : 'Customer service'
	// 		}
	// 	],
	// 	spaceBetween: 20
	// }
  return (
		<Layout>
			<SEO
			  title="Dedication to Innovations"
			  description="A &amp; J Intelli System (P) Ltd (AJIS) provide dedicated IT support, software development, artificial intelligence (AI), and managed services."
			/>
			<Banner />
			<AboutUs />
			<Services />
			<WhyUs />
			<Clients />
			{/* <SimpleSlider dataInfo = {swiperData}/> */}
		</Layout>
  )
}

export default IndexPage

