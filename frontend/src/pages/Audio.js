import React, { useEffect, useRef } from "react";
import styled from "styled-components";
// import "./App.css";

// Import components
import {Song, Player,  Library, Nav, Credit} from "../components";
import { useSelector, useDispatch } from 'react-redux';
import { setSongs, setSongInfo, setCurrentSong } from "../state/musicSlice";

const Audio = () => {
  // Ref
  const audioRef = useRef(null);

  //state from the toolkit
  const { songs, currentSong,  isPlaying, libraryStatus, songInfo} = useSelector((state) => state.music);
  
  const dispatch = useDispatch();

  // to assign initial value for currentSong 
  useEffect(() => {  
    console.log(currentSong)
    dispatch(setCurrentSong(songs[0])); // default
  }, []);
  

  // Functions
  const updateTimeHandler = (e) => {
    const currentTime = e.target.currentTime;
    const duration = e.target.duration;
    dispatch(setSongInfo({...songInfo, currentTime, duration }));
  };

  const songEndHandler = async () => {
    let currentIndex = songs.findIndex((song) => song.id === currentSong.id);
    let nextSong = songs[(currentIndex + 1) % songs.length];
    await dispatch(setCurrentSong(nextSong));

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
    dispatch(setSongs(newSongs));

    if (isPlaying) {
      audioRef.current.play();
    }
  };

  return (
    <AudioContainer libraryStatus={libraryStatus}>
      <TitleContainer />
      <Nav  />
      <Song />
      <Player
        audioRef={audioRef}
      />
      <Library
        audioRef={audioRef}
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
