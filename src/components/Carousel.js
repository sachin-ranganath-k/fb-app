import React, { Component } from "react";
import Img1 from "../images/nature1.jpg";

class CarouselSlide extends Component {
  render() {
    return (
      <div>
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#demo"
            data-bs-slide-to="0"
            className="active"
          ></button>
          <button
            type="button"
            data-bs-target="#demo"
            data-bs-slide-to="1"
          ></button>
          <button
            type="button"
            data-bs-target="#demo"
            data-bs-slide-to="2"
          ></button>
        </div>

        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src={Img1}
              alt="Los Angeles"
              className="d-block"
              style={{ width: "100px", height: "100px" }}
            />
          </div>
          <div className="carousel-item">
            <img
              src=""
              alt="Chicago"
              className="d-block"
              style={{ width: "100%" }}
            />
          </div>
          <div className="carousel-item">
            <img
              src=""
              alt="New York"
              className="d-block"
              style={{ width: "100%" }}
            />
          </div>
        </div>

        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#demo"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon"></span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#demo"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon"></span>
        </button>
      </div>
    );
  }
}

export default CarouselSlide;
