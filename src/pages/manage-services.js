import * as React from "react"

import Layout from "../layout/base"
import { Container, Row, Col, Image } from "react-bootstrap"
import { CheckCircleFill } from 'react-bootstrap-icons';
import aboutImg from "../images/about.jpg"
import introImg from "../images/managed-services-lg.svg"

const AboutPage = (props) => {

  return (
		<Layout>
			<section className="banner-wrapper-small bg-gradient-primary angled-inverse section">
				<Container>
					<Row className="pt-5 mt-5 pb-5">
						<Col md={6}>
							<div className="pt-lg-5 mt-lg-2 mt-md-5 pb-5 mb-5">
								<h1 className=" display-2">Manage Services</h1>
								<p className="lead">Our Managed Services include Application Managed Service (AMS), Infrastructure Managed Services (IMS), and cloud advisory.</p>
							</div>
						</Col>
						<Col md={6}>
							<Image src={introImg} className="aboutimg img-fluid rounded"/>
						</Col>
					</Row>
				</Container>
			</section>
			<section className="wrapper mb-5 mt-0">
				<Container>
				<Row className="mb-5 justify-content-md-between align-items-center">
						<Col md={6}  data-sal="slide-down" data-sal-delay="10" data-sal-easing="ease">
							<p className="lead">The Managed Services offered at AJIS include</p>
							<ul className="icon-list icon-list-lg bullet-soft-blue">
								<li><span><CheckCircleFill/></span><span><strong>Infrastructure Managed Services (IMS)</strong></span></li>
								<li><span><CheckCircleFill/></span><span><strong>Application Managed Service (AMS)</strong></span></li>
								<li><span><CheckCircleFill/></span><span><strong>Cloud Advisory</strong></span></li>
							</ul>
							<p>Currently, the information technology landscape has become more complex and the cost of maintaining it continues to rise. Our specialists are always ready to assist companies to overcome such challenges to enable them to improve the performance of applications and boost the performance of their businesses.</p>
						</Col>
						<Col md={5} md={{ order: 'first' }}>
							<Image src={aboutImg} className="aboutimg img-fluid rounded" data-sal="fade-in" data-sal-delay="10" data-sal-easing="ease"/>
						</Col>
					</Row>
					<Row>
						<Col>
							<p>We are able to host and maintain applications with our AMS, deliver technical and end-user support and complement it with the necessary technology infrastructure. We can also provide you with a flexible structure to enable your business or organization to fine-tune our Application Management Services to your business objectives and IT.</p>
							<p>At AJIS, we provide a full range of services that are known to be industry-leading. Such services include information management, systems integration, and enterprise resource planning. We are always ready to support you when you need to choose an optimum managed service model or transition to a target state successfully.</p>
							<p>We have the responsibility of maintaining your applications and technology infrastructure such as portals, middleware, Enterprise Resource Planning software, and legacy systems. Furthermore, we have the ability to host and maintain applications, provide important technology infrastructure, and deliver end-user and technical support. You have a golden opportunity to benefit from our vast knowledge, optimize operations, and gain cost reductions.</p>
							<p>You can only gain value from a resource planning system if you have an application management strategy that is in place and has been tried and tested with supported tools and methodologies. AJIS has identified five important dimensions that can be used to develop and establish a world-class and state-of-the-art application support framework. The identified dimensions are governance, organization, strategy, technology, and process. We have been able to develop a methodology that can enable an application support framework by applying these dimensions.</p>
							<p>AJIS has the ability to administer and manage data, information, and technology in a proactive way through the application of Infrastructure Managed Services. We are in a position to provide you with clear boundaries and indications on how to manage your business infrastructure. With our IMS, we also provide, enable and support cloud-based infrastructures, such as data centers, security, and integration.</p>
							<p>Our main objective is to help you minimize downtime and maximize productivity in your business. We handle issues related to network and connectivity and asset lifecycle management. We are also experts in monitoring and maintaining mobile devices. You can consider us your heroes when it comes to managing and controlling the technology that supports and determines the level of success of your business.</p>
							<p>When it comes to cloud advisory, it is important for you to have a clear vision and a measurable goal in your cloud transformation program. Our team of experts is always willing and able to help you come up with a unique plan and a compelling vision for your company’s cloud transformation program. With our cloud advisory services, we are always in a position to help you define strategy, answer key questions, provide impartial advice, and manage change. We are, therefore, your guide when it comes to handling critical organizational and technical issues contributing to the successful cloud modernization in your business or organization.</p>
						</Col>
					</Row>
				</Container>
			</section>
		</Layout>
  )
}

export default AboutPage

