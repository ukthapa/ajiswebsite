import * as React from "react"

import Layout from "../layout/base"
import { Container, Row, Col, Image } from "react-bootstrap"
import { CheckCircleFill } from 'react-bootstrap-icons';
import aboutImg from "../images/about.jpg"
import introImg from "../images/concept6.png"

const AboutPage = (props) => {

  return (
		<Layout>
			<section className="banner-wrapper-small bg-gradient-primary angled-inverse section">
				<Container>
					<Row className="pt-5 mt-5 pb-5">
						<Col md={6}>
							<div className="pt-5 mt-5 pb-5 mb-2">
								<h1 className=" display-2">Consultancy for IT &amp; IBMS</h1>
								<p className="lead">AJIS helps clients to develop cloud computing strategies, including detailed cost and benefit analyses, enterprise-wide cloud adaptation roadmaps, and migration and migration plans.</p>
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
						<Col md={6}  data-sal="slide-down" data-sal-delay="100" data-sal-easing="ease">
							<h2>Who Are We?</h2>
							<p className="lead">A &amp; J Intelli System (P) Ltd (AJIS) is a technology solution provider that started in 2015. This was around the time when new technologies were emerging, as were new, complex, and dynamic
	security threats. Customer demands were also changing, and there was a need for dedicated IT support. Indeed, the mismatch between technology, organizational needs, and customer
	experience threatened the industry then. AJIS aimed to address these evolving needs, offer managed services and generally innovate solutions to real-life challenges.</p>
						</Col>
						<Col md={5}>
							<Image src={aboutImg} className="aboutimg img-fluid rounded" data-sal="fade-in" data-sal-delay="100" data-sal-easing="ease"/>
						</Col>
					</Row>
					<Row data-sal="slide-up" data-sal-delay="50" data-sal-easing="ease">
						<Col>
							<p>AJIS set out to navigate the new challenges with the constant innovation of responsive products, software development and dedicated IT support. It subsequently grew into a technology enabler
	and task manager for hundreds of organizations and companies worldwide. The company’s product-based model comprises two types.</p>
							<ul className="icon-list icon-list-lg bullet-soft-blue">
								<li><span><CheckCircleFill/></span><span>The first is <strong>Artificial Intelligence (AI)–based modeling</strong>, including AI-based video analytics. This additional layer of software supplements the
	company’s Surveillance Solutions, including automated alerts for home surveillance, accident detection, and safety systems.</span></li>
								<li><span><CheckCircleFill/></span><span>The second is <strong>Artificial Intelligence (AI)–Internet of Things (IoT)</strong>, which comprises AI-based sensors for GPS tracking.</span></li>
							</ul>
							<p>Today and based on its product line, AJIS serves different domains, <em>including citizen safety, solid-waste management, and traffic solutions,</em> etc. AJIS, therefore, deploys solutions across
	multiple smart cities worldwide. It has built a global brand as the fastest-growing industry provider of technology solutions to real-life challenges. It is a system integrator for ICT and
	Surveillance Solutions and provides a host of IT &amp; Cloud Advisory Services. AJIS also provides <strong>Application and Infrastructure Managed Support Services, Cloud services &amp; VSaaS (Video
	software as a service), and Software Development for AI, IoT and VR, and Career tech.</strong></p>
							<blockquote className="blockquote text-muted">Unique global brand as an industry leader</blockquote>
							<p>The customer presence of AJIS has since grown and cuts across both the public and private sectors. It includes all mainstream industries, such as Manufacturing, Education, Technology,
	Healthcare, Defense, Oil and Gas, and Railways. Besides these, AJIS is constantly looking for opportunities to grow and expand its solutions to other industries. Indeed, it has built
	partnerships with complementary service providers. For example, AJIS is an exclusive partner of Mirasys, a Finland-based company with which it is working for various Made-In-India projects.</p>

							<p>A motivated and professional team of experienced and service-oriented employees runs AJIS, driving its growth as a service-oriented organization. This guarantees AJIS's capacity to continue
	pioneering technology and managed IT services and solutions to real-life challenges for businesses, organizations, and communities worldwide.</p>
						</Col>
					</Row>
				</Container>
			</section>
		</Layout>
  )
}

export default AboutPage

