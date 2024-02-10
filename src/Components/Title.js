


const Title = ({title,overview}) => {
   
  return (
    <div className="w-screen aspect-video px-6 absolute pt-[26%] md:h-[677px] text-white bg-gradient-to-r from-gray-950 mb-[20%]">
        <h1 className="md:text-4xl text-2xl font-serif font-bold">{title}</h1>
        <p className="md:w-5/12 md:visible  invisible">{overview}</p>
        <button className="bg-white text-black rounded-lg md:px-10 md:py-3 md:mr-2 md:mt-4 px-5 py-2 mr-1 absolute md:relative -mt-28  hover:bg-opacity-80  ">Play</button>
        <button className="bg-gray-500 text-white rounded-lg md:px-10 md:py-3 md:mr-2 md:mt-4 px-5 py-2 mr-1hover:bg-opacity-80 absolute ml-20 md:ml-0 -mt-28">More info</button>
    </div>
  )
}

export default Title