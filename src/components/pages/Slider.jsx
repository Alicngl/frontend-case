import React from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { Navigation, EffectFade } from "swiper";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { Locations } from "../../constants";

const Slider = () => {
  const swiper = useSwiper();

  return (
    <div className=" justify-center w-full flex z-0">
      <div className="flex justify-center pt-5 max-w-7xl items-center">
        <Swiper
          modules={[Navigation, EffectFade]}
          navigation
          speed={800}
          spaceBetween={21}
          slidesPerView={4}
          loop>
          {Locations.map((x, index) => {
            return (
              <SwiperSlide
                key={index}
                justify={"flex-start"}
                height={"21rem"}
                rounded={"md"}
                p="1rem"
                bg={"#232223"}
                color={"#6C757D"}>
                <div className="">
                  <img
                    src={x.img}
                    width={"320px"}
                    height={"250px"}
                    className=" max-h-[9rem] z-0"
                  />
                  <p className="text-center">{x.title}</p>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
};

export default Slider;
