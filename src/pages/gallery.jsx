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
    <div className="min-h-screen bg-slate-950 events-container">
      <div className="pt-12 text-white text-7xl font-bold text-center pb-1">
        Gallery
      </div>
      <div className="text-white my-8 text-6xl font-light text-center pb-4">
        {currentEvent}
      </div>
      <Swiper
        effect="coverflow"
        className="w-full max-w-8xl"
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={5}
        breakpoints={{
          540: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
          1280: {
            slidesPerView: 5,
          },
        }}
        coverflowEffect={{
          rotate: -10,
          stretch: 0,
          depth: 100,
          modifier: 1,
        }}
        pagination={{ clickable: true }}
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
            <section className="bg-[#f4f3e9] px-4 pt-4 flex flex-col items-center justify-center">
              <img
                src={slide.src}
                alt={slide.eventName}
                style={{ maxWidth: "100%" }}
                className="w-full h-[400px] object-cover"
              />
              <section className="text-center py-12">Description</section>
            </section>
          </SwiperSlide>
        ))}
        <div className="swiper-pagination"></div>
      </Swiper>
    </div>
  );
};

export default Gallery;
