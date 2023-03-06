import React from "react";
import "./stocks.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/scss/navigation";
import "swiper/scss";
import "swiper/scss/pagination";
import { Navigation, Scrollbar, A11y } from "swiper";

const Stocks = () => {
  return (
    <div id="stocks">
      <div className="container">
        <div className="title">
          <h6>ƏLDƏ OLAN KİTABLAR</h6>
        </div>
        <div className="books">
          <div className="bottom">
            <Swiper
              modules={[Navigation, Scrollbar, A11y]}
              spaceBetween={2}
              slidesPerView={4}
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
                            src="https://cdn.pixabay.com/photo/2016/01/26/10/56/table-1162230_960_720.jpg"
                            alt=""
                          />
                          <div className="icons">
                            <i class="fa-solid fa-eye icon"></i>
                            <br />
                            <i class="fa-solid fa-heart icon"></i>
                            <br />
                            <i class="fa-solid fa-bag-shopping icon"></i>
                          </div>
                        </div>
                        <div className="text">
                          <span className="box1 super">kitabin adi</span>
                          <span className="box1 number">qiymeti</span>
                          <span className="sebet">Səbətə at</span>
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
                            src="https://cdn.pixabay.com/photo/2016/01/26/10/56/table-1162230_960_720.jpg"
                            alt=""
                          />
                          <div className="icons">
                            <i class="fa-solid fa-eye icon"></i>
                            <br />
                            <i class="fa-solid fa-heart icon"></i>
                            <br />
                            <i class="fa-solid fa-bag-shopping icon"></i>
                          </div>
                        </div>
                        <div className="text">
                          <span className="box1 super">kitabin adi</span>
                          <span className="box1 number">qiymeti</span>
                          <span className="sebet">Səbətə at</span>
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
                            src="https://cdn.pixabay.com/photo/2016/01/26/10/56/table-1162230_960_720.jpg"
                            alt=""
                          />
                          <div className="icons">
                            <i class="fa-solid fa-eye icon"></i>
                            <br />
                            <i class="fa-solid fa-heart icon"></i>
                            <br />
                            <i class="fa-solid fa-bag-shopping icon"></i>
                          </div>
                        </div>
                        <div className="text">
                          <span className="box1 super">kitabin adi</span>
                          <span className="box1 number">qiymeti</span>
                          <span className="sebet">Səbətə at</span>
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
                            src="https://cdn.pixabay.com/photo/2016/01/26/10/56/table-1162230_960_720.jpg"
                            alt=""
                          />
                          <div className="icons">
                            <i class="fa-solid fa-eye icon"></i>
                            <br />
                            <i class="fa-solid fa-heart icon"></i>
                            <br />
                            <i class="fa-solid fa-bag-shopping icon"></i>
                          </div>
                        </div>
                        <div className="text">
                          <span className="box1 super">kitabin adi</span>
                          <span className="box1 number">qiymeti</span>
                          <span className="sebet">Səbətə at</span>
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
                            src="https://cdn.pixabay.com/photo/2016/01/26/10/56/table-1162230_960_720.jpg"
                            alt=""
                          />
                          <div className="icons">
                            <i class="fa-solid fa-eye icon"></i>
                            <br />
                            <i class="fa-solid fa-heart icon"></i>
                            <br />
                            <i class="fa-solid fa-bag-shopping icon"></i>
                          </div>
                        </div>
                        <div className="text">
                          <span className="box1 super">kitabin adi</span>
                          <span className="box1 number">qiymeti</span>
                          <span className="sebet">Səbətə at</span>
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
                            src="https://cdn.pixabay.com/photo/2016/01/26/10/56/table-1162230_960_720.jpg"
                            alt=""
                          />
                          <div className="icons">
                            <i class="fa-solid fa-eye icon"></i>
                            <br />
                            <i class="fa-solid fa-heart icon"></i>
                            <br />
                            <i class="fa-solid fa-bag-shopping icon"></i>
                          </div>
                        </div>
                        <div className="text">
                          <span className="box1 super">kitabin adi</span>
                          <span className="box1 number">qiymeti</span>
                          <span className="sebet">Səbətə at</span>
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

export default Stocks;
