import React from "react";
import "./publisher.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/scss/navigation";
import "swiper/scss";
import "swiper/scss/pagination";
import { Navigation, Scrollbar, A11y } from "swiper";

const Publisher = () => {
  return (
    <div id="publisher">
      <div className="container">
        <div className="publish">
          <div className="yayin">
            <div className="text">Yayin evleri</div>
          </div>
          <div className="bottom">
            <Swiper
              modules={[Navigation, Scrollbar, A11y]}
              spaceBetween={2}
              slidesPerView={5}
              navigation
              scrollbar={{ draggable: false }}
            >
              <SwiperSlide>
                <div className="containerr">
                  <div className="row align-items-center">
                    <div className="col-lg-12">
                      <div className="box">
                        <div className="image">
                          <img
                            className="pub-image"
                            src="https://img.kitapyurdu.com/v1/getImage/fn:5734296/wi:100/wh:38252d3b2"
                            alt=""
                            width="100"
                            height="100"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="containerr">
                  <div className="row align-items-center">
                    <div className="col-lg-12">
                      <div className="box">
                        <div className="image">
                          <img
                            className="pub-image"
                            src="https://img.kitapyurdu.com/v1/getImage/fn:5734296/wi:100/wh:38252d3b2"
                            alt=""
                            width="100"
                            height="100"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="containerr">
                  <div className="row align-items-center">
                    <div className="col-lg-12">
                      <div className="box">
                        <div className="image">
                          <img
                            className="pub-image"
                            src="https://img.kitapyurdu.com/v1/getImage/fn:5734296/wi:100/wh:38252d3b2"
                            alt=""
                            width="100"
                            height="100"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="containerr">
                  <div className="row align-items-center">
                    <div className="col-lg-12">
                      <div className="box">
                        <div className="image">
                          <img
                            className="pub-image"
                            src="https://img.kitapyurdu.com/v1/getImage/fn:5734296/wi:100/wh:38252d3b2"
                            alt=""
                            width="100"
                            height="100"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="containerr">
                  <div className="row align-items-center">
                    <div className="col-lg-12">
                      <div className="box">
                        <div className="image">
                          <img
                            className="pub-image"
                            src="https://img.kitapyurdu.com/v1/getImage/fn:5734296/wi:100/wh:38252d3b2"
                            alt=""
                            width="100"
                            height="100"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="containerr">
                  <div className="row align-items-center">
                    <div className="col-lg-12">
                      <div className="box">
                        <div className="image">
                          <img
                            className="pub-image"
                            src="https://img.kitapyurdu.com/v1/getImage/fn:5734296/wi:100/wh:38252d3b2"
                            alt=""
                            width="100"
                            height="100"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="containerr">
                  <div className="row align-items-center">
                    <div className="col-lg-12">
                      <div className="box">
                        <div className="image">
                          <img
                            className="pub-image"
                            src="https://img.kitapyurdu.com/v1/getImage/fn:5734296/wi:100/wh:38252d3b2"
                            alt=""
                            width="100"
                            height="100"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="containerr">
                  <div className="row align-items-center">
                    <div className="col-lg-12">
                      <div className="box">
                        <div className="image">
                          <img
                            className="pub-image"
                            src="https://img.kitapyurdu.com/v1/getImage/fn:5734296/wi:100/wh:38252d3b2"
                            alt=""
                            width="100"
                            height="100"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Publisher;
