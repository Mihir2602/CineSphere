// eslint-disable-next-line no-unused-vars
import React from "react";
import { Player } from "@lottiefiles/react-lottie-player";
import { Link } from "react-router-dom";
import animationData from './icon-anime.json'

export const NavigationBar = () => {


  return (
    <div className="flex items-center border border-[#F1F5F2] rounded-1 bg-[#0D0C0E]">
      <div>
      <Player
          autoplay
          loop
          src={animationData}
          style={{ backgroundColor:'#1205ad', height: '10vh', width: '7vw' }}
        />
      </div>
      <div className="flex">
        <Link
          to="/"
          className="py-[12px] px-4 text-[#FB790B] text-600 font-lora font-900 text-[1.7rem] hover:text-[#F1F5F2]"
        >
          Home
        </Link>
        <Link
          to="/Watchlist"
          className="py-[12px] px-4 text-[#FB790B] font-lora text-600 font-900 text-[1.7rem] hover:text-[#F1F5F2]"
        >
          Watchlist
        </Link>
      </div>
      <div className="ml-auto">
        <Link
          to="/"
          className="py-[12px]  pr-9 text-[#FB790B] font-lora text-700 font-600 text-[1.85rem] hover:text-[#F1F5F2]"
        >
          CineSphere
        </Link>
      </div>
    </div>
  );
};
