import React from "react"
import { Container, Row, Col } from "react-bootstrap"

const CtaBlock = () => {
	return (
		<div className="bg-primary py-5" >
			<Container>
				<Row className="justify-content-center align-items-center py-md-5">
					<Col md={8}>
						<h2 className="h1 text-white text-center mb-3">Ready to get started?</h2>
						<p className="lead text-white text-center pb-3">If you are evaluating the need for your company before moving its infrastructure to Cloud or transitioning to the Cloud as part of business' growth master plan, we can help.</p>
						<p className="text-center"><a href="" className="btn btn-warning btn-lg text-white shadow">Schedule a Call</a></p>
					</Col>
				</Row>
			</Container>
		</div>
	)
}

export default CtaBlock



