import { useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useMovieTrailer"

import { AutoplayCode } from "../utils/constaint";

const BackgroundVideo = ({movieId}) => {
  const trailerVideo = useSelector((store) => store.movies?.trailerVideo);

  useMovieTrailer(movieId);

      
      

  return (
    <div  >
      {trailerVideo && <iframe className="w-screen aspect-video" src={"https://www.youtube.com/embed/"+trailerVideo?.key  + AutoplayCode} title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>}

    </div>
  )
}



export default BackgroundVideo