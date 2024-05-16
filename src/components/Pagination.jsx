/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import blueBack from "./blue-back.png";
import blueNext from "./blue-next.png";
import orangeSquare from "./orange-square.png";
import orangeNext from "./orange-next.png";
import orangeBack from "./orange-back.png";

function Pagination({ handleNext, handlePrev, pageNo }) {
    const [backHovered, setBackHovered] = useState(false);
    const [nextHovered, setNextHovered] = useState(false);
  
    return (
      <div className="p-4 mt-8 flex justify-center">
        <button
          onClick={handlePrev}
          className="focus:outline-none"
          onMouseEnter={() => setBackHovered(true)}
          onMouseLeave={() => setBackHovered(false)}
          style={{ transition: "transform 0.2s ease-in-out" }}
        >
          <img
            src={backHovered ? orangeBack : blueBack}
            alt="backIcon"
          />
        </button>
        <div className="relative inline-block">
          <img src={orangeSquare} alt="pgNumberIcon" className="w-full" />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-[#F1F5F2] text-[1.78rem] font-lora font-bold">
            {pageNo}
          </div>
        </div>
        <button
          onClick={handleNext}
          className="focus:outline-none"
          onMouseEnter={() => setNextHovered(true)}
          onMouseLeave={() => setNextHovered(false)}
          style={{transition: "transform 0.2s ease-in-out"}}
        >
          <img
            src={nextHovered ? orangeNext : blueNext}
            alt="nextIcon"
            
          />
        </button>
      </div>
    );
  }
  
  export default Pagination;
  