
import useMovieList from "../hooks/useMovieList"

import MainContainer from "./MainContainer";
import SeconderyContainer from "./SeconderyContainer";
import { useSelector } from "react-redux";
import GptSearch from "./GptSearch";
import Header from "./Header";

const Display = () => {
    
 
      useMovieList('now_playing');
      useMovieList('popular');
      useMovieList('top_rated');
      useMovieList('upcoming');
      
      const {SearchOption} = useSelector((store)=>store?.movies)
   if (SearchOption) {
    return (
      <div >
        {/* Main Container
            -- title
            -- video background
  
            Secondary Container
            --recommended list with scroll effect
        */}
        <Header/>
        <GptSearch/>
        
  
  
        
      </div>
    )
   }
   else{
   return(<>
        <Header/>
         <MainContainer/>
        <SeconderyContainer/></>
   )}
  
}

export default Display