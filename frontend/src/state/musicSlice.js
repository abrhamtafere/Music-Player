import { createSlice } from "@reduxjs/toolkit"; //next js redux toolkit
import data from "../utils/data";

export const musicSlice = createSlice({
  name: "music",
  initialState: {
    songs: data(),
    currentSong: data()[0],
    isPlaying: false,
    libraryStatus: false,
    songInfo: { currentTime: 0, duration: 0 },
    formStatus: false,

  }, 
  reducers: {
    increase: (state) => {
      state.value += 1;
    },
    decrease: (state) => {
      state.value -= 1;
    },
    setLibraryStatus: (state, action) => {
      state.libraryStatus = action.payload;
    },
    setIsPlaying: (state, action) => {
      state.isPlaying = action.payload;
    },
    setSongInfo: (state, action) => {
      state.songInfo = action.payload;
    },
    setSongs: (state, action) => {
      state.songs = action.payload;
    },
    setCurrentSong: (state, action) => {
      state.currentSong = action.payload;
    },
    setformStatus: (state, action) => {
      state.formStatus = action.payload;
    },
    
  },
});

// case under reducers becomes an action
export const { increase, decrease, setLibraryStatus, setIsPlaying, setSongInfo, setSongs, setCurrentSong, setformStatus } = musicSlice.actions;
export default musicSlice.reducer;
