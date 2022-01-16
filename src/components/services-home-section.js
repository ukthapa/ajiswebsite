import React from "react"
import Image from  "../components/image"
// import aboutImg from "../images/about-illustration.svg"
import { Container, Row, Col } from "react-bootstrap"
import { Link } from "gatsby"


const ServicesSection = () => {
	return (
		<div className="light-blue section">
			<Container>
				<Row className="align-items-center mt-5 mb-5">
					<Col className="text-center">
						<h2 className="h5 text-uppercase text-blue fw-normal" data-sal="slide-down" data-sal-delay="10" data-sal-easing="ease">What We Do?</h2>
					    <h3 className="h1" data-sal="slide-down" data-sal-delay="10" data-sal-easing="ease">The service we offer is <span className="d-lg-block">specifically designed to meet your needs.</span></h3>
					</Col>
				</Row>
				<Row className="row-cols-1 row-cols-md-2 row-cols-xl-3 g-4">
					<Col>
						<Link to="/it-cloud-services"   className="card h-100 shadow-sm p-0" >
							<div className="card-header p-0 mb-0">
								<Image src="cloud-services-mb.svg" alt="" className="img-fluid pb-4" />
							</div>
							<div className="card-body text-center p-4 pb-0">
								<h4 className="h5 mb-4 ">IT &amp; Cloud <span className="d-md-block">Advisory Services</span></h4>
								<p>AJIS helps clients to develop cloud computing strategies, including detailed cost and benefit analyses, enterprise-wide cloud adaptation roadmaps, and migration and migration plans. We also help you to formulate an IT strategy aligned to business objectives, optimize costs and cloud services, and manage data, etc. Our expertise guarantees you a comprehensive IT strategy, robust design, and successful implementation.</p>
							</div>
						</Link>
					</Col>
					<Col>
						<Link  to="/ict-surveillance-solutions" className="card h-100 shadow-sm p-0" >
							<div className="card-header p-0 mb-0">
								<Image src="surveillance-mobile.svg" alt="" className="img-fluid pb-4" />
							</div>
							<div className="card-body text-center p-4 pb-0">
							<h4 className="h5 mb-4 "> ICT &amp; <span className="d-md-block">Surveillance Solutions</span> </h4>
								<p>AJIS is a system integrator for ICT and Surveillance solutions and addresses the wide range of integration needs within the ICT industry. We install and connect various IT systems, software, and hardware into one comprehensive, cohesive, and seamlessly functioning body. Our offerings include design, solution integration, systems development, etc.</p>
							</div>
						</Link>
					</Col>

					<Col>
						<Link to="/manage-services" className="card h-100 shadow-sm p-0" >
							<div className="card-header p-0 mb-0">
								<Image src="managed-services.svg" alt="" className="img-fluid pb-4" />
							</div>
							<div className="card-body text-center p-4 pb-0"><h4 className="h5 mb-4">Managed Services</h4>
								<p>Our Managed Services include Application Managed Service (AMS), Infrastructure Managed Services (IMS), and cloud advisory.  We host and maintain applications with our AMS, deliver technical and end-user support and complement it with the necessary technology infrastructure. With our IMS, we also provide, enable and support cloud-based infrastructures, such as data centers, security, and integration.</p>
							</div>
						</Link>
					</Col>
					<Col>
						<Link to="/cloud-service-vsaas" className="card h-100 shadow-sm p-0" >
							<div className="card-header p-0 mb-0">
								<Image src="vsaas.svg" alt="" className="img-fluid pb-4" />
							</div>
							<div className="card-body text-center p-4 pb-0">
								<h4 className="h5 mb-4">Cloud Services &amp; VSaaS</h4>
								<p>AJIS offers Video software as a service (VSaaS) and cloud services. Cloud services range from cloud migration, optimization, and discovery to disaster recovery, architecture validation, data analytics, and application development.</p>
							</div>
						</Link>
					</Col>
					<Col>
						<Link to="/software-development" className="card h-100 shadow-sm p-0" >
							<div className="card-header p-0 mb-0">
								<Image src="ai-vr.svg" alt="" className="img-fluid pb-4" />
							</div>
							<div className="card-body text-center p-4 pb-0">
								<h4 className="h5 mb-4"> Software Development - <span className="d-md-block">AI, IOT, VR</span></h4>
								<p>AJIS provides a wide range of software development solutions to <strong>real-life challenges</strong>. These include custom Information Technology (IT) web applications, Artificial Intelligence (AI) software and Virtual Reality (VR), cloud computing, and cybersecurity software solutions. We adapt our technology solutions seamlessly to client business needs and project requirements. </p>
							</div>
						</Link>
					</Col>

					<Col>
						<Link to="/career-tech"   className="card h-100 shadow-sm p-0" >
							<div className="card-header p-0 mb-0">
								<Image src="career-technology.svg" alt="" className="img-fluid pb-4" />
							</div>
							<div className="card-body text-center p-4 pb-0">
								<h4 className="h5 mb-4">Career tech</h4>
								<p>A &amp; J Intelli System (P) Ltd also provides Educational Institutions with a broad range of products and services, including ready-to-run programs and courses.</p>
							</div>
						</Link>
					</Col>
				</Row>
			</Container>
		</div>
	)
}

export default ServicesSection



