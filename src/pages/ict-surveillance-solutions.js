import * as React from "react"

import Layout from "../layout/base"
import { Container, Row, Col, Image } from "react-bootstrap"
import introImg from "../images/surveillance-lg.svg"
import techVideo from "../videos/vehicle-detection.mp4"
import techVideoWebm from "../videos/vehicle-detection.webm"
import techVideoImg from "../images/vehical-identification.png"


const AboutPage = (props) => {

  return (
		<Layout>
			<section className="banner-wrapper-small bg-gradient-primary angled-inverse section">
				<Container>
					<Row className="pt-5 mt-5 pb-5">
						<Col md={6}>
							<div className="pt-lg-5 mt-lg-5 pb-5 mb-2">
								<h1 className=" display-2">System integrator for ICT &amp; Surveillance work</h1>
								<p className="lead">AJIS is a system integrator for ICT and Surveillance solutions and addresses the wide range of integration needs within the ICT industry.</p>
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
					<Row className="justify-content-center">
						<Col lg={8}>
							<div className="video-wrapper">
								<video controls preload="yes" autoplay loop playsinline poster={techVideoImg} >
									<source src={techVideoWebm} type="video/webm" />
									<source src={techVideo} type="video/mp4" />
									<p>Your browser doesn't support HTML video.</p>
								</video>
							</div>
						</Col>
					</Row>
					<Row >
						<Col>
							<p>We are the most preferred and trusted ICT solution providers since we provide a wide range of quality services when it comes to ICT and surveillance solutions. We value efficiency when handling computer supply services and PC requirements for our customers in all business areas. You will definitely get the best solutions and services by choosing AJIS as your technology solution provider.</p>
							<p>It is integral to have a network infrastructure that is responsive for your organization when it comes to communicating with employees and clients and sharing information. AJIS is considered the leading distributor of quality networking products. We have a team of engineers who have specialized in specific ICT areas such as Siemens DIL, CCNA, CNE, and Microsoft.</p>
							<p>We are, therefore, trained and experienced to put in place and support installations such as Ethernet data cabling, WIFI, and fiber optics. We also help in the installation, support, and planning of Windows NT, Novell Netware, CP/IP, Windows for workgroups, and IPX/SPX Connectivity for both WANs & LANs.</p>
							<p>We are also at your service in case you need us to promote your domain controllers and configure your servers such as domain name server, dynamic host configuration protocol, Exchange Server, remote access server, windows internet name server, Active Directory, and File server. We can also configure or install software on your computers by making use of the Group Policy Monitoring of the traffic which is entering and leaving your perimeter network.</p>
							<p>If you need to prepare for a disaster recovery process or a backup and restoration process so that your servers can minimize downtime, then we are your to-go ICT solution providers. You may be experiencing challenges in preparing the backup and restoration process, renaming your routers and switch, or configuring the expected proper routing protocol. All you need to do is inform us and all these issues will be sorted out. We are also able to configure DNS and DHCP on the router.</p>
							<p>At AJIS, we also provide high-quality services and solutions for your security and surveillance. We are capable of supporting multiple functions for several organizations with different kinds of needs. Our team of experts is experienced in handling quite a number of critical areas when providing services. These experiences make us unique and a step further than our competitors. You can also be a part of this special experience by simply requesting our services.</p>
							<p>Some of the security solution services that we offer include access control systems, clocking systems, smart lock, time attendance systems, video intercom, and video surveillance (CCTV). We are always on the frontline to ensure that all our clients receive high-definition and high-end comprehensive and digital megapixel CCTV solutions. We can, therefore, supply you with thermal cameras, HD IP cameras, intelligent video management systems, spy cameras, Automatic Number Plate Recognition Cameras, and IR bullet cameras.</p>
							<p>Therefore, AJIS is your solution provider for ICT and Surveillance solutions and addresses the wide range of integration needs within the ICT industry. We install and connect various IT systems, surveillance software, and hardware into one comprehensive, cohesive, and seamlessly functioning body. Our offerings include design, solution integration, systems development, installation, commissioning & Maintenance.</p>
						</Col>
					</Row>
				</Container>
			</section>
		</Layout>
  )
}

export default AboutPage

