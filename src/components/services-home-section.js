import React from "react"
import aboutImg from "../images/about-illustration.svg"
import { Container, Row, Col, Image } from "react-bootstrap"


const ServicesSection = () => {
	return (
		<div className="section white-bg">
			<Container>
				<Row className="align-items-center mb-5">
					<Col className="text-center">
					    <h2 className="display-3">Our Services</h2>
						{/* <h3 className="display-3 mb-4">Services to grow your <span className="d-md-block">business smartly</span></h3> */}
					</Col>
				</Row>
				<Row className="align-items-center mb-5">
					<Col md={6}>
						<h4 className="h3 mb-4">IT &amp; Cloud Advisory Services</h4>
						<p>AJIS helps clients to develop cloud computing strategies, including detailed cost and benefit analyses, enterprise-wide cloud adaptation roadmaps, and migration and migration plans. We also help you to formulate an IT strategy aligned to business objectives, optimize costs and cloud services, and manage data, etc. Our expertise guarantees you a comprehensive IT strategy, robust design, and successful implementation.</p>
					</Col>
					<Col md={6}>
						<Image src={aboutImg} className="aboutimg img-fluid"/>
					</Col>
				</Row>

				<Row className="align-items-center">
					<Col md={6} md={{ order: 'last' }}>
						<h4 className="h3 mb-4"> System Integrator For ICT &amp; Surveillance Solutions </h4>
						<p>AJIS is a system integrator for ICT and Surveillance solutions and addresses the wide range of integration needs within the ICT industry. We install and connect various IT systems, software, and hardware into one comprehensive, cohesive, and seamlessly functioning body. Our offerings include design, solution integration, systems development, etc.</p>
					</Col>
					<Col md={6}>
						<Image src={aboutImg} className="aboutimg img-fluid"/>
					</Col>
				</Row>


				<Row className="align-items-center mb-5">
					<Col md={6}>
						<h4 className="h3 mb-4">Managed Services</h4>
						<p>Our Managed Services include Application Managed Service (AMS), Infrastructure Managed Services (IMS), and cloud advisory.  We host and maintain applications with our AMS, deliver technical and end-user support and complement it with the necessary technology infrastructure. With our IMS, we also provide, enable and support cloud-based infrastructures, such as data centers, security, and integration.</p>
					</Col>
					<Col md={6}>
						<Image src={aboutImg} className="aboutimg img-fluid"/>
					</Col>
				</Row>

				<Row className="align-items-center">
					<Col md={6} md={{ order: 'last' }}>
						<h4 className="h3 mb-4">Video Software As A Service (Vsaas)</h4>
						<p>AJIS offers Video software as a service (VSaaS) and cloud services. Cloud services range from cloud migration, optimization, and discovery to disaster recovery, architecture validation, data analytics, and application development. We personalize these in our data center but still exploit the flexibility and modularity advantages that new technologies offer in virtualizing and managing data. We help you transition from an on-premise to a cloud-first strategy without compromising performance and reliability.</p>
					</Col>
					<Col md={6}>
						<Image src={aboutImg} className="aboutimg img-fluid"/>
					</Col>
				</Row>


				<Row className="align-items-center mb-5">
					<Col md={6}>
						<h4 className="h3 mb-4"> Software Development - AI, IOT, VR</h4>
						<p>AJIS provides a wide range of software development solutions to <strong>real-life challenges</strong>. These include custom Information Technology (IT) web applications, Artificial Intelligence (AI) software and Virtual Reality (VR), cloud computing, and cybersecurity software solutions. We adapt our technology solutions seamlessly to client business needs and project requirements. </p>
					</Col>
					<Col md={6}>
						<Image src={aboutImg} className="aboutimg img-fluid"/>
					</Col>
				</Row>

				<Row className="align-items-center">
					<Col md={6} md={{ order: 'last' }}>
						<h4 className="h3 mb-4"> Career tech</h4>
						<p>A &amp; J Intelli System (P) Ltd also provides Educational Institutions with a broad range of products and services, including ready-to-run programs and courses.</p>
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



