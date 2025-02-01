// eslint-disable-next-line no-unused-vars
import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const Room = () => {

    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
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
        <div className="px-8 lg:px-24 py-10 text-dark-text text-center">
            <h2 className="font-bold text-2xl lg:text-3xl mb-2">Browse The Range</h2>
            <p className="text-[#666] lg:text-lg mb-12">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <div className=" w-full ">
              
            <Slider {...settings}>
              
            <div className="font-semibold text-xl">
                    <img loading="lazy" className="rounded-lg bg-cover object-cover object-left mb-6 h-[50vh] lg:h-[80vh] 
                    w-[90%]" 
                    src="https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Living"/>
                    <p>Livingroom</p>
                </div>

                <div className="font-semibold text-xl">
                    <img loading="lazy" className="rounded-lg bg-cover object-cover object-left mb-6 h-[50vh] lg:h-[80vh] w-[90%]" 
                    src="https://images.pexels.com/photos/3144581/pexels-photo-3144581.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Living"/>
                    <p>Dining</p>
                </div>
               
                <div className="font-semibold text-xl">
                    <img loading="lazy" className="rounded-lg bg-cover object-cover object-left mb-6 h-[50vh] lg:h-[80vh] w-[90%]" 
                    src="https://images.pexels.com/photos/90319/pexels-photo-90319.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Living"/>
                    <p>Bedroom</p>
                </div>
                <div className="font-semibold text-xl">
                    <img loading="lazy" className="rounded-lg bg-cover object-cover object-left mb-6 h-[50vh] lg:h-[80vh] w-[90%]" 
                    src="https://images.pexels.com/photos/2062426/pexels-photo-2062426.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Living"/>
                    <p>Kitchen</p>
                </div>
                <div className="font-semibold text-xl">
                    <img loading="lazy" className="rounded-lg bg-cover object-cover object-left mb-6 h-[50vh] lg:h-[80vh] w-[90%]" 
                    src="https://images.pexels.com/photos/3741317/pexels-photo-3741317.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Living"/>
                    <p>Washroom</p>
                </div>
                <div className="font-semibold text-xl">
                    <img loading="lazy" className="rounded-lg bg-cover object-cover object-left mb-6 h-[50vh] lg:h-[80vh] w-[90%]" 
                    src="https://images.pexels.com/photos/15717924/pexels-photo-15717924/free-photo-of-white-mattress-and-pillows-on-a-bed.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Living"/>
                    <p>Guestroom</p>
                </div>
                <div className="font-semibold text-xl">
                    <img loading="lazy" className="rounded-lg bg-cover object-cover object-left mb-6 h-[50vh] lg:h-[80vh] w-[90%]" 
                    src="https://images.pexels.com/photos/3775620/pexels-photo-3775620.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Living"/>
                    <p>Studyroom</p>
                </div>
                <div className="font-semibold text-xl">
                    <img loading="lazy" className="rounded-lg bg-cover object-cover object-left mb-6 h-[50vh] lg:h-[80vh] w-[90%]" 
                    src="https://media.istockphoto.com/id/1405572693/photo/personal-training-studio-with-barbell-dumbbells-exercise-bike-and-garden-view-from-the-window.jpg?s=1024x1024&w=is&k=20&c=8lzYFc4MqrYRBJJ9iV3k5NbFW87B7SX4N56EoVjQmLE=" alt="Living"/>
                    <p>Gymroom</p>
                </div>
                <div className="font-semibold text-xl">
                    <img loading="lazy" className="rounded-lg bg-cover object-cover object-left mb-6 h-[50vh] lg:h-[80vh] w-[90%]" 
                    src="https://images.pexels.com/photos/920025/pexels-photo-920025.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Living"/>
                    <p>Balcony</p>
                </div>
                <div className="font-semibold text-xl">
                    <img loading="lazy" className="rounded-lg bg-cover object-cover object-left mb-6 h-[50vh] lg:h-[80vh] w-[90%]" 
                    src="https://media.istockphoto.com/id/483097318/photo/beauty-toys-in-childs-room.jpg?s=1024x1024&w=is&k=20&c=0mnCg52-YBGJL4Q6JayC1DlWKvW2RRZwLFet4M12_ZY=" alt="Living"/>
                    <p>Playroom</p>
                </div>

                </Slider>

            </div>
        </div>
    </div>
  )
}

export default Room