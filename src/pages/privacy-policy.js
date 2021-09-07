import * as React from "react"

import Layout from "../layout/base"
import { Container, Row, Col, Image } from "react-bootstrap"
// import { CheckCircleFill } from 'react-bootstrap-icons';
// import aboutImg from "../images/about.jpg"
import introImg from "../images/concept8.png"

const PrivacyPolicy = (props) => {

  return (
		<Layout>
			<section className="banner-wrapper-small bg-gradient-primary angled-inverse section">
				<Container>
					<Row className="pt-5 mt-5 pb-5">
						<Col md={6}>
							<div className="pt-5 mt-5 pb-5 mb-5">
								<h1 className=" display-2">Privacy Policy</h1>
								<p className="lead">A &amp; J Intelli System (P) Ltd also provides Educational Institutions with a broad range of products and services, including ready-to-run programs and courses.</p>
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
					</Row>
				</Container>
			</section>
		</Layout>
  )
}

export default PrivacyPolicy

