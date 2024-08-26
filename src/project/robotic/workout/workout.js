import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore from "swiper";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "./gallery.css";

// Import your movie posters
import Image from './images/w1.png';
import Image2 from './images/w2.png';
import Image3 from './images/w3.png';
import Image4 from './images/w4.png';
import Image5 from './images/w5.png';

const Workout = () => {
  const [workout, setWorkout] = useState([]);

  useEffect(() => {
    SwiperCore.use([Navigation, Pagination, Autoplay]);

    setWorkout([
      {
        img: Image,
      },
      {
        img: Image2,
      },
      {
        img: Image3,
      },
      {
        img: Image4,
      },
      {
        img: Image5,
      },
    ]);
  }, []);

  return (
    <div className="container">
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 2000, disableOnInteraction: false }}
      >
        {workout.map((workout, index) => (
        
          <SwiperSlide key={index}>
            <div className="work-card">
              <img src={workout.img} alt="workout" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Workout;
