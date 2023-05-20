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
  },
  reducers: {
    increase: (state) => {
      state.value += 1;
    },
    decrease: (state) => {
      state.value -= 1;
    },
  },
});

// case under reducers becomes an action
export const { increase, decrease } = musicSlice.actions;
export default musicSlice.reducer;
