import React from "react";
import Banner from "../../Assets/Banner/banner.jpg";
import SmallerGallery from "../../Components/SmallerGallery/SmallerGallery";
import "./Home.css";
function Home() {
  return (
    <>
      <div className="banner">
        <img className='banner'src={Banner} alt="error loading image" />
        <h1 className="landingText">
          Here are some amazing landscape pictures.
        </h1>
        <SmallerGallery />
      </div>
      {/*  <Gallery /> */}
    </>
  );
}

export default Home;
