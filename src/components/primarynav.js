import React from "react"
import { Link } from "gatsby"
import { Navbar, Nav, NavDropdown, Image } from 'react-bootstrap'

const PrimaryNav = () => {
	return(
		<Navbar bg="light" expand="lg">
			<Navbar.Brand href="/"><Image src="https://via.placeholder.com/200x60?text=AJIS" alt="AJIS" className="mb-2" /></Navbar.Brand>
			<Navbar.Toggle aria-controls="basic-navbar-nav" />
			<Navbar.Collapse id="basic-navbar-nav">
			<Nav className="ml-auto">
				<NavDropdown title="Services" id="services">
					<NavDropdown.Item href="/consultancy-for-it-ibms">Consultancy for IT &amp; IBMS</NavDropdown.Item>
					<NavDropdown.Item href="/system-integrator-for-ict-suveillance-work">System integrator for ICT &amp; Surveillance work</NavDropdown.Item>
					<NavDropdown.Item href="/manage-services">Manage services</NavDropdown.Item>
					<NavDropdown.Item href="/cloud-service">Cloud service</NavDropdown.Item>
					<NavDropdown.Item href="/software-development">Software development - IT, AI &amp; VR</NavDropdown.Item>
					<NavDropdown.Item href="/career-tech">Career tech</NavDropdown.Item>
				</NavDropdown>
				<NavDropdown title="Resouces" id="resources">
					<NavDropdown.Item href="/customer-stories">Customers stories</NavDropdown.Item>
					<NavDropdown.Item href="/blog">Blog</NavDropdown.Item>
				</NavDropdown>
				<NavDropdown title="Company" id="company">
					<NavDropdown.Item href="/about-us">About us</NavDropdown.Item>
					<NavDropdown.Item href="/career">Career</NavDropdown.Item>
					<NavDropdown.Item href="/contact">Contact</NavDropdown.Item>
				</NavDropdown>
			</Nav>
			<Nav className="ml-auto">
				<Link href="/get-a-quote" className="btn btn-primary">Get a quote</Link>
			</Nav>
			</Navbar.Collapse>
		</Navbar>
	)
}

export default PrimaryNav
