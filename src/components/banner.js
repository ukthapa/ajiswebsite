import React from "react"
// import { Link } from "gatsby"
import bannerImg from "../images/main-illustration.svg"
import { Container, Row, Col, Image } from "react-bootstrap"


const Banner = () => {
	return (
		<div className="banner-wrapper">
			<Container>
				<Row>
					<Col>
						<div className="text-center">
							<h1 className="mb-4 display-2"> Turn your Technological Fantasy into a Livable Reality.</h1>
							<p className="m-auto w-75 lead"> Our Intelligent data systems, Information, and Interactive technology solutions are powering corporations, securing communities, and enhancing the quality of life worldwide. </p>
							<Image src={bannerImg} className="bannerimg mt-4"/>
						</div>
					</Col>
				</Row>
			</Container>
		</div>
	)
}

export default Banner



