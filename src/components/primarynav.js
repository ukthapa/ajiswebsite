import React, { useEffect, useState }  from "react"
import { withPrefix } from "gatsby"
import logo from "../images/ajis-logo.svg"
import { Navbar, Nav, NavDropdown, Image } from 'react-bootstrap'

const PrimaryNav = () => {

	const [small, setSmall] = useState(false);

	useEffect(() => {
		if (typeof window !== "undefined") {
		window.addEventListener("scroll", () =>
			setSmall(window.pageYOffset > 100)
		);
		}

		document.addEventListener("DOMContentLoaded", function(){
			// make it as accordion for smaller screens
			if (window.innerWidth > 992) {
				console.log("I am in");

				document.querySelectorAll('.navbar .nav-item').forEach(function(everyitem){
					console.log("I am in FUNCTION");

					everyitem.addEventListener('mouseover', function(e){

						let el_link = this.querySelector('.dropdown-toggle');

						if(el_link != null){
							let nextEl = el_link.nextElementSibling;
							el_link.classList.add('show');
							nextEl.classList.add('show');
						}

					});
					everyitem.addEventListener('mouseleave', function(e){
						let el_link = this.querySelector('.dropdown-toggle');

						if(el_link != null){
							let nextEl = el_link.nextElementSibling;
							el_link.classList.remove('show');
							nextEl.classList.remove('show');
						}


					})
				});

			}
			// end if innerWidth
			});
			// DOMContentLoaded  end

	}, []);


	return(
		<header>
			<Navbar  expand="lg" className={`${
			small ? "sticked-menu shadow-sm" : ""
		  }`}>
				<Navbar.Brand href="/">
					<Image src={logo} alt="AJIS" className="primary-logo mb-2" />
				</Navbar.Brand>
				<Navbar.Toggle aria-controls="navbarscroll" />
				<Navbar.Collapse id="navbarscroll">
				<Nav className="ms-auto" navbarscroll="true">
					<NavDropdown title="Services" id="services">
						<NavDropdown.Item href="/consultancy-for-it-ibms">Consultancy for IT &amp; IBMS</NavDropdown.Item>
						<NavDropdown.Item href="/system-integrator-for-ict-suveillance-work">System integrator for ICT &amp; Surveillance work</NavDropdown.Item>
						<NavDropdown.Item href="/manage-services">Manage services</NavDropdown.Item>
						<NavDropdown.Item href="/cloud-service">Cloud service</NavDropdown.Item>
						<NavDropdown.Item href="/software-development">Software development - IT, AI &amp; VR</NavDropdown.Item>
						<NavDropdown.Item href="/career-tech">Career tech</NavDropdown.Item>
					</NavDropdown>
					{/* <NavDropdown title="Resouces" id="resources">
						<NavDropdown.Item href="/customer-stories">Customers stories</NavDropdown.Item>
						<NavDropdown.Item href="/blog">Blog</NavDropdown.Item>
					</NavDropdown> */}
					{/* <NavDropdown title="Company" id="company">
						<NavDropdown.Item href="/about-us">About us</NavDropdown.Item>
						<NavDropdown.Item href="/career">Career</NavDropdown.Item>
						<NavDropdown.Item href="/contact-us">Contact Us</NavDropdown.Item>
					</NavDropdown> */}
				</Nav>
				<Nav>
					<Nav.Link href="/about-us" className="">About us</Nav.Link>
					<Nav.Link href="/contact-us" className="">Contact Us</Nav.Link>
				</Nav>
				<Nav className="ms-auto">
					<Nav.Link href="/contact-us" className="btn btn-primary">Get a quote</Nav.Link>
				</Nav>
				</Navbar.Collapse>
			</Navbar>
		</header>
	)
}

export default PrimaryNav



