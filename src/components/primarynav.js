import React, { useEffect, useState }  from "react"
import { Link } from "gatsby"
import logo from "../images/ajis-logo.svg"
import { Navbar, Nav, NavDropdown, Image } from 'react-bootstrap'

const PrimaryNav = () => {

	const [small, setSmall] = useState(false);

	useEffect(() => {
		if (typeof window !== "undefined") {
		window.addEventListener("scroll", () =>
			setSmall(window.pageYOffset > 20)
		);
		}
	}, []);


	return(
		<header>
			<Navbar  expand="lg" className={`fixed-top ${
			small ? "sticked-menu shadow-sm" : ""
		  }`}>
				<Navbar.Brand href="/">
					<Image src={logo} alt="AJIS" className="primary-logo mb-2" />
				</Navbar.Brand>
				<Navbar.Toggle aria-controls="navbarscroll" />
				<Navbar.Collapse id="navbarscroll">
				<Nav className="ms-auto" navbarscroll>
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
						<NavDropdown.Item href="/contact-us">Contact Us</NavDropdown.Item>
					</NavDropdown>
				</Nav>
				<Nav className="ms-auto">
					<Link href="/contact-us" className="btn btn-primary">Get a quote</Link>
				</Nav>
				</Navbar.Collapse>
			</Navbar>
		</header>
	)
}

export default PrimaryNav



