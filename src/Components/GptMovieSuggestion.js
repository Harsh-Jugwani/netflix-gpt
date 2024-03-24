import { useSelector } from "react-redux";

import MovieItems from "./MovieItems";

const GptMovieSuggestion = () => {
  const { movieResults, movieNames } = useSelector((store) => store.gpt);
  if (!movieNames) return null;

  var newArray = Array.prototype.concat.apply([], movieResults);
  console.log(newArray);

  return (
    <div className="flex md:mt-36  md:ml-14 ml-[10.4px] mt-[50%] flex-wrap absolute px-3">
      {movieNames &&
        newArray.map((movie) => <MovieItems posterPath={movie.poster_path} />)}
    </div>
  );
};
export default GptMovieSuggestion;
