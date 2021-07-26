import React from "react"
import aboutImg from "../images/about-illustration.svg"
import { Container, Row, Col, Image } from "react-bootstrap"


const WhyUsSection = () => {
	return (
		<div className="light-blue section">
			<Container>
				<Row className="align-items-center ">
					<Col md={12}>
						<h2 className="display-3  mb-4 text-center">Why Choose Us</h2>
						<p className="text-center">AJIS has been pioneering innovative technology solutions since its inception, providing end-to-end deployment of technologies. This ranges from concept, design, supply, and installation, to testing and commissioning. We have therefore gained long experience and understanding of technical needs across different domains, and our solutions aim to solve <strong>real-life challenges</strong> for all clients, businesses, and communities regardless of their unique needs. Consequently, we personalize our services and solutions and address specific industry needs. We engage clients at personal, community, and industry needs levels, and design, build and manage technology solutions case by case. </p>
					</Col>
					<Col md={12} className="text-center">
						<Image src={aboutImg} className="aboutimg img-fluid"/>
					</Col>
				</Row>
			</Container>
		</div>
	)
}

export default WhyUsSection



