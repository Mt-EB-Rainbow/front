import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import banner from '../../assets/mainpage/banner.png';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import './Banner.css';

// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';

export default function Banner() {
    return (
        <>
            <Swiper
                cssMode={true}
                navigation={true}
                pagination={true}
                mousewheel={false}
                keyboard={true}
                loop={true}
                modules={[Navigation, Pagination, Mousewheel, Keyboard]}
            >
                <SwiperSlide>
                    <img src={banner} />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={banner} />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={banner} />
                </SwiperSlide>
            </Swiper>
        </>
    );
}
