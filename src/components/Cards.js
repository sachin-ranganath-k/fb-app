import React from "react";
import '../css/Cards.css'

const Cards = ({ userName, image }) => {
  return (
    <div>
      <div className="card" style={{ width: "500px" }}>
        <div className="container">
          <br />
          <p style={{ color: "black" }} data-testid="userName">
            <img src={image} width="80px" style={{ borderRadius: "50px" }} />
            &nbsp;&nbsp;{userName}
          </p>
          <img
            className="card-img-top"
            src={image}
            alt="Card image"
            style={{ width: "100%" }}
          />
          <div className="card-body">
            <div className="col-md-12">
              <div className="row">
                <div className="reaction col-md-3">
                  <a href="#">
                    React
                  </a>
                </div>
                <div className="reaction col-md-3">
                  <a href="#">
                    Comment
                  </a>
                </div>
                <div className="reaction col-md-3">
                  <a href="#">
                    Share
                  </a>
                </div>
                <div className="reaction col-md-3">
                  <a href="#">
                    Save
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
