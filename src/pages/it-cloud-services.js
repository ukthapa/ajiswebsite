import * as React from "react"

import Layout from "../layout/base"
import { Container, Row, Col, Image } from "react-bootstrap"
import introImg from "../images/cloud-services-lg.svg"

const AboutPage = (props) => {

  return (
		<Layout>
			<section className="banner-wrapper-small bg-gradient-primary angled-inverse section">
				<Container>
					<Row className="pt-5 mt-5 pb-5">
						<Col md={6}>
							<div className="pt-lg-5 mt-lg-5 pb-5 mb-2">
								<h1 className=" display-2">IT &amp; Cloud Advisory Services</h1>
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
					<Row >
						<Col>
							<p>At AJIS, we understand how important it is for you and your enterprise to make the most use of cloud services and technologies. One of our main objectives is to help you, as an entrepreneur or investor, identify the most suitable opportunities you can leverage the IT and cloud computing services. We always use a modern cloud adaption route or the as-is migration to the cloud in order to help you realize sustainable benefits in your business.</p>
							<p>Our priority is to help you develop cloud computing strategies. As an entrepreneur, you have to constantly make critical decisions concerning your business operations, financial obligations, security, and technological applications. You need a well-thought-out strategy when making such decisions and that’s where we come in. AJIS will help you develop a uniform cloud adoption strategy that will assess the overall portfolio of your enterprise.</p>
							<p>Furthermore, the cloud adoption strategy will help you formulate a business case and come up with a roadmap for targeting platform capabilities. You will be able to align fundamental stakeholders on the strategic cloud priorities. Therefore, we are always ready to assist you to develop cloud computing strategies by incorporating detailed cost and benefit analyses, migration plans, and enterprise-wide cloud adaptation roadmaps.</p>
							<p>Currently, organizations and business enterprises are looking to increase their innovation speed by leveraging the cloud. At AJIS, we are always ready to help out with your digital transformation by aligning it with a cloud strategy, which is a fundamental component of this transformation. We also help you to formulate an IT strategy aligned to business objectives, optimize costs and cloud services, and manage data.</p>
							<p>Our team of experts will also help you in cloud solution design by helping you think about new capabilities and new business models which can be enabled by cloud solutions. We are in a position to help you complement your business strategies with the current digital technologies such as IoT. Our expertise guarantees you a comprehensive IT strategy, robust design, and successful implementation.</p>
							<p>We are also experienced when it comes to helping you design an operating model. With the operating model, you can smoothly move to the cloud whenever you need to drive change. We are in a position to help you build up a cloud COE, have a definition of a roadmap to maturate the operating model and the cloud COE. It is important to address the three broad and fundamental pillars across the cloud technology office, cloud platform engineering, and the cloud business office. We do not view cloud security as something that is just on the outside. We consider cloud security as a very inherent element.</p>
							<p>We all know for a fact that controlling expenditure has now overtaken security as one of the biggest challenges for businesses and corporations. Therefore, there is a need for enterprises to have a cloud finance and management framework. The framework will embrace a cloud paradigm and also bring perspectives together from business, finance, and technology. At AJIS, we will help you develop a cloud finance management competency that will be able to turn the cloud into a value driver from the cost center. We are also able to create value maps that can easily identify the major areas of focus.</p>
						</Col>
					</Row>
				</Container>
			</section>
		</Layout>
  )
}

export default AboutPage

