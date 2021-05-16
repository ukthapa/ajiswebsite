import React from "react"
import { Link } from "gatsby"
import { Navbar, Nav, NavDropdown, Image } from 'react-bootstrap'

const PrimaryNav = () => {
	return(
		<Navbar bg="light" expand="lg">
			<Navbar.Brand href="#home"><Image src="https://via.placeholder.com/200x60?text=AJIS" alt="AJIS" className="mb-2" /></Navbar.Brand>
			<Navbar.Toggle aria-controls="basic-navbar-nav" />
			<Navbar.Collapse id="basic-navbar-nav">
			<Nav className="ml-auto">
				<Nav.Link href="#home">Home</Nav.Link>
				<Nav.Link href="#link">Link</Nav.Link>
				<NavDropdown title="Dropdown" id="basic-nav-dropdown">
					<NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
					<NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
					<NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
					<NavDropdown.Divider />
					<NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
				</NavDropdown>
			</Nav>
			<Nav className="ml-auto">
				<Link href="#home" className="btn btn-primary">Download</Link>
			</Nav>
			</Navbar.Collapse>
		</Navbar>
		// <nav className="navbar navbar-light">
		// 	<a className="navbar-brand" href="#">
		// 		<Image src="https://via.placeholder.com/200x60?text=AJIS" alt="AJIS" className="mb-2" />
		// 	</a>
		// 	<ul>
		// 		<li>Home</li>
		// 		<li>About</li>
		// 		<li>Contact</li>
		// 	</ul>
		// </nav>
	)
}

export default PrimaryNav
