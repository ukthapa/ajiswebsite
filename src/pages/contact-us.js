import * as React from "react"
import Layout from "../layout/base"
import { Container, Row, Col, Image } from "react-bootstrap"
import { GeoAlt, Telephone, Envelope} from 'react-bootstrap-icons';
import ContactForm from "../components/contact-form"
import introImg from "../images/contact-us.svg"

const ContactPage = (props) => {

  return (
		<Layout>
			<section className="banner-wrapper-small bg-gradient-primary angled-inverse section">
				<Container>
					<Row className="pt-md-5 mt-md-5 pb-3 pb-md-5">
						<Col  md={5}>
							<div className="pt-5 mt-2 mt-md-5 pb-5 mb-5">
								<h1 className="mb-4 display-2"  >Contact Us</h1>
								<p className="lead" >Have any questions? Reach out to us from our contact form and we will get back to you shortly.</p>
							</div>
						</Col>
						<Col md={6}>
							<Image src={introImg} className="img-fluid"/>
						</Col>
					</Row>
				</Container>
			</section>
			<section className="wrapper mb-5 mt-0">
				<Container>
					<Row className="justify-content-md-center align-items-md-center p-0">
						<Col lg={10} data-sal="slide-up" data-sal-delay="10" data-sal-easing="ease">
							<Row className="justify-content-md-between align-items-md-center shadow rounded-2 py-3 px-2">
								<Col md={6}>
									<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d4898.274532464142!2d77.06746408535007!3d28.452482087714486!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x6f01fa2c20b050ec!2sIndo%20Asia%20Tours%20-%20A%20leading%20Destination%20Management%20Company%20of%20India!5e0!3m2!1sen!2sin!4v1650304517496!5m2!1sen!2sin" width="100%" height="450"  loading="lazy"></iframe>
								</Col>
								<Col md={5}>
									<div className="d-flex mb-4">
										<span className="d-block icon-lg mr-4"><GeoAlt/></span>
										<div>
											<h4>Address</h4>
											<address>
												Indo Asia House, Sector-44<br/>
												Gurgaon, HR 122001, India
											</address>
										</div>
									</div>

									<div className="d-flex mb-4">
										<span className="d-block icon-lg mr-4"><Telephone/></span>
										<div>
											<h4>Phone</h4>
											<a href="tel:9101244001872">+91-01-244001872</a>
										</div>
									</div>

									<div className="d-flex">
										<span className="d-block icon-lg mr-4"><Envelope/></span>
										<div>
											<h4>Email</h4>
											<a href="mailto:info.ajis@gmail.com">info@ajissolutions.com</a>
										</div>
									</div>
								</Col>
							</Row>
						</Col>
					</Row>
				</Container>
			</section>

			<section>
				<Container>
					<Row  className="justify-content-center pt-4">
						<Col md={8}>
							<h2 className="text-center" data-sal="slide-up" data-sal-delay="10" data-sal-easing="ease">Drop Us a Line</h2>
							<p className="text-center" data-sal="slide-up" data-sal-delay="12" data-sal-easing="ease">Reach out to us from our contact form and we will get back to you shortly.</p>
							<div className="pt-4 pb-5 mb-4" data-sal="slide-up" data-sal-delay="15" data-sal-easing="ease">
								<ContactForm />
							</div>
						</Col>
					</Row>
				</Container>
			</section>
		</Layout>
  )
}

export default ContactPage
