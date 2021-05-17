import React from "react"
// import { Link } from "gatsby"
import { Container, Row, Col } from "react-bootstrap"


const Banner = (props) => {
	return (
		<div className="banner-wrapper">
			<Container>
				<Row>
					<Col>
						<h1 className="text-center mb-4 display-3 "> Turn your Technological Fantasy into a Livable Reality. </h1>
						<p className="text-center m-auto w-75 lead"> Our Intelligent data systems, Information, and Interactive technology solutions are powering corporations, securing communities, and enhancing the quality of life worldwide. </p>
					</Col>
				</Row>
			</Container>
		</div>
	)
}

export default Banner



