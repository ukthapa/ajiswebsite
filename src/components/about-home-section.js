import React from "react"
import aboutImg from "../images/about-illustration.svg"
import { Container, Row, Col, Image } from "react-bootstrap"


const AboutSection = () => {
	return (
		<div className="light-blue section">
			<Container>
				<Row className="align-items-center">
					<Col md={6}>
						<h2 className="h5 text-uppercase text-danger text-underline">About Us</h2>
						<h3 className="display-3  mb-4">Passionate team and vast network of customer service</h3>
						<p><strong>A &amp; J Intelli System (P) Ltd</strong> was formed in 2015. Since then, the motivation to bring the world to your doorstep with the best and society need most responsive technological solutions has driven us forward. Although based in the US, where we have a strong local presence in all major cities, we operate globally. </p>
						<p>Our passionate team and vast network of customer service, business, and technical professionals work 24/7 to provide customers and clients from several different industries all over the world with creative technological solutions, including intelligent data, IT infrastructure, Managed services, cloud services, and remote support services.</p>
					</Col>
					<Col md={6}>
						<Image src={aboutImg} className="aboutimg img-fluid"/>
					</Col>
				</Row>
			</Container>
		</div>
	)
}

export default AboutSection



