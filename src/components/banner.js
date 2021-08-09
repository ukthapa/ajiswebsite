import React from "react"
// import { Link } from "gatsby"
import bannerImg from "../images/main-illustration.svg"
import { Container, Row, Col, Image} from "react-bootstrap"


const Banner = () => {
	return (
		<>
			<div className="banner-wrapper bg-gradient-primary">
				<Container className="pt-10 pb-15 pt-md-14 pb-md-20">
					<Row>
						<Col>
							<div className="text-center">
								<h1 className="mb-4 display-2">Turn your Technological Fantasy <span className="d-lg-block">into a Livable Reality.</span></h1>
								<p className="m-auto w-75 lead text-secondary">Our Intelligent data systems, Information, and Interactive technology solutions are powering corporations, <span className="d-xl-block">securing communities, and enhancing the quality of life worldwide.</span></p>
							</div>
						</Col>
					</Row>
				</Container>
			</div>
			<div className="text-center mt-md-n20">
				<Image src={bannerImg} className="bannerimg mt-4" />
			</div>
		</>
	)
}

export default Banner



