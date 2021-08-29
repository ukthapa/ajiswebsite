import React from "react"
import aboutImg from "../images/about.jpg"
import { Container, Row, Col, Image } from "react-bootstrap"


const WhyUsSection = () => {
	return (
		<section className="section ">
			<Container>
				<Row className="justify-content-between align-items-center mt-5 mb-5">
					<Col md={5}>
					    <h2 className="h5 text-uppercase text-blue fw-normal" data-sal="slide-down" data-sal-delay="150" data-sal-easing="ease">Why Choose Us</h2>
					    <h3 className="h1" data-sal="slide-down" data-sal-delay="100" data-sal-easing="ease">Reasons why our valued customers choose us.</h3>
						<p className="text-left pt-3" data-sal="slide-down" data-sal-delay="50" data-sal-easing="ease">AJIS has been pioneering innovative technology solutions since its inception, providing end-to-end deployment of technologies. This ranges from concept, design, supply, and installation, to testing and commissioning. We have therefore gained long experience and understanding of technical needs across different domains, and our solutions aim to solve <strong>real-life challenges</strong> for all clients, businesses, and communities regardless of their unique needs. Consequently, we personalize our services and solutions and address specific industry needs. We engage clients at personal, community, and industry needs levels, and design, build and manage technology solutions case by case. </p>
					</Col>
					<Col md={6} className="text-center mt-5 "  data-sal="slide-down" data-sal-delay="300" data-sal-easing="ease">
						<Image src={aboutImg} className="aboutimg img-fluid"/>
					</Col>
				</Row>
			</Container>
		</section>
	)
}

export default WhyUsSection



