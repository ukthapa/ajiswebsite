import React from "react"
import { Link } from "gatsby"
import { Container, Row, Col } from "react-bootstrap"

const CtaBlock = (props) => {
	return (
		<div className="bg-primary py-5" >
			<Container>
				<Row className="justify-content-center align-items-center py-md-5">
					<Col md={10} lg={9}>

						<h2 className="h1 text-white text-center mb-3 text-shadow">{props.ctaInfo.title}</h2>
						<p className="lead text-white text-center pb-3">{props.ctaInfo.desc}</p>
						<p className="text-center"><Link to={props.ctaInfo.ctaLink} className="btn btn-warning btn-lg shadow">{props.ctaInfo.ctaLabel}</Link></p>
					</Col>
				</Row>
			</Container>
		</div>
	)
}


export default CtaBlock



