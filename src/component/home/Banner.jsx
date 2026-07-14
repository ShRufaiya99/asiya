import React from "react";
import bannerData from "../../api/bannerData.json";
import Image from "../common/Image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
const Banner = () => {
  return (
    <section className="mx-5">

      <Swiper
        pagination={{ clickable: true }}
        modules={[Pagination]}
        className="mySwiper"
      >
         {bannerData.map((item) => (
           <SwiperSlide>
           <Image className="w-full h-[600px]" key={item.id} src={item.image} alt="banner" />
           </SwiperSlide>  
    ))}
     </Swiper>
    </section>
  );
};

export default Banner;
