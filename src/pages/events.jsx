import React, {useState} from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Autoplay, EffectCoverflow, Pagination } from 'swiper/modules';

import image1 from '../data/images/12.jpg';
import { useNavigate } from "react-router-dom";

const Events = () => {
    const navigate = useNavigate();

    const [slides, setSlides] = useState([
        { src: image1, eventName: 'Event 1' },
        { src: image1, eventName: 'Event 2' },
        { src: image1, eventName: 'Event 3' },
        { src: image1, eventName: 'Event 4' },
        { src: image1, eventName: 'Event 5' },
    ]);
    const [activeIndex, setActiveIndex] = useState(0);
    const [currentEvent, setCurrentEvent] = useState(slides[0].eventName);

    const handleNavigateToGallery = () => {
        navigate('/gallery');
    };

    const handleSlideChange = (swiper) => {
        setActiveIndex(swiper.activeIndex);
        setCurrentEvent(slides[swiper.activeIndex].eventName);
    };

    return (
        <>
            <div className="min-h-screen bg-slate-950 events-container">
                <div className="text-white text-9xl font-bold text-center pb-16">{currentEvent}</div>
                <Swiper
                    effect={"coverflow"}
                    grabCursor={true}
                    centeredSlides={true}
                    loop={false}
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
                    modules={[Autoplay, EffectCoverflow, Pagination]}
                    className="swiper-container"
                    onSlideChange={handleSlideChange}
                    autoplay={{
                        delay: 2000,
                        stopOnLastSlide: false,
                        disableOnInteraction: false,
                        speed: 500
                    }}
                >
                    {slides.map((slide, index) => (
                        <SwiperSlide key={index}>
                            <img src={slide.src} alt={"image"} />
                        </SwiperSlide>
                    ))}
                    <div className="slider-controler">
                        <div className="swiper-pagination"></div>
                    </div>
                </Swiper>
                <button
                    className='border-2 border-solid border-teal-500 p-3 rounded-full bg-gradient-to-r from-b_col1 to-b_col2 float-end'
                    onClick={handleNavigateToGallery}
                >
`                    <span className='text-teal-500 text-montserrat font-light text-lg'>View Gallery &gt;</span>
`                </button>
            </div>
        </>
    )
}

export default Events
