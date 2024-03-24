import React, { useRef } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { API_KEY } from "../utils/constaint";
import { useDispatch } from "react-redux";
import { addGptMovieResult } from "../gptSlice";
import GptMovieSuggestion from "./GptMovieSuggestion";
import { useNavigate } from "react-router-dom";

const Gpt = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const genAI = new GoogleGenerativeAI(
    "AIzaSyCp53v21ykAGnrO-DO2dBOqeNftEiap3GA"
  );

  const searchMovieTMDB = async (movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1",
      API_KEY
    );
    const json = await data.json();

    return json.results;
  };
  async function run(query) {
    // For text-only input, use the gemini-pro model
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });

    const prompt = query;

    const result = await model.generateContent(
      "Act as a Movie Recommendation system and suggest some movies for the query : " +
        prompt +
        ". only give me names of 5 movies, comma seperated like the example result given ahead. Example Result: Gadar, Sholay, Don, Golmaal, Koi Mil Gaya"
    );
    const response = await result.response;

    const res = response.text();
    const arr = res.split(",");

    const promiseArray = arr.map((movie) => searchMovieTMDB(movie));
    const tmdbResults = await Promise.all(promiseArray);
    console.log(promiseArray);
    dispatch(addGptMovieResult({ movieNames: arr, movieResults: tmdbResults }));
  }

  const searchText = useRef();
  const handleClick = () => {
    run(searchText.current.value);
  };
  const handleClickHome = () => {
    navigate("/browse");
  };
  return (
    <>
      <div className="">
        <img
          className="w-44 ml-[27%] md:ml-0 absolute z-20"
          src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
          alt=""
        />
        <button
          className="bg-purple-700 mt-3 text-white rounded-lg ml-[0%] md:ml-[85%] md:mt-2 py-2  cursor-pointer px-3 absolute z-10"
          onClick={handleClickHome}
        >
          <h1>Home</h1>
        </button>
        <img
          className="absolute w-screen h-screen"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/df6621a3-890c-4ca0-b698-90bd5152f3d1/20a59be7-7062-4991-bca0-805e9a7f2716/IN-en-20240107-trifectadaily-perspective_alpha_website_small.jpg"
          alt=""
        />
        <div className="pt-[4%] flex justify-center ">
          <form
            className="w-1/ mx-1 md:w-1/2 md:mx-0 absolute grid grid-cols-12 bg-[rgb(30,30,30)] rounded-md mt-[25%] md:mt-0"
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              type="text"
              ref={searchText}
              placeholder="Type to Search..."
              className=" col-span-9 p-2 m-4 "
            />
            <button
              className="m-4 px-[5px] md:px-4 py-2 text-white bg-red-700 col-span-3 rounded-lg text-[10px] md:text-[1.2vw]"
              onClick={handleClick}
            >
              Gpt Search
            </button>
          </form>
          <GptMovieSuggestion />
        </div>
      </div>
    </>
  );
};

export default Gpt;
