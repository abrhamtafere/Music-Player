import { createSlice } from "@reduxjs/toolkit"; //next js redux toolkit
import data from "../utils/data";

export const musicSlice = createSlice({
  name: "music",
  initialState: {
    songs: [],
    currentSong: data()[0],
    isPlaying: false,
    libraryStatus: false,
    songInfo: { currentTime: 0, duration: 0 },
    formStatus: false,
    formStatus2: false,
    updateStatus: false,
    isLoading: false,
    error: null,
  },
  reducers: {
    getSongs: (state) => {
      state.isLoading = true;
    },
    getSongsSuccess: (state, action) => {
      state.songs = action.payload;
      state.currentSong = state.songs[0];
      state.isLoading = false;
    },
    getSongsFailed: (state) => {
      state.isLoading = false;
    },

    createSong: (state) => {
      state.loading = true;
    },
    createSongSuccess: (state, action) => {
      state.songs.push(action.payload);
      state.loading = false;
    },
    createSongFailed: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
    updateSong: (state) => {
      state.loading = true;
    },
    updateSongSuccess: (state, action) => {
      state.songs = state.songs.map((song) =>
      song._id === action.payload._id ? action.payload : song
      );
      state.loading = false;
    },
    updateSongFailed: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
    deleteSong: (state) => { 
      state.loading = true;
    },
    deleteSongSuccess: (state, action) => {
      state.songs = state.songs.filter((song) => song._id !== action.payload);
      state.loading = false;
    },
    deleteSongFailed: (state, action) => {
      state.error = action.payload;
      state.loading = false;
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
    setformStatus2: (state, action) => {
      state.formStatus2 = action.payload;
    },
    setUpdateStatus: (state, action) => {
      state.updateStatus = action.payload;
    },
  },
});

// case under reducers becomes an action
export const {
  setLibraryStatus,
  setIsPlaying,
  setSongInfo,
  setSongs,
  setCurrentSong,
  setformStatus,
  setformStatus2,
  setUpdateStatus,
  getSongs,
  getSongsSuccess,
  getSongsFailed,
  createSong,
  createSongSuccess,
  createSongFailed,
  updateSong,
  updateSongSuccess,
  updateSongFailed,
  deleteSong,
  deleteSongSuccess,
  deleteSongFailed,
} = musicSlice.actions;
export default musicSlice.reducer;
