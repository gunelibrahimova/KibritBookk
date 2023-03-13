import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProductsFailure, getProductsStart, getProductsSuccess } from "../../redux/Reducer/productsSlice";
import "./language.scss";

const Language = () => {
  const dispatch = useDispatch();
  const products = useSelector(state => state.products.products);
  const isLoading = useSelector(state => state.products.isLoading);
  const error = useSelector(state => state.products.error);

  useEffect(() => {
    dispatch(getProductsStart());
    // Fetch products from an API
    fetch('https://localhost:44351/api/Language/getall')
      .then(response => response.json())
      .then(data => dispatch(getProductsSuccess(data)))
      .catch(error => dispatch(getProductsFailure(error.message)));
  }, [dispatch]);

  return (
    <div id="language">
      <div className="container">
        <div className="publish">
          <div className="yayin">
            <div className="text">Dünya dilləri</div>
          </div>
          <div className="bottom">
            <div className="row">
              {
                products.map(e => (
                  <div className="col-lg-3">
                    <img
                      className="pub-image"
                      src={e.photo}
                      alt=""
                      width="100"
                      height="100"
                    />
                    <h6>{e.name}</h6>
                  </div>
                ))
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Language;
