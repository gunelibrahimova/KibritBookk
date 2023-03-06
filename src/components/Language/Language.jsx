import React from "react";
import "./language.scss";

const Language = () => {
  return (
    <div id="language">
      <div className="container">
        <div className="publish">
          <div className="yayin">
            <div className="text">Dünya dilləri</div>
          </div>
          <div className="bottom">
            <div className="row">
              <div className="col-lg-3">
                <img
                  className="pub-image"
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Flag_of_Azerbaijan.svg/1024px-Flag_of_Azerbaijan.svg.png"
                  alt=""
                  width="100"
                  height="100"
                />
                <h6>Azərbaycanca</h6>
              </div>
              <div className="col-lg-3">
                <img
                  className="pub-image"
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Flag_of_Turkey.svg/255px-Flag_of_Turkey.svg.png"
                  alt=""
                  width="100"
                  height="100"
                />
                <h6>Türkcə</h6>
              </div>
              <div className="col-lg-3">
                <img
                  className="pub-image"
                  src="https://tercuman.az/wp-content/uploads/2019/12/ingilis-diline-tercume.jpg"
                  alt=""
                  width="100"
                  height="100"
                />
                <h6>İngiliscə</h6>
              </div>
              <div className="col-lg-3">
                <img
                  className="pub-image"
                  src="https://i7.unansea.com/image/90292efc709b0eae.jpg"
                  alt=""
                  width="100"
                  height="100"
                />
                <h6>Rusca</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Language;
