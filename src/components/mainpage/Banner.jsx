import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import banner from '../../assets/mainpage/banner_txt.png';
import banner2 from '../../assets/mainpage/banner_2.png';
import banner3 from '../../assets/mainpage/banner_3.png';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import './Banner.css';

// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';

export default function Banner() {
    const navigate = useNavigate();

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
                <SwiperSlide onClick={() => navigate('/success/1')}>
                    <img src={banner} />
                </SwiperSlide>
                <SwiperSlide onClick={() => navigate('/success/2')}>
                    <img src={banner2} />
                </SwiperSlide>
                <SwiperSlide onClick={() => navigate('/success/3')}>
                    <img src={banner3} />
                </SwiperSlide>
            </Swiper>
        </>
    );
}

const Container = styled.div`
    @media (max-width: 30rem) {
        height: 15rem;
    }
    width: 100%;
    height: 30rem;
    position: relative;
    z-index: 0;
`;

const BannerTxt = styled.div`
    position: absolute;
    top: 50%;
    left: 0;
    right: 0;
    width: 50rem;
    opacity: 0;
    margin: auto;
    text-align: center;
    transition: 0.5s;
    z-index: 10;

    .title {
        position: absolute;
        color: var(--black);
        font-size: 1.4rem;
        line-height: 1.25;
        font-weight: bold;
        margin-bottom: 0.8rem;
        z-index: 100;
    }

    .text {
        color: var(--white);
        font-size: 4rem;
    }
`;
