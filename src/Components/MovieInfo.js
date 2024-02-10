
import {  TBDB_IMG_KEY } from "../utils/constaint"
import { useParams } from "react-router-dom"
import { useSelector } from "react-redux"


const MovieInfo = () => {

    const {resId} = useParams()
    const {SearchRes}= useSelector((store)=>store?.movies)
    const {NowPlayingMovie,PopularMovie,TopRatedMovie,UpcomingMovie} = useSelector((store)=>store?.movies)
    const res = [...NowPlayingMovie,...PopularMovie,...TopRatedMovie,...UpcomingMovie,...SearchRes]
    if(!res) return 
     
    const FindMovie = res.filter(movie=>movie.id===Number(resId))
    

    
  return (
    <div className="flex">
      <div>
      <img className = 'mt-28 md:mt-0 w-56 md:w-auto ' src={TBDB_IMG_KEY + FindMovie[0].poster_path } alt="" />
      </div>
     
      <div className="w-1/2 mt-[18%] ml-5">
        
      <h1 className="md:text-4xl font-bold font-serif text-2xl ">{FindMovie[0]?.original_title}</h1>
      <p className="text-xl font-semibold font-serif pt-5">{FindMovie[0]?.overview}</p>
      <p className="text-lg font-semibold"  >Release Date:- {FindMovie[0].release_date}</p>
      <p className="text-lg font-semibold">Rating:- {FindMovie[0]?.vote_average}⭐</p>
      </div>

    </div>
  )
}

export default MovieInfo