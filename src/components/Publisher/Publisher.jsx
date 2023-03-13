import React, { useEffect, useState } from "react";
import "./publisher.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/scss/navigation";
import "swiper/scss";
import "swiper/scss/pagination";
import { Navigation, Scrollbar, A11y } from "swiper";
import { BASE_URL } from "../../api/config";

const Publisher = () => {
  const [yayinevi, setYayinevi] = useState([]);

  const getPublisher = async () => {
    await fetch(BASE_URL + "publisher/getall")
      .then((a) => a.json())
      .then((data) => setYayinevi(data));
  };

  useEffect(() => {
    getPublisher();
  }, []);

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
              {
                yayinevi &&
                yayinevi.map((e) => (
                  <SwiperSlide>
                    <div className="containerr">
                      <div className="row align-items-center">
                        <div className="col-lg-12">
                          <div className="box">
                            <div className="image">
                              <img
                                className="pub-image"
                                src={e.photoURL}
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
                ))
              }




            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Publisher;
