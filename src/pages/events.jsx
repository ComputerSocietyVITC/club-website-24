import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, EffectCoverflow, Pagination } from 'swiper/modules';
import { useNavigate } from 'react-router-dom';

const importAll = (r) => {
    let images = {};
    r.keys().map((item) => {
        images[item.replace('./', '')] = r(item);
        return null;
    });
    return images;
};

const images = importAll(require.context('../data/images/events', true, /main\.jpg$/));

const Events = () => {
    const navigate = useNavigate();

    const [slides, setSlides] = useState([]);
    const [currentEvent, setCurrentEvent] = useState('');

    useEffect(() => {
        const eventSlides = Object.keys(images).map((key, index) => ({
            src: images[key],
            eventName: `Event${index + 1}`,
        }));
        setSlides(eventSlides);
        if (eventSlides.length > 0) {
            setCurrentEvent(eventSlides[0].eventName);
        }
    }, []);

    const handleNavigateToGallery = () => {
        navigate(`/${currentEvent.toLowerCase()}_gallery`);
    };

    const handleSlideChange = (swiper) => {
        setCurrentEvent(slides[swiper.activeIndex]?.eventName || '');
    };

    return (
        <div className="min-h-screen gradient events-container">
            <div className="text-white text-6xl font-bold text-center pt-12 pb-4">{currentEvent}</div>
            <Swiper
                effect="coverflow"
                grabCursor={true}
                centeredSlides={true}
                loop={false}
                slidesPerView={3}
                coverflowEffect={{
                    rotate: 0,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                }}
                pagination={{ clickable: true }}
                modules={[Autoplay, EffectCoverflow, Pagination]}
                className="swiper-container"
                onSlideChange={handleSlideChange}
                autoplay={{
                    delay: 2000,
                    stopOnLastSlide: false,
                    disableOnInteraction: false,
                    speed: 500,
                }}
            >
                {slides.map((slide, index) => (
                    <SwiperSlide key={index}>
                        <img src={slide.src} alt={slide.eventName} />
                    </SwiperSlide>
                ))}
                <div className="swiper-pagination"></div>
            </Swiper>
            <button
                className='border-2 border-solid border-teal-500 p-3 rounded-full bg-gradient-to-r from-b_col1 to-b_col2 float-end'
                onClick={handleNavigateToGallery}
            >
                <span className='text-teal-500 text-montserrat font-light text-lg'>View Gallery &gt;</span>
            </button>
        </div>
    );
};

export default Events;
