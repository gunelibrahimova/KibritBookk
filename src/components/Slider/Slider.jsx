import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {Autoplay} from 'swiper';
import "swiper/css";
import "swiper/css/navigation";
import "./slider.scss";
import { Navigation } from "swiper";



export default function App() {

 SwiperCore.use([Autoplay])
    return (
        <div id="slider">
            <Swiper navigation={true} modules={[Navigation, Autoplay ]} autoplay={{delay: 3000}} className="mySwiper">
                <SwiperSlide>
                    <div className="image">
                        <img width="100%" src="https://cdn.pixabay.com/photo/2018/03/19/18/20/tea-time-3240766_960_720.jpg" alt="" />
                        <div className="text">
                            <h1 className="text-h1">Sərfəli</h1>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="image">
                        <img width="100%" src="https://cdn.pixabay.com/photo/2019/05/14/21/50/storytelling-4203628_960_720.jpg" alt="" />
                        <div className="text">
                            <h1 className="text-h1" style={{color: "black"}}>Havali</h1>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="image">
                        <img width="100%" src="https://cdn.pixabay.com/photo/2017/03/17/10/29/coffee-2151200_960_720.jpg" alt="" />
                        <div className="text">
                            <h1 className="text-h1">Zövqlü</h1>
                        </div>
                    </div>
                </SwiperSlide>

            </Swiper>
        </div>
    );
}