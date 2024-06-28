import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { useNavigate } from "react-router-dom";
import { eventData, eventOrder } from "../data/eventsdata";

const importAll = (r) => {
  let images = {};
  r.keys().map((item) => {
    images[item.replace("./", "")] = r(item);
    return null;
  });
  return images;
};

const images = importAll(
  require.context("../data/images/events", true, /main\.(jpg|JPG|png|webp)$/)
);

const Events = () => {
  const navigate = useNavigate();
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [slides, setSlides] = useState([]);
  const [currentEvent, setCurrentEvent] = useState("");

  useEffect(() => {
    const eventSlides = eventOrder.map((key) => ({
      src: images[key],
      eventName: key,
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
    <div className="relative min-h-screen bg-transparent flex flex-col items-center justify-center">
      {isMobile ? (
        <div>
          <div className="text-white text-7xl font-bold text-center pt-32">Events</div>
            <div className="w-full max-w-6xl px-8">
              {slides.map((slide, index) => (
                <div key={index} className="my-16">
                  <div className="flex justify-center">
                    <img
                      src={eventData[slide.eventName]?.imageUrl || slide.src}
                      alt={slide.eventName}
                      className="w-auto h-auto rounded-xl object-full my-8"
                      onClick={() => handleNavigateToGallery(slide.eventName)}
                    />
                  </div>
                  <div className="rounded-[24px] p-0.5 bg-gradient-to-b flex justify-center from-b_col3 to-b_col4 w-auto h-auto shadow-2xl shadow-[#7ac4ec]/30 mt-4">
                    <div className="rounded-[calc(24px-1px)] p-8 bg-gradient-to-b w-full from-[#061b24] from-2% via-[#072031] to-[#000b11] to-9% h-full flex flex-col justify-between text-center text-white max-w-[700px]">
                      <h2 className="text-[5vw] text-b_col3 font-semibold mb-2">
                        {eventData[slide.eventName]?.title}
                      </h2>
                      <p className="text-[2.5vw]">
                        {eventData[slide.eventName]?.description}
                      </p>
                      <div className="pt-6">
                        <button
                          className="border-2 border-solid border-teal-500 p-3 rounded-full bg-gradient-to-r from-b_col1 to-b_col2"
                          onClick={() => handleNavigateToGallery()}
                        >
                          <span className="text-teal-500 font-light text-lg">
                            View Gallery &gt;
                          </span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      ) : (
        <section className="min-h-screen text-white grid grid-cols-1 place-items-center">
          <div className="w-full px-6">
            <div className="text-7xl font-bold text-center mt-16 mb-8">
              Events
            </div>
            <Swiper
              modules={[Navigation]}
              navigation
              spaceBetween={50}
              slidesPerView={1}
              speed={600}
              onSlideChange={handleSlideChange}
            >
              {slides.map((slide, index) => (
                <SwiperSlide key={index}>
                  <div className="grid grid-cols-1 xl:grid-cols-2 mx-20 gap-4 items-center place-items-center py-8">
                    <img
                      src={eventData[slide.eventName]?.imageUrl || slide.src}
                      alt={slide.eventName}
                      className="w-auto max-h-[450px] object-cover rounded-xl shadow-2xl shadow-[#7ac4ec]/30"
                      onClick={() => handleNavigateToGallery(slide.eventName)}
                    />
                    <div className="rounded-[36px] p-0.5 bg-gradient-to-b flex justify-center from-b_col3 to-b_col4 h-auto lg:w-[500px] shadow-2xl shadow-[#7ac4ec]/30">
                      <div className="rounded-[calc(36px-1px)] p-12 h-auto bg-gradient-to-b w-full from-[#061b24] via-[#072031] to-[#000b11] flex flex-col text-center text-white max-w-[559px]">
                        <h2 className="text-[4vh] lg:text-[5vh] xl:text-[6vh] text-b_col3 font-semibold mb-4">
                          {eventData[slide.eventName]?.title}
                        </h2>
                        <p className="text-[1.6vh] lg:text-[1.75vh] xl:text-[2vh]">
                          {eventData[slide.eventName]?.description}
                        </p>
                        <div className="pt-8 flex justify-center">
                          <button
                            className="border-2 border-solid border-teal-500 p-4 rounded-full bg-gradient-to-r from-b_col1 to-b_col2"
                            onClick={() => handleNavigateToGallery(slide.eventName)}
                          >
                            <span className="text-teal-500 font-light text-lg">
                              View Gallery &gt;
                            </span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </section>
      )}
    </div>
  );
};

export default Events;
