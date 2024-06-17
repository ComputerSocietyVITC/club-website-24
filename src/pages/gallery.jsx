import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, EffectCoverflow, Pagination } from 'swiper/modules';

const Gallery = ({ slides }) => {
    const [currentEvent, setCurrentEvent] = useState(slides[0].eventName);

    const handleSlideChange = (swiper) => {
        setCurrentEvent(slides[swiper.activeIndex].eventName);
    };

    return (
        <div className="min-h-screen bg-slate-950 events-container">
            <div className="text-white text-9xl font-bold text-center pb-16">{currentEvent}</div>
            <Swiper
                effect={"coverflow"}
                grabCursor={true}
                centeredSlides={true}
                loop={true}
                slidesPerView={5}
                coverflowEffect={{
                    rotate: -10,
                    stretch: 20,
                    depth: 350,
                    modifier: 1,
                }}
                pagination={{ el: '.swiper-pagination', clickable: true }}
                modules={[Autoplay, EffectCoverflow, Pagination]}
                onSlideChange={handleSlideChange}
                autoplay={{
                    delay: 5000,
                    stopOnLastSlide: true,
                    disableOnInteraction: true,
                    speed: 200,
                }}
            >
                {slides.map((slide, index) => (
                    <SwiperSlide key={index}>
                        <section className='bg-[#f4f3e9] px-4 pt-4 flex flex-col items-center justify-center'>
                            <img
                                src={slide.src}
                                alt={slide.eventName}
                                style={{ maxHeight: '500px', maxWidth: '100%' }}
                            />
                            <section className='text-center py-12'>{slide.eventName}</section>
                        </section>
                    </SwiperSlide>
                ))}
                <div className="slider-controler">
                    <div className="swiper-pagination"></div>
                </div>
            </Swiper>
        </div>
    );
};

export default Gallery;
