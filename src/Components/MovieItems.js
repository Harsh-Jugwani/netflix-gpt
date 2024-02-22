import React from 'react'

import { TBDB_IMG_KEY } from '../utils/constaint'
const MovieItems = ({posterPath}) => {
 
  return (
    <div className="pr-4 pb-3 md:w-48 w-[30vw] cursor-pointer">
      <img alt="Movie Card" src={TBDB_IMG_KEY + posterPath} />
    </div>
  )
}

export default MovieItems