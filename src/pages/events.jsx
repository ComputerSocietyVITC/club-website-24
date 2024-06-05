import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';
import Header from "../components/header";

import image1 from '../data/images/12.jpg';
import { useNavigate } from "react-router-dom";

const Events = () => {
    const navigate = useNavigate();

    const handleNavigateToGallery = () => {
        navigate('/gallery');
    };

    return (
        <>
            <Header type={0} />
            <div className="min-h-screen bg-slate-950 events-container">
                <div className="text-white text-9xl font-bold text-center pb-16">EVENT TITLE</div>
                <Swiper
                    effect={"coverflow"}
                    grabCursor={false}
                    centeredSlides={true}
                    loop={true}
                    slidesPerView={3}
                    coverflowEffect={
                        {
                            rotate: 0,
                            stretch: 0,
                            depth: 100,
                            modifier: 1,

                        }
                    }
                    pagination={{el: '.swiper-pagination', clickable: true}}
                    modules={[EffectCoverflow, Pagination]}
                    className="swiper-container"
                >
                    <SwiperSlide>
                        <img src={image1} alt={"image"}/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={image1} alt={"image"}/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={image1} alt={"image"}/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={image1} alt={"image"}/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={image1} alt={"image"}/>
                    </SwiperSlide>
                    <div className="slider-controler">
                        <div className="swiper-pagination"></div>
                    </div>
                </Swiper>
                <button
                    className='border-2 border-solid border-teal-500 p-3 rounded-full bg-gradient-to-r from-b_col1 to-b_col2 float-end'
                    onClick={handleNavigateToGallery}
                >
`                    <span className='text-teal-500 text-montserrat font-light text-lg'>View Gallery ></span>
`                </button>
            </div>
        </>
    )
}

export default Events
