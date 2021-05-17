import React from 'react'
import { Container, Row, Col, Image, Nav } from 'react-bootstrap'
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
						<hr />
						<div className="d-flex justify-content-center align-items-center small text-black-50">
							<p className="mb-0 mr-3">&copy; 2021, A &amp; J Intelli System (P) Ltd</p>
							<div className="d-none d-md-inline text-black-50"> | </div>
							<Nav className="justify-content-center">
								<Nav.Item>
									<Nav.Link href="/privacy-policy" className="p-2">Privacy Policy</Nav.Link>
								</Nav.Item>
								<Nav.Item>
									<Nav.Link href="/terms-of-services" className="p-2">Terms of Services</Nav.Link>
								</Nav.Item>
							</Nav>
						</div>
						
						</Col>
					</Row>
				</Container>
			</div>
		</footer>
	)
}

export default Footer
