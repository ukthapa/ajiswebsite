import React from 'react'
import { Container, Row, Col, Image } from 'react-bootstrap'
import Social from "./social.js"

const Footer = () => {
	return (
		<footer>
			<div class="footer">
				<Container fluid="md">
					<Row>
						<Col>
							<Image src="https://via.placeholder.com/200x60?text=AJIS" alt="AJIS" className="mb-2" />
							<Social />
						</Col>
						<Col>

						</Col>
						<Col>

						</Col>
					</Row>
					<Row>
						<Col>


						</Col>
					</Row>
				</Container>
			</div>
		</footer>
	)
}

export default Footer
