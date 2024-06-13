import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, EffectCoverflow, Pagination } from 'swiper/modules';
import image1 from '../data/images/12.jpg';
import image2 from '../data/images/11.jpg';
import { useNavigate } from 'react-router-dom';

const Gallery = () => {
    const navigate = useNavigate();

    const [slides] = useState([
        { src: image1, eventName: 'This so and so happened in this event, you could literally see it with your own eyes.' },
        { src: image2, eventName: 'Event 2' },
        { src: image1, eventName: 'Event 3' },
        { src: image1, eventName: 'Event 4' },
        { src: image1, eventName: 'Event 5' },
    ]);
    const [currentEvent, setCurrentEvent] = useState(slides[0].eventName);

    const handleNavigateToGallery = () => {
        navigate('/gallery');
    };

    const handleSlideChange = (swiper) => {
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
                <button
                    className='border-2 border-solid border-teal-500 p-3 rounded-full bg-gradient-to-r from-b_col1 to-b_col2 float-end'
                    onClick={handleNavigateToGallery}
                >
                    <span className='text-teal-500 text-montserrat font-light text-lg'>View Gallery &gt;</span>
                </button>
            </div>
        </>
    );
};

export default Gallery;
