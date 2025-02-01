/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Room from "../Room";

const RoomSlider = () => {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div>
      <div className="p-10">
        <h2 className="text-center text-[30px] font-bold text-black underline underline-offset-4 dark:text-slate-300">
          Upcoming eBooks
        </h2>
        <br />
        <br />
        <div className=" ">
          <Slider {...settings}>
            <Room />
            <Room />
            <Room />
            <Room />
            <Room />
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default RoomSlider;
