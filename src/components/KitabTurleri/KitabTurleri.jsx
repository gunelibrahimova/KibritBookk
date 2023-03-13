import React from "react";
import "./kitabturleri.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/scss/navigation";
import "swiper/scss";
import "swiper/scss/pagination";
import { Navigation, Scrollbar, A11y } from "swiper";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getGenreFailure, getGenreStart, getGenreSuccess } from "../../redux/Reducer/genreSlice";

const KitabTurleri = () => {
  const dispatch = useDispatch();
  const {genre} = useSelector(state => state.genre);
  const isLoading = useSelector(state => state.genre.isLoading);
  const error = useSelector(state => state.genre.error);

  useEffect(() => {
    dispatch(getGenreStart());
    // Fetch products from an API
    fetch('https://localhost:44351/api/Genre/getall')
      .then(response => response.json())
      .then(data => dispatch(getGenreSuccess(data)))
      .catch(error => dispatch(getGenreFailure(error.message)));
  }, [dispatch]);

  return (
    <div id="kitabturleri">
      <div className="container">
        <div className="publish">
          <div className="yayin">
            <div className="text">Janrlar</div>
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
                genre &&
                genre.map(e => (
                  <SwiperSlide>
                <div className="containerr">
                  <div className="row align-items-center">
                    <div className="col-lg-12">
                      <div className="box">
                        <div className="image">
                          <img
                            className="pub-image"
                            src={e.photo}
                            alt=""
                            width="100"
                            height="100"
                          />
                          <h6>{e.name}</h6>
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

export default KitabTurleri;
