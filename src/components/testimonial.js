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
					<Row className="justify-content-center align-items-center py-md-5">
						<Col className="py-5" md={8}>
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
										<div>
											<div className="display-6 text-center">{item.desc}</div>

											<div className="">
												<Image
													src= {item.img}
													className="mx-auto shadow-xl"
													alt={item.title}
													style={{
														maxWidth: "100px",
														height: "auto",
														margin: "15px auto",
													}}
												/>
												<div className="text-center">{item.title}</div>
											</div>
										</div>
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



