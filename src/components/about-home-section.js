import React from "react"
import imgOne from "../images/sa5.jpeg"
import imgTwo from "../images/sa6.jpeg"
import imgThree from "../images/sa7.jpeg"
import imgFour from "../images/sa8.jpeg"
import { Container, Row, Col, Image } from "react-bootstrap"



const AboutSection = () => {
	return (
		<div className="section">
			<Container>
				<Row className="align-items-center">
					<Col lg={{span: 5, order: 1,  offset: 1 }} className="text-center text-lg-start">
						<h2 className="h5 mb-2 text-uppercase text-blue fw-normal" data-sal="slide-down" data-sal-delay="400" data-sal-easing="ease">About Us</h2>
						<h3 className="h1 mb-4"  data-sal="slide-down" data-sal-delay="400" data-sal-easing="ease">AJIS - Dedication to Innovations</h3>
						<p data-sal="slide-down" data-sal-delay="400" data-sal-easing="ease">A &amp; J Intelli System (P) Ltd (AJIS) is a technology solution provider that started in 2015. It set out to provide among others, dedicated IT support, software development, artificial intelligence (AI), and managed services. It has since expanded and today pioneers several innovative solutions to <strong>real-life challenges</strong> affecting businesses, organizations, and communities worldwide.</p>
						<p data-sal="slide-down" data-sal-delay="400" data-sal-easing="ease">AJIS serves different domains, including citizen safety, solid-waste management, and traffic solutions, and deploys solutions across multiple smart cities worldwide. A motivated team of professionals and experts runs the company and serves customers across the public and private sectors. AJIS’s is brand is its dedication to innovations addressing <strong>real-life challenges</strong>.</p>
					</Col>
					<Col lg={6} className="position-relative">
						<div className="d-block shape bg-pale-red rounded" data-sal="fade-in" data-sal-delay="10" data-sal-easing="ease"> </div>
						<Row className="align-items-center position-relative">
							<Col xs={6} className="text-right">
								<Image src={imgOne} className="aboutimg img-fluid mt-10 rounded shadow-sm"  data-sal="fade-in" data-sal-delay="200" data-sal-easing="ease"/>
								<Image src={imgTwo} className="aboutimg img-fluid mt-4 rounded shadow-sm float-end" data-sal="fade-in" data-sal-delay="500" data-sal-easing="ease"/>
							</Col>
							<Col xs={6} className="text-left">
								<Image src={imgThree} className="aboutimg img-fluid rounded shadow-sm" data-sal="fade-in" data-sal-delay="300" data-sal-easing="ease"/>
								<Image src={imgFour} className="aboutimg img-fluid mt-4 rounded shadow-sm" data-sal="fade-in" data-sal-delay="400" data-sal-easing="ease"/>
							</Col>
						</Row>
					</Col>
				</Row>
			</Container>
		</div>
	)
}

export default AboutSection



