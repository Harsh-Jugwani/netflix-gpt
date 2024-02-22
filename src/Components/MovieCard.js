import React from 'react'
import { useSelector } from 'react-redux'
import MovieItems from './MovieItems'
import { Link } from 'react-router-dom'

const MovieCard = () => {
    const {NowPlayingMovie,PopularMovie,TopRatedMovie,UpcomingMovie} = useSelector((store)=>store?.movies)
    
    if(!NowPlayingMovie) return
    if(!PopularMovie) return
    if(!TopRatedMovie) return
    if(!UpcomingMovie) return

    

  return (
    <div className="px-6 bg-[rgb(30,30,30)] md:-mt-60 -mt-0 ">
      <h1 className="text-lg md:text-3xl py-4 text-white font-serif font-bold absolute mt-7">Now Playing</h1>
      <div className="flex overflow-x-scroll no-scrollbar pt-20">
        <div className="flex cursor-pointer">
          {NowPlayingMovie?.map((movie) => (
            <Link key={movie.id} to={'/browse/'+movie.id}><MovieItems  posterPath={movie.poster_path}/></Link>
          ))}
        </div>
      </div>
      <h1 className="text-lg md:text-3xl py-4 text-white font-serif font-bold">Popular</h1>
      <div className="flex overflow-x-scroll no-scrollbar">
        <div className="flex cursor-pointer">
          {PopularMovie?.map((movie) => (
            <Link key={movie.id} to={'/browse/'+movie.id}><MovieItems  posterPath={movie.poster_path}/></Link>
          ))}
        </div>
      </div>
      <h1 className="text-lg md:text-3xl py-4 text-white font-serif font-bold">Top Rated</h1>
      <div className="flex overflow-x-scroll no-scrollbar">
        <div className="flex cursor-pointer">
          {TopRatedMovie?.map((movie) => (
            <Link key={movie.id} to={'/browse/'+movie.id}><MovieItems  posterPath={movie.poster_path}/></Link>
          ))}
        </div>
      </div>
      <h1 className="text-lg md:text-3xl py-4 text-white font-serif font-bold">Upcoming</h1>
      <div className="flex overflow-x-scroll no-scrollbar">
        <div className="flex" >
          {UpcomingMovie?.map((movie) => (<div className='cursor-pointer' >
          <Link key={movie.id} to={'/browse/'+movie.id}><MovieItems  posterPath={movie.poster_path}/></Link>
            </div>
          ))}
        </div>
      </div>
    </div>
    

  )
}

export default MovieCard