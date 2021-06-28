import React from 'react'
import { Container, Row, Col, Image, Nav } from 'react-bootstrap'
import Social from "./social.js"
import logo from "../images/ajis-logo.svg"

const Footer = () => {
	return (
		<footer>
			<div className="footer pt-5 pb-3">
				<Container fluid="md">
					<Row>
						<Col className="services">
							<h5>Services</h5>
							<ul className="footer-link small">
								<li>
									<Nav.Link href="/consultancy-for-it-ibms">Consultancy for IT &amp; IBMS</Nav.Link>
								</li>
								<li>
									<Nav.Link href="/system-integrator-for-ict-suveillance-work">System integrator for ICT &amp; Surveillance work</Nav.Link>
								</li>
								<li>
									<Nav.Link href="/manage-services">Manage services</Nav.Link>
								</li>
								<li>
									<Nav.Link href="/cloud-service">Cloud service</Nav.Link>
								</li>
								<li>
									<Nav.Link href="/software-development">Software development - IT, AI &amp; VR</Nav.Link>
								</li>
								<li>
									<Nav.Link href="/career-tech">Career tech</Nav.Link>
								</li>
							</ul>
						</Col>
						<Col className="resources">
							<h5>Resources</h5>
							<ul className="footer-link small">
								<li>
									<Nav.Link href="/customers-stories">Customers Stories</Nav.Link>
								</li>
								<li>
									<Nav.Link href="/blog">Blog</Nav.Link>
								</li>
							</ul>
						</Col>
						<Col className="company">
							<h5>Company</h5>
							<ul className="footer-link small">
								<li>
									<Nav.Link href="/about-us">About Us</Nav.Link>
								</li>
								<li>
									<Nav.Link href="/career">Career</Nav.Link>
								</li>
								<li>
									<Nav.Link href="/contact">Contact us</Nav.Link>
								</li>
							</ul>
						</Col>
						<Col md={{ order: 'first'}} className="text-center text-md-left">
							<Image src={logo} alt="AJIS" className="mb-2 primary-logo" />
							<div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec ante elit. Integer non enim placerat</div>
							<Social />
						</Col>
					</Row>
					<Row>
						<Col>
						<hr className="mt-4 mb-4"/>
						<div className="d-md-flex justify-content-center justify-content-md-between align-items-center small text-black-50 text-center text-md-left">
							<p className="mb-0 mr-md-3 text-center text-md-left">&copy; 2021, A &amp; J Intelli System (P) Ltd</p>
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
