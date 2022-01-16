import * as React from "react"

import Layout from "../layout/base"
import SEO from "../components/seo"
import Banner from "../components/banner"
import AboutUs from "../components/about-home-section"
import Services from "../components/services-home-section"
import WhyUs from "../components/whyus-home-section"
import Clients from "../components/clients-home-section"
// import TestimonialsSlider from "../components/testimonial"
import CtaBlock from "../components/cta-block"
// import SimpleSlider from "../components/simple-swiper-slider"
// markup
const IndexPage = (props) => {
	const swiperData = {
		slides: [
			{
				img : 'customers-logo/logo.png',
				title : 'Direct contact',
				desc : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
			},
			{
				img : 'customers-logo/logo2.png',
				title : 'Target',
				desc: 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.'
			},
			{
				img : 'customers-logo/logo3.png',
				title : 'Customer service',
				desc: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam'
			}
		],
		spaceBetween: 20
	};

	const ctaData = {
		title : 'Ready to get started?',
		desc : 'If you are evaluating the need for your company before moving its infrastructure to Cloud or transitioning to the Cloud as part of business` growth master plan, we can help.',
		ctaLabel: 'Schedule a Call',
		ctaLink: '/contact-us/'
	}
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
			{/* <TestimonialsSlider dataInfo = {swiperData}/> */}
			<CtaBlock ctaInfo = {ctaData}/>
		</Layout>
  )
}

export default IndexPage

