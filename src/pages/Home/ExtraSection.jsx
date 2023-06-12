import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";

import { Grid, Pagination } from "swiper";
import {Slide } from "react-awesome-reveal";


const ExtraSection = () => {
    return (
        < >

            <h1 className="text-3xl font-bold text-center ">From the Blog</h1>
            <p className="text-2xl font-semibold text-center text-amber-300 mb-6">Reinvigorate Mind, Body & Soul</p>

            <Slide>
            <Swiper
        slidesPerView={3}
        Grid={{
          rows: 2,
        }}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Grid, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide><img className="rotate-360" src="https://i.ibb.co/fpxspdf/1.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://i.ibb.co/2cwnykt/7-580x410.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://i.ibb.co/4mT8Ftw/4-580x410.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://i.ibb.co/qn8JwT4/2-580x410.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://i.ibb.co/stsPyHj/5.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://i.ibb.co/wyyJXBM/gallery2.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://i.ibb.co/M1pyyGg/gallery4.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://i.ibb.co/M1pyyGg/gallery4.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://i.ibb.co/stsPyHj/5.jpg" alt="" /></SwiperSlide>
      </Swiper>
            </Slide>
         
        </>
    );
};

export default ExtraSection;