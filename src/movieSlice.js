import { createSlice } from "@reduxjs/toolkit";



const movieSlice = createSlice({
    name: 'movie',
    initialState : {
        NowPlayingMovie:null,
        PopularMovie:null,
        TopRatedMovie:null,
        UpcomingMovie:null,
        SearchOption:false,
        trailerVideo:null,
        SearchRes : []
    },
    reducers:{
        addNowPlayingMovie:(state,action)=>{
            state.NowPlayingMovie = action.payload;
        },
        addPopularMovie:(state,action)=>{
            state.PopularMovie = action.payload
        },
        addTopRatedMovie:(state,action)=>{
            state.TopRatedMovie = action.payload
        },
        addUpcomingMovie:(state,action)=>{
            state.UpcomingMovie = action.payload
        },
        setSeachOption:(state)=>{
            state.SearchOption = !state.SearchOption
        },
        addTrailerVideo:(state,action)=>{
            state.trailerVideo = action.payload
        },
        setSearchRes:(state,action)=>{
            state.SearchRes = action.payload
        },


    }

})
export const {addNowPlayingMovie,addPopularMovie,addTopRatedMovie,addUpcomingMovie,setSeachOption,addTrailerVideo,setSearchRes} = movieSlice.actions;
export default movieSlice.reducer;