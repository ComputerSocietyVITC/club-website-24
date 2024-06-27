import React, { useState, useEffect, useMemo } from "react";
import { useParams } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, EffectCoverflow, Pagination } from "swiper/modules";

const importAll = (r) => {
  let images = {};
  r.keys().map((item) => {
    images[item.replace("./", "")] = r(item);
    return null;
  });
  return images;
};

const Gallery = () => {
  const { event } = useParams();
  const images = useMemo(() => {
    try {
      return importAll(
        require.context(`../data/images/events`, true, /\.(jpg|png|JPG)$/)
      );
    } catch (error) {
      console.error(`Error loading images for event: ${event}`, error);
      return {};
    }
  }, [event]);

  const [slides, setSlides] = useState([]);
  const [currentEvent, setCurrentEvent] = useState("");

  useEffect(() => {
    const eventSlides = Object.keys(images)
      .filter((key) => key.startsWith(`${event}/`))
      .map((key) => ({
        src: images[key],
        eventName: event,
      }));
    setSlides(eventSlides);
    if (eventSlides.length > 0) {
      setCurrentEvent(eventSlides[0].eventName);
    }
  }, [event, images]);

  const handleSlideChange = (swiper) => {
    setCurrentEvent(event);
  };

  return (
    <div className="min-h-screen bg-transparent events-container flex flex-col items-center">
      <div className="pt-16 text-white text-4xl md:text-6xl lg:text-7xl font-bold text-center pb-24">
      {currentEvent.toUpperCase()} Gallery
      </div>
      <Swiper
        effect="coverflow"
        className="w-full max-w-8xl "
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        breakpoints={{
          320: {
            slidesPerView: 1,
          },
          640: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
          1280: {
            slidesPerView: 4,
          },
        }}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 1,
        }}
        pagination={{ clickable: true }}
        modules={[Autoplay, EffectCoverflow, Pagination]}
        onSlideChange={handleSlideChange}
        autoplay={{
          delay: 5000,
          stopOnLastSlide: false,
          disableOnInteraction: false,
          speed: 200,
        }}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="bg-white p-4 flex flex-col items-center rounded-lg shadow-lg w-full">
              <div className="w-full aspect-1 flex items-center justify-center">
                <img
                  src={slide.src}
                  alt={slide.eventName}
                  className="max-h-96 object-contain"
                />
              </div>
              <div className="text-center py-4 text-black">Description</div>
            </div>
          </SwiperSlide>
        ))}
        <div className="swiper-pagination"></div>
      </Swiper>
    </div>
  );
};

export default Gallery;
