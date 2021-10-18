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
									<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3508.098834854936!2d77.04166351507843!3d28.44643688249161!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1842a5696379%3A0xc997ea64a2acb50a!2s56%2C%20Institutional%20Area%2C%20Prem%20Puri%2C%20Sector%2032%2C%20Gurugram%2C%20Haryana%20122018!5e0!3m2!1sen!2sin!4v1630233345456!5m2!1sen!2sin" width="100%" height="450"  allowfullscreen="" loading="lazy"></iframe>
								</Col>
								<Col md={5}>
									<div className="d-flex mb-4">
										<span className="d-block icon-lg mr-4"><GeoAlt/></span>
										<div>
											<h4>Address</h4>
											<address>
												Cabin No. 301,302 &amp; 303, 3rd Floor, <br/>
												Indo Asia House, 56,<br/>
												Institutional Area, Sector-44<br/>
												HR 122002, India
											</address>
										</div>
									</div>

									<div className="d-flex mb-4">
										<span className="d-block icon-lg mr-4"><Telephone/></span>
										<div>
											<h4>Phone</h4>
											<a href="tel:919999999999">+91 99999 99999</a><br/>
											<a href="tel:919999999999">+91 99999 99999</a>
										</div>
									</div>

									<div className="d-flex">
										<span className="d-block icon-lg mr-4"><Envelope/></span>
										<div>
											<h4>Email</h4>
											<a href="mailto:info.ajis@gmail.com">info.ajis@gmail.com</a>
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
