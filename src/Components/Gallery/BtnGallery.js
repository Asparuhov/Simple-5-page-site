import React from "react";
import "./Gallery.css";
import leftArrow from "../../Assets/icons/left-arrow.svg";
import rightArrow from "../../Assets/icons/right-arrow.svg";

export default function BtnGallery({ direction, moveSlide }) {
  console.log(direction, moveSlide);
  return (
    <button
      onClick={moveSlide}
      className={direction === "next" ? "btn-slide next" : "btn-slide prev"}
    >
      <img src={direction === "next" ? rightArrow : leftArrow} />
    </button>
  );
}
