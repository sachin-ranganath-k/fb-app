import React from "react";
import Images from "../images/nature1.jpg";

const Photos = () => {
  const photos = [Images, Images, Images, Images, Images, Images];

  return (
    <div className="container">
      <br />
      <div className="col-md-12">
        <div className="row">
          {photos.map((photo) => (
            <div className="col-md-4">
              <div class="shadow-lg p-3 mb-6 bg-body rounded">
                <a href={photo}>
                  <img src={photo} height="300px" width="300px" />{" "}
                </a>
              </div>
              <br />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Photos;
