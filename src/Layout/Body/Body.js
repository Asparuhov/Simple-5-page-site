import React from "react";
import "./Body.css";
import Home from "../../Pages/Home/Home";
import { Route } from "react-router-dom";
import About from "../../Pages/About/About";
import GalleryPage from "../../Pages/GalleryPage/GalleryPage";
import Contact from "../../Pages/Contact/Contact";
const Body = () => {
  return (
    <div className="body">
      <Route path="/" exact component={Home} />
      <Route path="/about" exact component={About} />
      <Route path="/gallery" exact component={GalleryPage} />
      <Route path="/contact" exact component={Contact} />
    </div>
  );
};

export default Body;
