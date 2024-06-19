import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, EffectCoverflow, Pagination } from "swiper/modules";
import { useNavigate } from "react-router-dom";

const importAll = (r) => {
  let images = {};
  r.keys().map((item) => {
    images[item.replace("./", "")] = r(item);
    return null;
  });
  return images;
};

const images = importAll(
  require.context("../data/images/events", true, /main\.(jpg|JPG|png)$/)
);

const Events = () => {
  const navigate = useNavigate();
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [slides, setSlides] = useState([]);
  const [currentEvent, setCurrentEvent] = useState("");

  useEffect(() => {
    const eventSlides = Object.keys(images).map((key) => ({
      src: images[key],
      eventName: key.split("/")[0],
    }));
    setSlides(eventSlides);
    if (eventSlides.length > 0) {
      setCurrentEvent(eventSlides[0].eventName);
    }

    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleNavigateToGallery = (eventName) => {
    navigate(`/gallery/${eventName || currentEvent}`);
  };

  const handleSlideChange = (swiper) => {
    if (slides.length > 0) {
      setCurrentEvent(slides[swiper.realIndex]?.eventName || "");
    }
  };

  return (
    <div className="min-h-screen bg-transparent flex flex-col pl-4 ml-4 items-center justify-center">
      {isMobile ? (
        <div className="w-full max-w-6xl px-4">
          {slides.map((slide, index) => (
            <div key={index} className="mb-4">
              <div className="text-white text-5xl font-bold mt-16 text-center">{slide.eventName.toUpperCase()}</div>
              <img
                src={slide.src}
                alt={slide.eventName}
                className="w-full h-auto rounded-xl object-cover"
                onClick={() => handleNavigateToGallery(slide.eventName)}
              />
            </div>
          ))}
        </div>
      ) : (
        <>
          <div className="text-white text-5xl font-bold mb-4 mt-20 text-center ">{currentEvent.toUpperCase()}</div>
          <Swiper
          effect="coverflow"
          grabCursor={true}
          centeredSlides={true}
          loop={true}
          slidesPerView={3}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 1,
          }}
          pagination={{ clickable: true }}
          modules={[Autoplay, EffectCoverflow, Pagination]}
          className="w-full max-w-6xl"
          onSlideChange={handleSlideChange}
          autoplay={{
            delay: 2000,
            stopOnLastSlide: false,
            disableOnInteraction: false,
            speed: 2000,
            loop: true,
          }}
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
              <img
                src={slide.src}
                alt={slide.eventName}
                className="w-full h-[500px] rounded-xl object-cover"
              />
            </SwiperSlide>
          )
          )}
          <div className="swiper-pagination"></div>
        </Swiper>
        </>
      )}
      {!isMobile && (
        <button
          className="border-2 border-solid border-teal-500 p-3 rounded-full bg-gradient-to-r from-b_col1 to-b_col2 mt-8"
          onClick={() => handleNavigateToGallery()}
        >
          <span className="text-teal-500 font-light text-lg">
            View Gallery &gt;
          </span>
        </button>
      )}
    </div>
  );
};

export default Events;
