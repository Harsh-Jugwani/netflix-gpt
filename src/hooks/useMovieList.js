import  { useEffect } from 'react'
import { API_KEY } from '../utils/constaint'
import { useDispatch } from 'react-redux'
import { addNowPlayingMovie, addPopularMovie, addTopRatedMovie, addUpcomingMovie } from '../movieSlice';

const useMovieList = (category) => {

    const dispatch = useDispatch();
    
    const getMovieData = async()=>{
        const data = await fetch('https://api.themoviedb.org/3/movie/' + category + '?language=en-US&page=1', API_KEY)
        const MovieData = await data.json();
        if (category==='now_playing') {
          dispatch(addNowPlayingMovie(MovieData.results))
        }
        else if (category==='popular') {
          dispatch(addPopularMovie(MovieData.results))
        }
        else if (category==='top_rated') {
          dispatch(addTopRatedMovie(MovieData.results))
        }
        else if(category==='upcoming') {
          dispatch(addUpcomingMovie(MovieData.results))
        }
        
        
      }
      useEffect(()=>{
        getMovieData()},[]
);
  
}

export default useMovieList