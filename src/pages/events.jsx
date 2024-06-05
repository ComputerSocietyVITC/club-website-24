import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';
import Header from "../components/header";

const Events = () => {
    return (
        <>
            <Header type={0} />
            <div className="min-h-screen bg-slate-950 events-container">
                <Swiper
                    effect={"coverflow"}
                    grabCursor={false}
                    centeredSlides={true}
                    loop={true}
                    slidesPerView={5}
                    coverflowEffect={
                        {
                            rotate: 0,
                            stretch: 0,
                            depth: 100,
                            modifier: 2.5
                        }
                    }
                    className="swiper-container"
                >
                    <SwiperSlide>
                        <img/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img/>
                    </SwiperSlide>
                </Swiper>
                <div className="slider-container">
                    
                </div>
                <button
                    className='border-2 border-solid border-teal-500 p-3 rounded-full bg-gradient-to-r from-b_col1 to-b_col2'>
                    <p className='text-teal-500 text-montserrat font-light text-lg'>View Gallery ></p>
                </button>
            </div>
        </>
    )
}

export default Events
