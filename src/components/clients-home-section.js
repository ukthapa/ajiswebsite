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
						<p className="text-center mb-4">Presently, <strong>A &amp; J Intelli System (P) Ltd</strong> services and products reach worldwide. Our security
systems, IT infrastructure, and management systems, for example, are securing lives and
improving the quality of life in all leading cities and organizations worldwide. Our clients range
from individuals, communities to corporations across different fields, including Manufacturing,
Engineering, Education, Technology, Commerce and banking, Electronics, and Healthcare,
among others. These hail from the private as well as public domains, and we serve them on a
case-by-case basis, delivering custom solutions to address both specific and general industry
needs.</p>
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



