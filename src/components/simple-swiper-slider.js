import React from "react"
import Image from  "../components/image"
// import Swiper core and required modules

import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';


// Import Swiper styles
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';

// install Swiper modules
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

class SimpleSwiperSlider extends React.Component {
	constructor(props) {
		super(props);
	}
	render(){
		const slidesData = this.props.dataInfo.slides;
			return (
			<Swiper
				spaceBetween={50}
				slidesPerView={2}
				navigation
				pagination={{ clickable: true }}
				scrollbar={{ draggable: true }}
				onSwiper={(swiper) => console.log(swiper)}
				onSlideChange={() => console.log('slide change')}
				>
				{slidesData.map((item, index) => {
					return (
					<SwiperSlide  key={index}>
						<Image
						src= {item.img}
						className="mx-auto shadow-xl"
						alt={item.title}
						// style={{
						// border: "10px solid green",
						// }}
						/>
					</SwiperSlide>
					)
				})}
			</Swiper>

			)}
	}


export default SimpleSwiperSlider



