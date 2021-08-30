import React from "react";
import "./SmallerGallery.css";
import photos from "../../Components/Gallery/dataGallery";
const SmallerGallery = (props) => {
  let photosReady = null;
  if (photos) {
    photosReady = photos
      .map((photo) => {
        return (
          <div className="Item">
            <img src={photo.url} alt="Error loading" />
          </div>
        );
      })
      .reverse();
  }
  return (
    <>
      <div className="photos">{photosReady}</div>
    </>
  );
};

export default SmallerGallery;
