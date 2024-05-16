/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import "./styles.css";
import onMc from "./on-mc.png";
import initMc from "./init-mc.png";
import Pagination from "./Pagination";
import annyang from "annyang";
import micOnSound from "./start.mp3";
import micOffSound from "./found.mp3";
import micError from "./error.mp3";
import upArrow from "./up-arrow.png";
import downArrow from "./down-arrow.png";
import genreids from "../utility/genre.js";

function WatchList({ watchlist, setWatchlist, handleRemoveFromWatchlist }) {
  const [pageNo, setPageNo] = useState(1);
  const [search, setSearch] = useState("");
  const [listening, setListening] = useState(false);
  const [genrelist, setGenrelist] = useState(["All Genres"]);
  const [currGenre, setCurrGenre] = useState("All Genres");
  const itemsPerPage = 10; // Number of entries per page

  const [filteredWatchlist, setFilteredWatchlist] = useState([]);

  useEffect(() => {
    // Filter the watchlist based on the current genre and search query
    const filtered = watchlist.filter((movieObj) => {
      if (currGenre === "All Genres") return true;
      else return genreids[movieObj.genre_ids[0]] === currGenre;
    }).filter((movieObj) =>
      movieObj.original_title.toLowerCase().includes(search.toLowerCase())
    );

    // Set the filtered watchlist
    setFilteredWatchlist(filtered);
  }, [watchlist, currGenre, search]);

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const handlePrev = () => {
    if (pageNo > 1) {
      setPageNo(pageNo - 1);
    }
  };

  const handleNext = () => {
    setPageNo(pageNo + 1);
  };

  const playMicOnSound = () => {
    const audio = new Audio(micOnSound);
    audio.play();
  };

  const playMicOffSound = () => {
    const audio = new Audio(micOffSound);
    audio.play();
  };

  const playMicErrorSound = () => {
    const audio = new Audio(micError);
    audio.play();
  };

  const handleVoiceSearch = () => {
    if (annyang) {
      if (!listening) {
        annyang.start({ autoRestart: false, continuous: false });
        setListening(true);
        playMicOnSound(); // Play mic on sound
      } else {
        annyang.abort();
        setListening(false);
        playMicOffSound(); // Play mic off sound
      }

      annyang.addCallback("result", (phrases) => {
        setSearch(phrases[0]);
        playMicOffSound(); // Play mic off sound
        setListening(false); // Set listening state to false
      });
    } else {
      playMicErrorSound();
    }
  };

  const sortIncreasing = () => {
    const sortedInc = [...filteredWatchlist].sort(
      (movieA, movieB) => movieA.vote_average - movieB.vote_average
    );
    setFilteredWatchlist(sortedInc);
  };

  const sortDecreasing = () => {
    const sortedDec = [...filteredWatchlist].sort(
      (movieA, movieB) => movieB.vote_average - movieA.vote_average
    );
    setFilteredWatchlist(sortedDec);
  };

  const sortPopularityIncreasing = () => {
    const sortedInc = [...filteredWatchlist].sort(
      (movieA, movieB) => movieA.popularity - movieB.popularity
    );
    setFilteredWatchlist(sortedInc);
  };

  const sortPopularityDecreasing = () => {
    const sortedDec = [...filteredWatchlist].sort(
      (movieA, movieB) => movieB.popularity - movieA.popularity
    );
    setFilteredWatchlist(sortedDec);
  };

  useEffect(() => {
    let temp = watchlist.map((movieObj) => {
      return genreids[movieObj.genre_ids[0]];
    });
    temp = new Set(temp);
    setGenrelist(["All Genres", ...temp]);
  }, [watchlist]);

  let handleFilter = (genre) => {
    setCurrGenre(genre);
    setPageNo(1); // Reset page number when changing genre
  };

  // Calculate start and end index for the current page
  const startIndex = (pageNo - 1) * itemsPerPage;
  const endIndex = Math.min(startIndex + itemsPerPage, filteredWatchlist.length);

  return (
    <>
      <div className="bg-[#0D0C0E]">
        <div className="flex justify-center flex-wrap pt-[12vh] ">
          {genrelist.map((genre, index) => {
            return (
              <div key={index}>
                <button
                  onClick={() => handleFilter(genre)}
                  className={
                    currGenre === genre
                      ? "mx-5 mb-[5vh] flex justify-center p-3 px-[1.2vw] text-[1.45rem] border-2 border-ridge border-[#F1F5F2] rounded-lg font-robotoSlab font-semibold bg-[#FB790B] text-[#0D0C0E] btn"
                      : "mx-5 mb-[5vh] flex justify-center p-3 px-[1.2vw] text-[1.45rem] border-2 border-ridge border-[#FB790B] rounded-lg font-robotoSlab font-semibold bg-[#F1F5F2] text-[#0D0C0E] btn"
                  }
                >
                  {genre}
                </button>
              </div>
            );
          })}
        </div>

        <div className="flex justify-center pt-12">
          <div className="relative w-[30vw] flex">
            <input
              type="text"
              className="bg-gray-50 border-2 border-ridge border-[#FB790B] font-baskerville font-semibold text-gray-900 text-sm rounded-lg hover:border-4 hover:border-ridge hover:border-[#1205AD] hover:bg-gray-80 block w-full ps-5 pe-10 p-2 text-[1.3rem] focus:outline-none"
              placeholder="Search Your Movie Here.."
              value={search}
              onChange={handleSearch}
              required
            />
            <button
              type="button"
              className="absolute inset-y-0 end-0 flex items-center pe-3"
              onClick={handleVoiceSearch}
            >
              {listening ? (
                <img src={onMc} alt="microphoneImg" className="w-4 h-4" />
              ) : (
                <img src={initMc} alt="microphoneImg" className="w-4 h-4" />
              )}
            </button>
          </div>
          <button
            type="submit"
            className="max-h-[6vh] inline-flex items-center py-2.5 px-3 ms-2 text-sm font-medium text-[#0D0C0E] bg-[#FB790B] rounded-lg border border-white-700 btn"
          >
            <svg
              className="w-4 h-4 me-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
            Search
          </button>
        </div>

        <div className="ml-5 mr-5 overflow-hidden rounded-lg mt-20 border border-white-300 ">
          <table className="w-full text-center">
            <thead className="border-b-2">
              <tr className="text-[#F1F5F2] font-cambria text-[1.2rem]">
                <td>Name</td>
                <td>
                  <button onClick={sortIncreasing}>
                    <img
                      src={upArrow}
                      className="mx-2 w-4 h-4"
                      alt="arrowBtn"
                    />
                  </button>
                  Ratings
                  <button onClick={sortDecreasing}>
                    <img
                      src={downArrow}
                      className="mx-2 w-4 h-4"
                      alt="arrowBtn"
                    />
                  </button>
                </td>
                <td>
                  <button onClick={sortPopularityIncreasing}>
                    <img
                      src={upArrow}
                      className="mx-2 w-4 h-4"
                      alt="arrowBtn"
                    />
                  </button>
                  Popularity
                  <button onClick={sortPopularityDecreasing}>
                    <img
                      src={downArrow}
                      className="mx-2 w-4 h-4"
                      alt="arrowBtn"
                    />
                  </button>
                </td>
                <td>Genre</td>
              </tr>
            </thead>

            <tbody>
              {filteredWatchlist
                .slice(startIndex, endIndex)
                .map((movieObj) => (
                  <tr
                    key={movieObj.id}
                    className="text-[#F1F5F2] border-b-2 font-cambria text-[1.2rem]"
                  >
                    <td className="flex items-center p-2">
                      <img
                        className="h-[19vh] w-[9vw]"
                        src={`https://image.tmdb.org/t/p/original/${movieObj.poster_path}`}
                        alt={movieObj.original_title}
                      />
                      <div className="pl-4 font-georgia">
                        {movieObj.original_title}
                      </div>
                    </td>
                    <td className="text-[1.2rem]">
                      {movieObj.vote_average}
                    </td>
                    <td className="text-[1.2rem]">{movieObj.popularity}</td>
                    <td className="text-[1.2rem] pr-2">
                      {genreids[movieObj.genre_ids[0]]}
                    </td>
                    <td className="text-[1.2rem] ">
                      <button
                        onClick={() => handleRemoveFromWatchlist(movieObj)}
                        className=" pr-2 text-[#FB790B] font-bold hover:text-[#E8DC0C] hover:font-bold"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
        <div>
          <Pagination
            pageNo={pageNo}
            handleNext={handleNext}
            handlePrev={handlePrev}
          />
        </div>
      </div>
    </>
  );
}

export default WatchList;
