import React, { useEffect, useRef } from "react";
// import styled from "styled-components";
import styled from '@emotion/styled'
import axios from "axios";

// Import components
import { Song, Player, Library, Nav, Credit, Navbar } from "../components";
import { useSelector, useDispatch } from "react-redux";
import { setSongs, setSongInfo, setCurrentSong } from "../state/musicSlice";
import { baseURL } from "../utils/baseURL";
import ImgBg from "../images/best.avif";

const AudioPage = () => {
  // Ref
  const audioRef = useRef(null);

  //state from the toolkit
  const { songs, currentSong, isPlaying, libraryStatus, songInfo } =
    useSelector((state) => state.music);

  const dispatch = useDispatch();

  // to assign initial value for currentSong
  // useEffect(() => {
  //   console.log(currentSong)
  //   dispatch(setCurrentSong(songs[0])); // default
  // }, []);

  // Functions
  const updateTimeHandler = (e) => {
    const currentTime = e.target.currentTime;
    const duration = e.target.duration;
    dispatch(setSongInfo({ ...songInfo, currentTime, duration }));
  };

  const songEndHandler = async () => {
    let currentIndex = songs.findIndex((song) => song._id === currentSong._id);
    let nextSong = songs[(currentIndex + 1) % songs.length];
    await dispatch(setCurrentSong(nextSong));

    const newSongs = songs.map((song) => {
      if (song._id === nextSong._id) {
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
    <AudioContainerBackg>
        <Navbar />
      <AudioContainer libraryStatus={libraryStatus}>
        {/* <TitleContainer /> */}

        <Nav />
        <Song />
        <Player audioRef={audioRef} />
        <Library audioRef={audioRef} />
        <Credit />
        <audio
          onLoadedMetadata={updateTimeHandler}
          onTimeUpdate={updateTimeHandler}
          onEnded={songEndHandler}
          ref={audioRef}
          src={`https://addis-suit-musics.onrender.com/uploads/audio/` + currentSong.audio}
        />
      </AudioContainer>
    </AudioContainerBackg>
  );
};

const AudioContainer = styled.div`
  transition: all 0.5s ease;
  z-index: 2;
  margin-left: ${(p) => (p.libraryStatus ? "20rem" : "0")};
  @media screen and (max-width: 768px) {
    margin-left: 0;
  }
`;

const AudioContainerBackg = styled.div`
  background-image: url(${ImgBg});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 100vh;
  `;



const TitleContainer = styled.div`
  background: linear-gradient(lightyellow, lightblue, black);
  width: 100%;
  height: 60px;
  @media screen and (max-width: 768px) {
    margin-left: 0;
  }
`;

export default AudioPage;
