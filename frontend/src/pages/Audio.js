import React, { useState, useRef } from "react";
import styled from "styled-components";
// import "./App.css";

// Import components
import Player from "../components/Player";
import Song from "../components/Song";
import Library from "../components/Library";
import Nav from "../components/Nav";
import Credit from "../components/Credit";
// Import data
import data from "../utils/data";

import { useSelector, useDispatch } from 'react-redux';
import { decrease, increase } from '../state/musicSlice'; 

const Audio = () => {
  // Ref
  const audioRef = useRef(null);
  // console.log(data());
  // State
  const [songs, setSongs] = useState(data());
  const [currentSong, setCurrentSong] = useState(songs[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [libraryStatus, setLibraryStatus] = useState(false);
  const [songInfo, setSongInfo] = useState({
    currentTime: 0,
    duration: 0,
  });

  //state from the toolkit
  // const {songs, currentSong, isPlaying, libraryStatus, songInfo} = useSelector(state => state.music);

  const dispatch = useDispatch();
  
  // Functions
  const updateTimeHandler = (e) => {
    const currentTime = e.target.currentTime;
    const duration = e.target.duration;
    setSongInfo({ ...songInfo, currentTime, duration });
  };

  const songEndHandler = async () => {
    let currentIndex = songs.findIndex((song) => song.id === currentSong.id);
    let nextSong = songs[(currentIndex + 1) % songs.length];
    await setCurrentSong(nextSong);

    const newSongs = songs.map((song) => {
      if (song.id === nextSong.id) {
        return {
          ...song,
          active: true,
        };
      } else {
        return {
          ...song,
          active: false,
        };
      }
    });
    setSongs(newSongs);

    if (isPlaying) {
      audioRef.current.play();
    }
  };

  return (
    <AudioContainer libraryStatus={libraryStatus}>
      <TitleContainer />
      <Nav libraryStatus={libraryStatus} setLibraryStatus={setLibraryStatus} />
      <Song currentSong={currentSong} />
      <Player
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
        currentSong={currentSong}
        setCurrentSong={setCurrentSong}
        audioRef={audioRef}
        songInfo={songInfo}
        setSongInfo={setSongInfo}
        songs={songs}
        setSongs={setSongs}
      />
      <Library
        songs={songs}
        setCurrentSong={setCurrentSong}
        audioRef={audioRef}
        isPlaying={isPlaying}
        setSongs={setSongs}
        libraryStatus={libraryStatus}
        setLibraryStatus={setLibraryStatus}
      />
      <Credit />
      <audio
        onLoadedMetadata={updateTimeHandler}
        onTimeUpdate={updateTimeHandler}
        onEnded={songEndHandler}
        ref={audioRef}
        src={currentSong.audio}
      />
    </AudioContainer>
  );
};

const AudioContainer = styled.div`
  transition: all 0.5s ease;
  margin-left: ${(p) => (p.libraryStatus ? "20rem" : "0")};
  @media screen and (max-width: 768px) {
    margin-left: 0;
  }
`;

const TitleContainer = styled.div`
  background: linear-gradient(lightyellow, lightblue, black);
  width: 100%;
  height: 60px;
  @media screen and (max-width: 768px) {
    margin-left: 0;
  }
`;

export default Audio;
