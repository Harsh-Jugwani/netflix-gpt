import React, { useRef } from 'react'
import { API_KEY } from '../utils/constaint'
import MovieItems from './MovieItems';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setSearchRes } from '../movieSlice';



const GptSearch = () => {
  const {SearchRes} = useSelector((store)=>store.movies)
    const dispatch = useDispatch();
    
    const searchText = useRef(null)
    const SearchMovie = async(movie)=>{
      const data  = await fetch('https://api.themoviedb.org/3/search/movie?query='+movie+'&include_adult=false&language=en-US&page=1',API_KEY);
      const json  = await data.json();
      if(!json.results) return

      const result = json.results
    
      dispatch(setSearchRes(result.filter((val)=>val.poster_path!==null)))
      
      if(!SearchRes) return
     
      

    }
    const handleClick=()=>{
      SearchMovie(searchText.current.value) 
      

 
    }
    
  return (<div >
    <img className='absolute w-screen h-screen' src="https://assets.nflxext.com/ffe/siteui/vlv3/df6621a3-890c-4ca0-b698-90bd5152f3d1/20a59be7-7062-4991-bca0-805e9a7f2716/IN-en-20240107-trifectadaily-perspective_alpha_website_small.jpg" alt="" />
    <div className='pt-[4%] flex justify-center '>
        <form className='w-1/ mx-1 md:w-1/2 md:mx-0 absolute grid grid-cols-12 bg-[rgb(30,30,30)] rounded-md mt-[25%] md:mt-0' onSubmit={(e)=>e.preventDefault()}>
        <input type="text" ref={searchText} placeholder='Type to Search...' className=' col-span-9 p-2 m-4 '/>
        <button className='m-4 px-4 py-2 text-white bg-red-700 col-span-3 rounded-lg' onClick={handleClick}>Search</button>
        </form>
         
         <div className='flex md:mt-36  md:ml-14 ml-[10.4px] mt-[50%] flex-wrap absolute'>
        {SearchRes && SearchRes.map((movie)=>(<Link key={movie.id} to={'/browse/'+movie.id}><MovieItems  posterPath={movie.poster_path}/></Link>))}
        </div>
    </div>
    </div>
  )
}

export default GptSearch