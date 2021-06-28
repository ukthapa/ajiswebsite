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
						<p className="text-center">Since its inception, A &amp; J Intelli System (P) Ltd has been providing innovative solutions to
thousands of clients and partners across the tech industry. We have built a dominant local
presence in the US and today boast of a stellar global brand, ever since grown into an industry
leader dictating the pace towards a future of limitless technological possibilities. Our
commitment to personalized technology services that address specific industry needs means we
engage clients at a personal, community, and industry needs level, designing, building, and
managing technology solutions case by case.</p>
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



