import * as React from "react"

import Layout from "../layout/base"
import { Container, Row, Col, Image } from "react-bootstrap"
import { CheckCircleFill } from 'react-bootstrap-icons';
import introImg from "../images/software-development.svg"
import aboutImg from "../images/ai-vr-illustration.svg"

const AboutPage = (props) => {

  return (
		<Layout>
			<section className="banner-wrapper-small bg-gradient-primary angled-inverse section">
				<Container>
					<Row className="pt-5 mt-5 pb-5">
						<Col md={6}>
							<div className="pt-lg-5 mt-lg-2 mt-md-5 pb-5 mb-5">
								<h1 className=" display-2">Software development - IT, AI &amp; VR</h1>
								<p className="lead">Company amied to address the evolving needs, offer managed services and generally innovate solutions to real-life challenges</p>
							</div>
						</Col>
						<Col md={6} >
							<Image src={introImg} className="img-fluid"/>
						</Col>
					</Row>
				</Container>
			</section>
			<section className="wrapper mb-5 mt-0">
				<Container>
					<Row className="mb-5 justify-content-md-between align-items-center">
						<Col md={{ span: 5, offset: 1, order: 1 }}   data-sal="slide-down" data-sal-delay="10" data-sal-easing="ease">
							<p className="lead">AJIS provides a wide range of software development intended to provide real solutions to real-life challenges. The three cutting-edge technological developments that we have incorporated are</p>
							<ul className="icon-list icon-list-lg bullet-soft-blue">
								<li><span><CheckCircleFill/></span><span><strong>Internet of Things</strong></span></li>
								<li><span><CheckCircleFill/></span><span><strong>Artificial Intelligence software</strong></span></li>
								<li><span><CheckCircleFill/></span><span><strong>Virtual Reality</strong></span></li>
							</ul>
							<p>We also provide custom Information web applications, cloud computing, and cybersecurity software solutions. We manage to adapt our technology solutions seamlessly to the project requirements and business needs of our clients.</p>
						</Col>
						<Col md={6} >
							<Image src={aboutImg} className="aboutimg img-fluid rounded" data-sal="fade-in" data-sal-delay="10" data-sal-easing="ease"/>
						</Col>
					</Row>
					<Row >
						<Col>
							<p>AJIS is the world leader in the provision of IoT-enabled services. We can confidently state that AJIS is at the forefront when it comes to data infrastructure, service delivery innovation, and platform for both publically and enterprise-managed solutions. The convergence of networked computing, which is mainly large-scale data management that has real-time machine intelligence drives the integration of both the virtual and physical worlds.</p>
							<p>We have partnered with leading service providers, governments, carriers, diversified enterprises, and product OEMs to help fully leverage the internet of things, smart connected devices, and machines. Our main strategy is to give a reflection on the importance of the three critical elements. These elements are the delivery of end-to-end managed solutions, large-scale ecosystem collaboration, and a new generation of intelligent real-time machine platforms. These critical elements function together to leverage intelligent sensors, assets, and equipment.</p>
							<p>At AJIS, we can provide you with intelligence at both the software and hardware levels. Our capabilities circumscribe the transformative and comprehensive nature of the IoT, smart systems, and machine-to-machine. We are not narrowly focused and isolated like our competitors. We can empower a control and connection across the physical and digital barriers. We are also experts in harnessing the potential of IoT via end-to-end advanced platforms and services.</p>
							<p>AJIS is also in a position to offer you artificial intelligence outsourcing. We can help you sample several public cloud platforms to be able to test the different algorithms of machine learning. You don’t need a large initial investment and the risks involved are relatively low.</p>
							<p>We offer quite a number of styles of AI and machine learning. We understand that it is important for you, as an organization, to do a proper evaluation of the features and pricing to determine your AI needs and what works for you. We, therefore, provide specialized hardware that is needed to perform some AI tasks such as GPU-based processing for rigorous loads of work.</p>
							<p>At AJIS, we provide you with a platform where you can try out services and algorithms to enable your organization or business to find out what works best before committing to anything. We are always there to help you make the best decision.</p>
							<p>AJIS also provides software development for simulated experiences through Virtual Reality. We have developed a standard virtual reality system that uses both multi-projected environments and virtual reality headsets to produce realistic sounds, images, and any other sensation that can simulate the physical presence of a user in the virtual environment.</p>
							<p>We intend to help you apply virtual reality in businesses through virtual meetings, education through military and medical training, and entertainment through video games. A person who uses virtual reality can look and move around an artificial world, and interact with the virtual items and features. </p>
						</Col>
					</Row>
				</Container>
			</section>
		</Layout>
  )
}

export default AboutPage

