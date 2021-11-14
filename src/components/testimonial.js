import React from "react"
import Image from  "./image"
// import Swiper core and required modules
import { Container, Row, Col } from "react-bootstrap"

import SwiperCore, { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';


// Import Swiper styles
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';

// install Swiper modules
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Autoplay]);

class TestimonialsSlider extends React.Component {
	constructor(props) {
		super(props);
	}
	render(){
		const slidesData = this.props.dataInfo.slides;
			return (
				<Container>
					<Row className="pt-5">
						<Col className="text-center pt-md-5">
						<h2 className="h5 text-uppercase text-blue fw-normal">Testimonials</h2>
						<h3 className="h1">What do our Customers Say about us</h3>
						</Col>
					</Row>
					<Row className="justify-content-center align-items-center py-md-5">
						<Col md={8}>
							<Swiper
								spaceBetween={50}
								slidesPerView={1}
								navigation
								Autoplay
								pagination={{ clickable: true }}
								scrollbar={{ draggable: true }}
								onSwiper={(swiper) => console.log(swiper)}
								onSlideChange={() => console.log('slide change')}
								>
								{slidesData.map((item, index) => {
									return (
									<SwiperSlide  key={index}>
										<blockquote className="testimonial px-5">
											<p className="text-center">{item.desc}</p>
											<cite className="text-center">
												<div class="img-holder">
													<Image
														src= {item.img}
														className="mx-auto shadow-xl"
														alt={item.title}
														style={{
															maxWidth: "200px",
															height: "auto",
														}}
													/>
												</div>
												{/* <div className="text-center">{item.title}</div> */}
											</cite>
										</blockquote>
									</SwiperSlide>
									)
								})}
							</Swiper>
						</Col>
					</Row>
				</Container>

			)}
	}


export default TestimonialsSlider



