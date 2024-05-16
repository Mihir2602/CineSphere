/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import orangeBkm from "./orange-bkm.png";
import blueBkm from "./blue-bkm.png";
import orangeDltBkm from "./orange-dlt-bkm.png";
import blueDltBkm from "./blue-dlt-bkm.png";
import WatchList from "./WatchList";

function MovieCard({
  movieObj,
  poster_path,
  original_title,
  handleAddToWatchlist,
  handleRemoveFromWatchlist,
  watchlist,
}) {
  const [isAddHovered, setIsAddHovered] = useState(false);
  const [isRemoveHovered, setIsRemoveHovered] = useState(false);

  function doesContain(movieObj) {
    for (let i = 0; i < watchlist.length; i++) {  // Fix the loop initialization
      if (watchlist[i].id === movieObj.id) {  // Fix the strict equality check
        return true;
      }
    }
    return false;  // Move return false outside the loop
  }

  return (
    <div className="relative">
      <div
        className="relative h-[49vh] w-[16vw] flex flex-col bg-center border-2 border-white bg-cover rounded-xl hover:scale-110 duration-300 hover:cursor-pointer hover:border-[#FB790B]"
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/original/${poster_path})`,
        }}
      >
        {doesContain(movieObj) ? (
          <div className="absolute top-2 right-2 h-10 w-10">
            <button
              onMouseEnter={() => setIsRemoveHovered(true)}
              onMouseLeave={() => setIsRemoveHovered(false)}
              onClick={() => handleRemoveFromWatchlist(movieObj)}
              className="focus:outline-none"
            >
              <img src={isRemoveHovered ? orangeDltBkm : blueDltBkm} alt="Bookmark" />
            </button>
          </div>
        ) : (
          <div className="absolute top-2 right-2 h-10 w-10">
            <button
              onMouseEnter={() => setIsAddHovered(true)}
              onMouseLeave={() => setIsAddHovered(false)}
              onClick={() => handleAddToWatchlist(movieObj)}
              className="focus:outline-none"
            >
              <img src={isAddHovered ? orangeBkm : blueBkm} alt="Bookmark" />
            </button>
          </div>
        )}

        <div className="absolute bottom-0 left-0 right-0 bg-[#1205AD] text-center bg-opacity-50 text-[#F1F5F2] text-[1.1rem] p-[0.35vh] rounded-b-xl">
          {original_title}
        </div>
      </div>
    </div>
  );
}

export default MovieCard;
