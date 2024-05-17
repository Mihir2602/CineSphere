/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import MovieCard from "./MovieCard";
import axios from "axios";
import Pagination from "./Pagination";

// eslint-disable-next-line react/prop-types
function Movies({handleAddToWatchlist, handleRemoveFromWatchlist, watchlist}) {
  const [movies, setMovies] = useState([]);
  const [pageNo, setpageNo] = useState(1);

  const handlePrev = () => {
    if(pageNo==1)
      {
        setpageNo(pageNo);
      }
    else
    {
      setpageNo(pageNo - 1);
    }
  };

  const handleNext = ()=>{
    setpageNo(pageNo+1);
  };

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/popular?api_key=####&language=en-US&page=${pageNo}`
        //API KEY : e30cba5ecc5b709aa0f122364d66ac1a
      )
      .then(function (res) {
        setMovies(res.data.results);
      });
  }, [pageNo]);

  return (
    <>
      <div className="bg-[#0D0C0E]">
        <div className="font-georgia text-[2.4rem] text-900 text-center text-[#FB790B] pt-[11vh] pb-[9vh]">
          Trending Movies
        </div>

        <div className=" flex flex-row flex-wrap justify-between items-end gap-x-7 gap-y-9">
          {movies.map((movieObj, index) => {
            return (
              <MovieCard
              movieObj={movieObj}
                key={index}
                watchlist={watchlist}
                handleAddToWatchlist={handleAddToWatchlist}
                handleRemoveFromWatchlist={handleRemoveFromWatchlist}
                poster_path={movieObj.poster_path}
                original_title={movieObj.original_title}
              />
            );
          })}
        </div>
        <Pagination pageNo={pageNo} handleNext={handleNext} handlePrev={handlePrev} />
      </div>
    </>
  );
}

export default Movies;
