import React from "react"
import aboutImg from "../images/about-illustration.svg"
import { Container, Row, Col, Image } from "react-bootstrap"


const ServicesSection = () => {
	return (
		<div className="section white-bg">
			<Container>
				<Row className="align-items-center mb-5">
					<Col className="text-center">
					    <h2 className="h5 text-uppercase text-danger text-underline">Our Services</h2>
						<h3 className="display-3 mb-4">Services to grow your <span className="d-md-block">business smartly</span></h3>
					</Col>
				</Row>
				<Row className="align-items-center mb-5">
					<Col md={6}>
						<h4 className="h3 mb-4">Consultancy for IT &amp; IBMS </h4>
						<p>We provide one-stop IT services and IBMS solution consultancy. Our IBMS comprises integrations of several control and monitoring solutions, including Closed Circuit Surveillance, Life safety, power, and lighting systems. It enhances indoor comfort, security, and energy efficiency and enables centralized all-system management.</p>
					</Col>
					<Col md={6}>
						<Image src={aboutImg} className="aboutimg img-fluid"/>
					</Col>
				</Row>

				<Row className="align-items-center">
					<Col md={6} md={{ order: 'last' }}>
						<h4 className="h3 mb-4"> System integrator for ICT &amp; <span className="d-md-block">Surveillance work</span></h4>
						<p>Our system integrator addresses the wide range of integration needs across the ICT industry and builds open data centers along with defined domains of processing, storage, applications, and network and security. We also offer Remote Surveillance Monitoring services for different clients.</p>
					</Col>
					<Col md={6}>
						<Image src={aboutImg} className="aboutimg img-fluid"/>
					</Col>
				</Row>


				<Row className="align-items-center mb-5">
					<Col md={6}>
						<h4 className="h3 mb-4">Managed services</h4>
						<p>Our managed services allow your hybrid IT estate to focus on core business tasks while we complement its IT requirements through improved agility and scalability. Services comprise Monitoring and Alerting, Incident Management, Access Management, Backup Management, cost optimization, and staff augmentation projects. </p>
					</Col>
					<Col md={6}>
						<Image src={aboutImg} className="aboutimg img-fluid"/>
					</Col>
				</Row>

				<Row className="align-items-center">
					<Col md={6} md={{ order: 'last' }}>
						<h4 className="h3 mb-4"> Cloud service</h4>
						<p>We offer cloud services ranging from cloud migration, optimization, and discovery to disaster recovery, architecture validation, data analytics, and application development. We personalize  these in our data center but still exploit flexibility and modularity advantages that new technologies offer in virtualizing and managing data. </p>
					</Col>
					<Col md={6}>
						<Image src={aboutImg} className="aboutimg img-fluid"/>
					</Col>
				</Row>


				<Row className="align-items-center mb-5">
					<Col md={6}>
						<h4 className="h3 mb-4"> Cloud service</h4>
						<p>A &amp; J Intelli System (P) Ltd provides a wide range of software development solutions, including custom Information Technology (IT) web applications and Artificial Intelligence (AI) and Virtual Reality (VR) software solutions for building immersive and simulated 3D environments etc. </p>
					</Col>
					<Col md={6}>
						<Image src={aboutImg} className="aboutimg img-fluid"/>
					</Col>
				</Row>

				<Row className="align-items-center">
					<Col md={6} md={{ order: 'last' }}>
						<h4 className="h3 mb-4"> Career tech</h4>
						<p>A &amp; J Intelli System (P) Ltd also provides Educational Institutions with a broad range of products and services, including turnkey, ready-to-run programs and courses, learning management systems (LMS) that we doubly host, marketing, and student recruitment, support, and management. </p>
					</Col>
					<Col md={6}>
						<Image src={aboutImg} className="aboutimg img-fluid"/>
					</Col>
				</Row>

			</Container>
		</div>
	)
}

export default ServicesSection



