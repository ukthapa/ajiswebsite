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
								<h1 className=" display-2">Cloud Services &amp; VSaaS</h1>
								<p className="lead">AJIS offers Video software as a service (VSaaS) and cloud services. Cloud services range from cloud migration, optimization, and discovery to disaster recovery, architecture validation, data analytics, and application development.</p>
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
					<Row>
						<Col>
							<p>The main function of a video surveillance system is to control the multiple sources of a facility’s video subsystems in order to manage, collect, and present a video in a concise and clear manner. At AJIS, we offer you a reliable, secure, and innovative solution by offering cloud services and Video Software as a Service (VSaaS). Our main focus is to help you implement a video surveillance solution to ensure inland security.</p>
							<p>Our VSaaS system is an end-to-end cloud-based digital solution for video surveillance and comes with a suite of powerful features, including video recording, remote viewing, storage, alerts, and cyber security. By using the VSaaS system, you are guaranteed an instant solution with the end-to-end implementation of video surveillance. We also provide you with the option of retaining information in centralized cloud storage.</p>
							<p>We majorly focus on clients and companies who willingly comply and work together with the local, MCC, and federal authorities to improve inland security. At AJIS, we provide a unique private, public, and hybrid cloud environment that gives you high functionality surveillance together with a real-time management capability at a low cost. Our hybrid cloud environment also provides you with built-in analytics, deployments, and cloud-based economic models that have been verified by multinational telecommunications companies around the globe.</p>
							<p>Our Video Surveillance as a Service at AJIS also takes the video monitoring to the cloud. The VSaaS comprises onsite devices used for communicating with cameras and the cloud and also caters to the implementation of Artificial Intelligence and deep learning. The managed or hosted video services, which are the same as the video from your IP cameras, are then transmitted to a secure cloud infrastructure at AJIS cloud services. We help you transmit the video by streaming protocols via communication networks.</p>
							<p>Our main objective is to provide you with unique services so that in the long run, you will not need to store the recordings of all the videos from the cameras in your video servers. All your recordings are stored in the AJIS cloud platform. However, you can easily view these recordings by using a tablet or smartphone app or by using a web browser. With the provided solution, we have taken into consideration all the needed MCC specifications and standards and made them available on tablets, android phones, PCs, and smart IOS.</p>
							<p>The VSaaS solution applies to banks and financial institutions, civil defense, educational institutions, airports, recreational and public areas, commercial & residential buildings, retail stores & warehouses, clinics & ambulances, malls, and hotels.</p>
							<p>Our VSaaS solution mainly comprises of centralized storage system on the cloud, video analytics, 24x7 event monitoring services, a continuous, motion, schedule & event-based recording, video retention with a minimum period of around 180 days, local video archiving & recording available on the cloud, and role-based operator privileges.</p>
							<p>Some of the features included in our Video Surveillance as a Service are recording, remote viewing, storage, cyber security, and management alerts. The management and video processing are usually performed using the cloud off-site. Our video analytics will be beneficial to your organization by optimizing customer service with valuable business intelligence coming from the available existing video data.</p>
						</Col>
					</Row>
				</Container>
			</section>
		</Layout>
  )
}

export default AboutPage

