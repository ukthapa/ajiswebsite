import React from "react"
import aboutImg from "../images/about-illustration.svg"
import { Container, Row, Col, Image } from "react-bootstrap"



const AboutSection = () => {
	return (
		<div className="light-blue section">
			<Container>
				<Row className="align-items-center">
					<Col lg={6} className="text-center text-lg-left">
						<h2 className="display-3 ">About Us</h2>
						{/* <h3 className="display-3  mb-4">Passionate team and vast network of customer service</h3> */}
						<p>A &amp; J Intelli System (P) Ltd (AJIS) is a technology solution provider that started in 2015. It set out to provide among others, dedicated IT support, software development, artificial intelligence (AI), and managed services. It has since expanded and today pioneers several innovative solutions to <strong>real-life challenges</strong> affecting businesses, organizations, and communities worldwide.</p>
						<p>AJIS serves different domains, including citizen safety, solid-waste management, and traffic solutions, and deploys solutions across multiple smart cities worldwide. A motivated team of professionals and experts runs the company and serves customers across the public and private sectors. AJIS’s is brand is its dedication to innovations addressing <strong>real-life challenges</strong>.</p>
					</Col>
					<Col lg={6}>
						<Image src={aboutImg} className="aboutimg img-fluid"/>
					</Col>
				</Row>
			</Container>
		</div>
	)
}

export default AboutSection



