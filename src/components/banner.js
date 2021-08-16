import React from "react"
// import { Link } from "gatsby"
import bannerImg from "../images/main-illustration.svg"
import { Container, Row, Col, Image} from "react-bootstrap"


const Banner = () => {
	return (
		<>
			<div className="banner-wrapper bg-gradient-primary">
				<Container className="pt-0 pb-5 pb-md-20">
					<Row>
						<Col>
							<div className="text-center">
								<h1 className="mb-4 display-2" data-sal="slide-down" data-sal-delay="150" data-sal-easing="ease">Turn your Technological Fantasy <span className="d-lg-block">into a Livable Reality.</span></h1>
								<p className="m-auto lead text-secondary" data-sal="slide-down" data-sal-delay="100" data-sal-easing="ease">Our Intelligent data systems, Information, and Interactive technology solutions are powering corporations, <span className="d-xl-block">securing communities, and enhancing the quality of life worldwide.</span></p>
							</div>
						</Col>
					</Row>
				</Container>
			</div>
			<div className="text-center mt-n10 mt-md-n20 mb-md-5">
				<Image src={bannerImg} className="bannerimg mt-4" data-sal="slide-up" data-sal-delay="100" data-sal-easing="ease"/>
			</div>
		</>
	)
}

export default Banner



