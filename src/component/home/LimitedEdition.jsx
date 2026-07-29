import React, { useEffect, useState } from "react";
import Tittle from "../common/Tittle";
import axios from "axios";
import Product from "../common/Product";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { IoIosArrowForward ,IoIosArrowBack } from "react-icons/io";

const LimitedEdition = () => {
  let [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("https://api.escuelajs.co/api/v1/products?_limit=10")
      .then((res) => {
        setProducts(res.data);
      })
      .catch((err) => {
        throw new Error("Somthing went wrong");
      }, []);
  });
  return (
    <section className="mt-22.75">
      <div className="container relative">
        <Tittle name="LIMITED" namebold="EDITION" />
        <div className="mt-7.75">
          <Swiper
            slidesPerView={4}
            navigation={
            {nextEl:".next-button",
             prevEl:".prev-button" }
            }
            modules={[Navigation]}
            className="mySwiper"
          >
            {products.map((item) => (
              <SwiperSlide>
                <Product item={item} key={item.id} />
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="slidebtn">
            <button className="prev-button absolute top-2/4 translate-y-[-50%] -left-6 z-20">
            <IoIosArrowBack className="text-gray" size={25} />
             </button>
            <button className="next-button absolute top-2/4 translate-y-[-50%] -right-6 z-20">
            <IoIosArrowForward size={25} className="text-gray" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LimitedEdition;
