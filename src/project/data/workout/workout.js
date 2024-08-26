import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore from "swiper";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "./gallery.css";

// Import your movie posters
import Image from './images/workout1.png';
import Image2 from './images/workout2.png';
import Image3 from './images/workout3.png';

const Wokout = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    SwiperCore.use([Navigation, Pagination, Autoplay]);

    setMovies([
      {
        title: "Guardians of the Galaxy",
        poster: Image,
        url: "#",
      },
      {
        title: "Justice League",
        poster: Image2,
        url: "#",
      },
      {
        title: "Spider-Man",
        poster: Image3,
        url: "#",
      },
      {
        title: "Avengers",
        poster: Image2,
        url: "#",
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
        {movies.map((movie, index) => (
        
          <SwiperSlide key={index}>
            <div className="movie-card">
              <img src={movie.poster} alt={movie.title} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Wokout;
