import React from "react"
import aboutImg from "../images/client-trust.svg"
import { Container, Row, Col, Image  } from "react-bootstrap"
// import Customerdata from "../data/customer-logo.json"
// import Customers from "../components/customer-logos"

const ClinetsSection = () => {
	return (
		<section className="section light-blue">
			<Container>
				<Row className="justify-content-between align-items-center mt-5 mb-5">
					<Col md={{ span: 5, offset: 1, order: 1 }}>
					    <h1 className="h5 text-uppercase text-blue text-left fw-normal" data-sal="slide-down" data-sal-delay="150" data-sal-easing="ease">Our Clients</h1>
						<h3 className="h1 mb-4 text-left" data-sal="slide-down" data-sal-delay="100" data-sal-easing="ease">Trusted by over 300+ clients</h3>
						<p className="text-left mb-4" data-sal="slide-down" data-sal-delay="50" data-sal-easing="ease">Presently, AJIS company technological solutions reach worldwide and address real-life challenges in multiple domains and sectors. Our clients range from individuals, communities to corporations. These include the military, where we specifically serve the Indian army, the transport sector, mainly the Indian railways, and smart cities where we provide robust building solutions. Other fields include Manufacturing, Education, Technology, oil and gas, and Healthcare, among others. These hail from the private as well as public domains, and we serve them on a case-by-case basis, delivering custom solutions to address both specific and general industry needs. Besides these, AJIS is constantly looking for opportunities to grow and expand its solutions to other industries. Indeed, it has built partnerships with complementary service providers. One of our exclusive partners is Mirasys, a Finland-based company with which we are working on various Made-In-India projects</p>
					</Col>
					<Col md={6} className="text-center">
						<Image src={aboutImg} className="aboutimg img-fluid" data-sal="slide-down" data-sal-delay="150" data-sal-easing="ease"/>
					</Col>
				</Row>
				{/* <Row className="gx-0 gx-md-8 gx-xl-12 gy-8 align-items-center row-cols-2 row-cols-sm-3 row-cols-md-4 row-cols-lg-6 gx-10 gy-4" >
					<Customers customerlist = {Customerdata}/>
				</Row> */}
			</Container>
		</section>
	)
}

export default ClinetsSection
