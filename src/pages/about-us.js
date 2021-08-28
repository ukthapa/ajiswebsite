import * as React from "react"

import Layout from "../layout/base"
import { Container, Row, Col } from "react-bootstrap"

const AboutPage = (props) => {

  return (
		<Layout>
			<section className="banner-wrapper-small bg-gradient-primary angled-inverse section">
				<Container>
					<Row>
						<Col>
							<div className="pt-5 mt-5 pb-5 mb-5">
								<h1 className=" display-2">About Us</h1>
							</div>
						</Col>
					</Row>
				</Container>
			</section>
			<section className="wrapper mb-5 mt-5">
				<Container>
					<Row>
						<Col>
								<p className="lead">A &amp; J Intelli System (P) Ltd (AJIS) is a technology solution provider that started in 2015. This was around the time when new technologies were emerging, as were new, complex, and dynamic
	security threats. Customer demands were also changing, and there was a need for dedicated IT support. Indeed, the mismatch between technology, organizational needs, and customer
	experience threatened the industry then. AJIS aimed to address these evolving needs, offer managed services and generally innovate solutions to real-life challenges.</p>

							<p>AJIS set out to navigate the new challenges with the constant innovation of responsive products, software development and dedicated IT support. It subsequently grew into a technology enabler
	and task manager for hundreds of organizations and companies worldwide. The company’s product-based model comprises two types.</p>
							<ul>
								<li>The first is <strong>Artificial Intelligence (AI)–based modeling</strong>, including AI-based video analytics. This additional layer of software supplements the
	company’s Surveillance Solutions, including automated alerts for home surveillance, accident detection, and safety systems.</li>
								<li>The second is <strong>Artificial Intelligence (AI)–Internet of Things (IoT)</strong>, which comprises AI-based sensors for GPS tracking.</li>
							</ul>
							<p>Today and based on its product line, AJIS serves different domains, <em>including citizen safety, solid-waste management, and traffic solutions,</em> etc. AJIS, therefore, deploys solutions across
	multiple smart cities worldwide. It has built a global brand as the fastest-growing industry provider of technology solutions to real-life challenges. It is a system integrator for ICT and
	Surveillance Solutions and provides a host of IT &amp; Cloud Advisory Services. AJIS also provides <strong>Application and Infrastructure Managed Support Services, Cloud services &amp; VSaaS (Video
	software as a service), and Software Development for AI, IoT and VR, and Career tech.</strong></p>
							<h2 className="h3 text-primary">Unique global brand as an industry leader</h2>
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

