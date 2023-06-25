"use client";
import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const AppCarousel = ({ children }) => {
  return <Carousel infiniteLoop>{children}</Carousel>;
};

export default AppCarousel;
