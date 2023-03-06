import React from "react";
import "./kitabturleri.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/scss/navigation";
import "swiper/scss";
import "swiper/scss/pagination";
import { Navigation, Scrollbar, A11y } from "swiper";

const KitabTurleri = () => {
  return (
    <div id="kitabturleri">
      <div className="container">
        <div className="publish">
          <div className="yayin">
            <div className="text">Yazarlar</div>
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
                            src="https://img.kitapyurdu.com/v1/getImage/fn:11450297/wh:b4254286f"
                            alt=""
                            width="100"
                            height="100"
                          />
                          <h6>Edebiyyat</h6>
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
                            src="https://img.kitapyurdu.com/v1/getImage/fn:11450301/wh:d7d45cfa7"
                            alt=""
                            width="100"
                            height="100"
                          />
                          <h6>Cocuk kitablari</h6>
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
                            src="https://img.kitapyurdu.com/v1/getImage/fn:11450301/wh:d7d45cfa7"
                            alt=""
                            width="100"
                            height="100"
                          />
                          <h6>Cocuk kitablari</h6>
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
                            src="https://img.kitapyurdu.com/v1/getImage/fn:11450301/wh:d7d45cfa7"
                            alt=""
                            width="100"
                            height="100"
                          />
                          <h6>Cocuk kitablari</h6>
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
                            src="https://img.kitapyurdu.com/v1/getImage/fn:11450301/wh:d7d45cfa7"
                            alt=""
                            width="100"
                            height="100"
                          />
                          <h6>Cocuk kitablari</h6>
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
                            src="https://img.kitapyurdu.com/v1/getImage/fn:11450301/wh:d7d45cfa7"
                            alt=""
                            width="100"
                            height="100"
                          />
                          <h6>Cocuk kitablari</h6>
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
                            src="https://img.kitapyurdu.com/v1/getImage/fn:11450301/wh:d7d45cfa7"
                            alt=""
                            width="100"
                            height="100"
                          />
                          <h6>Cocuk kitablari</h6>
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

export default KitabTurleri;
