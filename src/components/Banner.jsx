/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import "./styles.css";

function Banner() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      imageUrl: "https://static-koimoi.akamaized.net/wp-content/new-galleries/2023/08/gal-gadot-on-heart-of-stone-liked-being-involved-in-the-story-from-the-very-beginning.jpg",
      text: "Heart Of Stone"
    },
    {
      imageUrl: "https://latinitasmagazine.org/wp-content/uploads/2024/05/TurtlesAllTheWayDown_KA_16x9-2048x1152.jpg",
      text: "Turtles All The Way Down"
    },
    {
      imageUrl: "https://lewishamdreamer.files.wordpress.com/2020/08/img_1994.jpg",
      text: "Radioactive"
    },
    {
      imageUrl: "https://dx35vtwkllhj9.cloudfront.net/universalstudios/the-fall-guy/images/regions/us/header.jpg",
      text: "The Fall Guy"
    },
    {
      imageUrl: "https://rukminim2.flixcart.com/image/850/1000/juk4gi80/poster/s/g/3/large-newposter8503-movie-interstellar-hd-wallpaper-background-original-imaf5ttsfnfgt2zh.jpeg?q=90&crop=false",
      text: "Interstellar"
    },
    {
      imageUrl: "https://www.aaronnhall.com/wp-content/uploads/2021/10/no-time-to-die-980x490.jpg",
      text: "No Time To Die"
    },
    {
      imageUrl: "https://static-koimoi.akamaized.net/wp-content/new-galleries/2021/10/red-notice-actors-dwayne-johnson-gal-gadot-ryan-reynolds-expected-salary-for-their-work-will-blow-your-mind-001.jpg",
      text: "Red Notice"
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide === slides.length - 1 ? 0 : prevSlide + 1));
    }, 4000);

    return () => clearInterval(interval);
  }, [slides.length]);

  const handleDotClick = (index) => {
    setCurrentSlide(index);
  };

  return (
    <>
      <div
        className="bg-center bg-no-repeat relative border border-[#F1F5F2] rounded-l"
        style={{
          backgroundImage: `url(${slides[currentSlide].imageUrl})`,
          height: "75vh",
          backgroundSize: "100% 100%",
          backgroundPosition: "center",
          width: "100vw",
        }}
      >
        <div
          className="absolute bottom-0 w-full text-center p-[1.42vh] "
          // style={{ backgroundColor: "rgba(18,5,173, 0.63)" }}
        >
          <div className="h-[3vh] text-white font-baskerville font-bold text-[1.2rem] -mt-1 mb-2">
            {slides[currentSlide].text}
          </div>
          <div className="flex justify-center space-x-2">
            {slides.map((slide, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full bg-[#0D0C0E] hover:bg-[#FB790B] focus:outline-none ${index === currentSlide ? "bg-white" : ""}`}
                onClick={() => handleDotClick(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Banner;
