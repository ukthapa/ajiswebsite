import React, { useEffect, useState }  from "react"
import { Link } from "gatsby"
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
				<Navbar.Brand to="/"><Image src="https://via.placeholder.com/200x60?text=AJIS" alt="AJIS" className="mb-2" /></Navbar.Brand>
				<Navbar.Toggle aria-controls="navbarScroll" />
				<Navbar.Collapse id="navbarScroll">
				<Nav className="ml-auto" navbarScroll>
					<NavDropdown title="Services" id="services">
						<NavDropdown.Item to="/consultancy-for-it-ibms">Consultancy for IT &amp; IBMS</NavDropdown.Item>
						<NavDropdown.Item to="/system-integrator-for-ict-suveillance-work">System integrator for ICT &amp; Surveillance work</NavDropdown.Item>
						<NavDropdown.Item to="/manage-services">Manage services</NavDropdown.Item>
						<NavDropdown.Item to="/cloud-service">Cloud service</NavDropdown.Item>
						<NavDropdown.Item to="/software-development">Software development - IT, AI &amp; VR</NavDropdown.Item>
						<NavDropdown.Item to="/career-tech">Career tech</NavDropdown.Item>
					</NavDropdown>
					<NavDropdown title="Resouces" id="resources">
						<NavDropdown.Item to="/customer-stories">Customers stories</NavDropdown.Item>
						<NavDropdown.Item to="/blog">Blog</NavDropdown.Item>
					</NavDropdown>
					<NavDropdown title="Company" id="company">
						<NavDropdown.Item href="/about-us">About us</NavDropdown.Item>
						<NavDropdown.Item href="/career">Career</NavDropdown.Item>
						<NavDropdown.Item href="/contact">Contact</NavDropdown.Item>
					</NavDropdown>
				</Nav>
				<Nav className="ml-auto">
					<Link href="/get-a-quote" className="btn btn-danger">Get a quote</Link>
				</Nav>
				</Navbar.Collapse>
			</Navbar>
		</header>
	)
}

export default PrimaryNav



