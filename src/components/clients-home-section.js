import React from "react"
import aboutImg from "../images/about-illustration.svg"
import { Container, Row, Col, Image } from "react-bootstrap"


const ClinetsSection = () => {
	return (
		<div className="section">
			<Container>
				<Row className="align-items-center ">
					<Col md={12}>
						<h2 className="display-3  mb-4 text-center">Our Clients</h2>
						<p className="text-center mb-4">Presently, AJIS company technological solutions reach worldwide and address real-life challenges in multiple domains and sectors. Our clients range from individuals, communities to corporations. These include the military, where we specifically serve the Indian army, the transport sector, mainly the Indian railways, and smart cities where we provide robust building solutions. Other fields include Manufacturing, Education, Technology, oil and gas, and Healthcare, among others. These hail from the private as well as public domains, and we serve them on a case-by-case basis, delivering custom solutions to address both specific and general industry needs. Besides these, AJIS is constantly looking for opportunities to grow and expand its solutions to other industries. Indeed, it has built partnerships with complementary service providers. One of our exclusive partners is Mirasys, a Finland-based company with which we are working on various Made-In-India projects
</p>
					</Col>
					<Col md={12} className="text-center">
						<Image src={aboutImg} className="aboutimg img-fluid"/>
					</Col>
				</Row>
			</Container>
		</div>
	)
}

export default ClinetsSection



