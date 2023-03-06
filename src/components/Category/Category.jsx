import React from "react";
import "./category.scss";

const Category = () => {
  return (
    <div id="yazarlar">
      <div className="bottom">
        <div className="d-flex">
          <div className="col-lg-4 my-2 col-12">
            <div className="box">
              <div className="image">
                <img
                  src="https://thumbs.dreamstime.com/b/fyodor-dostoyevsky-26656501.jpg"
                  alt=""
                />
              </div>
              <div className="text">
                <h4>Kateqoriya adi</h4>
                <span>Bütün məhsullara baxın</span>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-12 my-2">
            <div className="box">
              <div className="image">
                <img
                  src="https://cdn.pixabay.com/photo/2018/05/10/08/59/book-3387071_960_720.jpg"
                  alt=""
                />
              </div>
              <div className="text">
                <h4>Yazarin adi</h4>
                <span>Bütün məhsullara baxın</span>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-12 my-2">
            <div className="box">
              <div className="image">
                <img
                  src="https://cdn.pixabay.com/photo/2016/01/26/10/56/table-1162230_960_720.jpg"
                  alt=""
                />
              </div>
              <div className="text">
                <h4>Yazarin adi</h4>
                <span>Bütün məhsullara baxın</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
