import React from "react"
import aboutImg from "../images/about-illustration.svg"
import { Container, Row, Col, Image } from "react-bootstrap"
import { Link } from "gatsby"


const ServicesSection = () => {
	return (
		<div className="light-blue section">
			<Container>
				<Row className="align-items-center mt-5 mb-5">
					<Col className="text-center">
						<h2 className="h5 text-uppercase text-muted " data-sal="slide-down" data-sal-delay="150" data-sal-easing="ease">What We Do?</h2>
					    <h3 className="h1" data-sal="slide-down" data-sal-delay="100" data-sal-easing="ease">The service we offer is <span className="d-lg-block">specifically designed to meet your needs.</span></h3>
					</Col>
				</Row>
				<Row className="row-cols-1 row-cols-md-2 row-cols-xl-3 g-4">
					<Col>
						<Link to="/"  className="card h-100 shadow-sm" data-sal="slide-up" data-sal-delay="100" data-sal-easing="ease">
							<div className="card-body text-center">
								<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 511.9" data-inject-url="https://sandbox.elemisthemes.com/img/icons/search-1.svg" class="svg-inject icon-svg icon-svg-md text-yellow mb-3"><path class="svg-stroke" d="M297.3 429.9c-118.7 0-215-96.2-215-215 0-80.1 44.5-153.5 115.5-190.6 105.1-54.7 235.1-13.8 289.9 91.3 4 8 .8 17.7-7.1 21.7-7.8 3.9-17.3.9-21.5-6.8C412.5 41.2 302 6.4 212.7 52.9c-89.4 46.7-124 156.9-77.4 246.3s156.9 124 246.3 77.4c61.7-32.2 99.8-96.8 98-166.4-.2-8.9 6.9-16.3 15.8-16.4 8.9-.2 16.2 6.8 16.4 15.7 2.9 118.8-91.1 217.5-209.9 220.4-1.4-.1-3 0-4.6 0z"></path><circle class="svg-fill" cx="297.1" cy="214.9" r="111.1"></circle><path class="svg-stroke" d="M297.1 342.1c-70.3 0-127.2-57-127.2-127.2s57-127.2 127.2-127.2 127.2 57 127.2 127.2c-.1 70.2-57 127.1-127.2 127.2zm0-222.2c-52.5 0-95 42.5-95 95s42.5 95 95 95 95-42.5 95-95c-.1-52.5-42.6-95-95-95zm-240.6 392C25.3 511.9 0 486.6 0 455.4c0-17.6 8.2-34.2 22.2-44.9L88.3 360c6.4-4.9 15.5-4.3 21.2 1.4l41.1 41.1c5.7 5.7 6.3 14.8 1.4 21.2l-50.5 66.1c-9.9 12.9-24.9 21-41.2 22.1h-3.8zm40.1-117.7l-54.9 41.9c-10.7 8.1-12.9 23.3-4.8 34s23.3 12.9 34 4.8c1.8-1.4 3.4-3 4.8-4.8l42-54.9-21.1-21z"></path></svg>
								<h4 className="h5 mb-4 ">IT &amp; Cloud <span className="d-md-block">Advisory Services</span></h4>
								<p>AJIS helps clients to develop cloud computing strategies, including detailed cost and benefit analyses, enterprise-wide cloud adaptation roadmaps, and migration and migration plans. We also help you to formulate an IT strategy aligned to business objectives, optimize costs and cloud services, and manage data, etc. Our expertise guarantees you a comprehensive IT strategy, robust design, and successful implementation.</p>
							</div>
						</Link>
					</Col>
					<Col>
						<Link  to="/" className="card h-100 shadow-sm" data-sal="slide-up" data-sal-delay="110" data-sal-easing="ease">
							<div  className="card-body text-center">
								<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 511.9" data-inject-url="https://sandbox.elemisthemes.com/img/icons/search-1.svg" class="svg-inject icon-svg icon-svg-md text-yellow mb-3"><path class="svg-stroke" d="M297.3 429.9c-118.7 0-215-96.2-215-215 0-80.1 44.5-153.5 115.5-190.6 105.1-54.7 235.1-13.8 289.9 91.3 4 8 .8 17.7-7.1 21.7-7.8 3.9-17.3.9-21.5-6.8C412.5 41.2 302 6.4 212.7 52.9c-89.4 46.7-124 156.9-77.4 246.3s156.9 124 246.3 77.4c61.7-32.2 99.8-96.8 98-166.4-.2-8.9 6.9-16.3 15.8-16.4 8.9-.2 16.2 6.8 16.4 15.7 2.9 118.8-91.1 217.5-209.9 220.4-1.4-.1-3 0-4.6 0z"></path><circle class="svg-fill" cx="297.1" cy="214.9" r="111.1"></circle><path class="svg-stroke" d="M297.1 342.1c-70.3 0-127.2-57-127.2-127.2s57-127.2 127.2-127.2 127.2 57 127.2 127.2c-.1 70.2-57 127.1-127.2 127.2zm0-222.2c-52.5 0-95 42.5-95 95s42.5 95 95 95 95-42.5 95-95c-.1-52.5-42.6-95-95-95zm-240.6 392C25.3 511.9 0 486.6 0 455.4c0-17.6 8.2-34.2 22.2-44.9L88.3 360c6.4-4.9 15.5-4.3 21.2 1.4l41.1 41.1c5.7 5.7 6.3 14.8 1.4 21.2l-50.5 66.1c-9.9 12.9-24.9 21-41.2 22.1h-3.8zm40.1-117.7l-54.9 41.9c-10.7 8.1-12.9 23.3-4.8 34s23.3 12.9 34 4.8c1.8-1.4 3.4-3 4.8-4.8l42-54.9-21.1-21z"></path></svg>
								<h4 className="h5 mb-4 "> System Integrator for ICT &amp; <span className="d-md-block">Surveillance Solutions</span> </h4>
								<p>AJIS is a system integrator for ICT and Surveillance solutions and addresses the wide range of integration needs within the ICT industry. We install and connect various IT systems, software, and hardware into one comprehensive, cohesive, and seamlessly functioning body. Our offerings include design, solution integration, systems development, etc.</p>
							</div>
						</Link>
					</Col>

					<Col>
						<Link to="/" className="card h-100 shadow-sm" data-sal="slide-up" data-sal-delay="120" data-sal-easing="ease">
							<div className="card-body text-center">
								<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 511.9" data-inject-url="https://sandbox.elemisthemes.com/img/icons/search-1.svg" class="svg-inject icon-svg icon-svg-md text-yellow mb-3"><path class="svg-stroke" d="M297.3 429.9c-118.7 0-215-96.2-215-215 0-80.1 44.5-153.5 115.5-190.6 105.1-54.7 235.1-13.8 289.9 91.3 4 8 .8 17.7-7.1 21.7-7.8 3.9-17.3.9-21.5-6.8C412.5 41.2 302 6.4 212.7 52.9c-89.4 46.7-124 156.9-77.4 246.3s156.9 124 246.3 77.4c61.7-32.2 99.8-96.8 98-166.4-.2-8.9 6.9-16.3 15.8-16.4 8.9-.2 16.2 6.8 16.4 15.7 2.9 118.8-91.1 217.5-209.9 220.4-1.4-.1-3 0-4.6 0z"></path><circle class="svg-fill" cx="297.1" cy="214.9" r="111.1"></circle><path class="svg-stroke" d="M297.1 342.1c-70.3 0-127.2-57-127.2-127.2s57-127.2 127.2-127.2 127.2 57 127.2 127.2c-.1 70.2-57 127.1-127.2 127.2zm0-222.2c-52.5 0-95 42.5-95 95s42.5 95 95 95 95-42.5 95-95c-.1-52.5-42.6-95-95-95zm-240.6 392C25.3 511.9 0 486.6 0 455.4c0-17.6 8.2-34.2 22.2-44.9L88.3 360c6.4-4.9 15.5-4.3 21.2 1.4l41.1 41.1c5.7 5.7 6.3 14.8 1.4 21.2l-50.5 66.1c-9.9 12.9-24.9 21-41.2 22.1h-3.8zm40.1-117.7l-54.9 41.9c-10.7 8.1-12.9 23.3-4.8 34s23.3 12.9 34 4.8c1.8-1.4 3.4-3 4.8-4.8l42-54.9-21.1-21z"></path></svg>
								<h4 className="h5 mb-4">Managed Services</h4>
								<p>Our Managed Services include Application Managed Service (AMS), Infrastructure Managed Services (IMS), and cloud advisory.  We host and maintain applications with our AMS, deliver technical and end-user support and complement it with the necessary technology infrastructure. With our IMS, we also provide, enable and support cloud-based infrastructures, such as data centers, security, and integration.</p>
							</div>
						</Link>
					</Col>
					<Col>
						<Link to="/" className="card h-100 shadow-sm" data-sal="slide-up" data-sal-delay="130" data-sal-easing="ease">
							<div className="card-body text-center">
								<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 511.9" data-inject-url="https://sandbox.elemisthemes.com/img/icons/search-1.svg" class="svg-inject icon-svg icon-svg-md text-yellow mb-3"><path class="svg-stroke" d="M297.3 429.9c-118.7 0-215-96.2-215-215 0-80.1 44.5-153.5 115.5-190.6 105.1-54.7 235.1-13.8 289.9 91.3 4 8 .8 17.7-7.1 21.7-7.8 3.9-17.3.9-21.5-6.8C412.5 41.2 302 6.4 212.7 52.9c-89.4 46.7-124 156.9-77.4 246.3s156.9 124 246.3 77.4c61.7-32.2 99.8-96.8 98-166.4-.2-8.9 6.9-16.3 15.8-16.4 8.9-.2 16.2 6.8 16.4 15.7 2.9 118.8-91.1 217.5-209.9 220.4-1.4-.1-3 0-4.6 0z"></path><circle class="svg-fill" cx="297.1" cy="214.9" r="111.1"></circle><path class="svg-stroke" d="M297.1 342.1c-70.3 0-127.2-57-127.2-127.2s57-127.2 127.2-127.2 127.2 57 127.2 127.2c-.1 70.2-57 127.1-127.2 127.2zm0-222.2c-52.5 0-95 42.5-95 95s42.5 95 95 95 95-42.5 95-95c-.1-52.5-42.6-95-95-95zm-240.6 392C25.3 511.9 0 486.6 0 455.4c0-17.6 8.2-34.2 22.2-44.9L88.3 360c6.4-4.9 15.5-4.3 21.2 1.4l41.1 41.1c5.7 5.7 6.3 14.8 1.4 21.2l-50.5 66.1c-9.9 12.9-24.9 21-41.2 22.1h-3.8zm40.1-117.7l-54.9 41.9c-10.7 8.1-12.9 23.3-4.8 34s23.3 12.9 34 4.8c1.8-1.4 3.4-3 4.8-4.8l42-54.9-21.1-21z"></path></svg>
								<h4 className="h5 mb-4">Video Software as <span className="d-md-block">a Service (Vsaas)</span></h4>
								<p>AJIS offers Video software as a service (VSaaS) and cloud services. Cloud services range from cloud migration, optimization, and discovery to disaster recovery, architecture validation, data analytics, and application development. We personalize these in our data center but still exploit the flexibility and modularity advantages that new technologies offer in virtualizing and managing data. We help you transition from an on-premise to a cloud-first strategy without compromising performance and reliability.</p>
							</div>
						</Link>
					</Col>
					<Col>
						<Link to="/" className="card h-100 shadow-sm" data-sal="slide-up" data-sal-delay="140" data-sal-easing="ease">
							<div className="card-body text-center">
								<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 511.9" data-inject-url="https://sandbox.elemisthemes.com/img/icons/search-1.svg" class="svg-inject icon-svg icon-svg-md text-yellow mb-3"><path class="svg-stroke" d="M297.3 429.9c-118.7 0-215-96.2-215-215 0-80.1 44.5-153.5 115.5-190.6 105.1-54.7 235.1-13.8 289.9 91.3 4 8 .8 17.7-7.1 21.7-7.8 3.9-17.3.9-21.5-6.8C412.5 41.2 302 6.4 212.7 52.9c-89.4 46.7-124 156.9-77.4 246.3s156.9 124 246.3 77.4c61.7-32.2 99.8-96.8 98-166.4-.2-8.9 6.9-16.3 15.8-16.4 8.9-.2 16.2 6.8 16.4 15.7 2.9 118.8-91.1 217.5-209.9 220.4-1.4-.1-3 0-4.6 0z"></path><circle class="svg-fill" cx="297.1" cy="214.9" r="111.1"></circle><path class="svg-stroke" d="M297.1 342.1c-70.3 0-127.2-57-127.2-127.2s57-127.2 127.2-127.2 127.2 57 127.2 127.2c-.1 70.2-57 127.1-127.2 127.2zm0-222.2c-52.5 0-95 42.5-95 95s42.5 95 95 95 95-42.5 95-95c-.1-52.5-42.6-95-95-95zm-240.6 392C25.3 511.9 0 486.6 0 455.4c0-17.6 8.2-34.2 22.2-44.9L88.3 360c6.4-4.9 15.5-4.3 21.2 1.4l41.1 41.1c5.7 5.7 6.3 14.8 1.4 21.2l-50.5 66.1c-9.9 12.9-24.9 21-41.2 22.1h-3.8zm40.1-117.7l-54.9 41.9c-10.7 8.1-12.9 23.3-4.8 34s23.3 12.9 34 4.8c1.8-1.4 3.4-3 4.8-4.8l42-54.9-21.1-21z"></path></svg>
								<h4 className="h5 mb-4"> Software Development - <span className="d-md-block">AI, IOT, VR</span></h4>
								<p>AJIS provides a wide range of software development solutions to <strong>real-life challenges</strong>. These include custom Information Technology (IT) web applications, Artificial Intelligence (AI) software and Virtual Reality (VR), cloud computing, and cybersecurity software solutions. We adapt our technology solutions seamlessly to client business needs and project requirements. </p>
							</div>
						</Link>
					</Col>

					<Col>
						<Link to="/"  className="card h-100 shadow-sm" data-sal="slide-up" data-sal-delay="150" data-sal-easing="ease">
							<div className="card-body text-center">
								<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 511.9" data-inject-url="https://sandbox.elemisthemes.com/img/icons/search-1.svg" class="svg-inject icon-svg icon-svg-md text-yellow mb-3"><path class="svg-stroke" d="M297.3 429.9c-118.7 0-215-96.2-215-215 0-80.1 44.5-153.5 115.5-190.6 105.1-54.7 235.1-13.8 289.9 91.3 4 8 .8 17.7-7.1 21.7-7.8 3.9-17.3.9-21.5-6.8C412.5 41.2 302 6.4 212.7 52.9c-89.4 46.7-124 156.9-77.4 246.3s156.9 124 246.3 77.4c61.7-32.2 99.8-96.8 98-166.4-.2-8.9 6.9-16.3 15.8-16.4 8.9-.2 16.2 6.8 16.4 15.7 2.9 118.8-91.1 217.5-209.9 220.4-1.4-.1-3 0-4.6 0z"></path><circle class="svg-fill" cx="297.1" cy="214.9" r="111.1"></circle><path class="svg-stroke" d="M297.1 342.1c-70.3 0-127.2-57-127.2-127.2s57-127.2 127.2-127.2 127.2 57 127.2 127.2c-.1 70.2-57 127.1-127.2 127.2zm0-222.2c-52.5 0-95 42.5-95 95s42.5 95 95 95 95-42.5 95-95c-.1-52.5-42.6-95-95-95zm-240.6 392C25.3 511.9 0 486.6 0 455.4c0-17.6 8.2-34.2 22.2-44.9L88.3 360c6.4-4.9 15.5-4.3 21.2 1.4l41.1 41.1c5.7 5.7 6.3 14.8 1.4 21.2l-50.5 66.1c-9.9 12.9-24.9 21-41.2 22.1h-3.8zm40.1-117.7l-54.9 41.9c-10.7 8.1-12.9 23.3-4.8 34s23.3 12.9 34 4.8c1.8-1.4 3.4-3 4.8-4.8l42-54.9-21.1-21z"></path></svg>
								<h4 className="h5 mb-4"> Career tech</h4>
								<p>A &amp; J Intelli System (P) Ltd also provides Educational Institutions with a broad range of products and services, including ready-to-run programs and courses.</p>
							</div>
						</Link>
					</Col>
				</Row>
			</Container>
		</div>
	)
}

export default ServicesSection



