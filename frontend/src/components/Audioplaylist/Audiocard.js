import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentSong, setSongs } from "../../state/musicSlice";
import Player from "../musicAudio/Player";
import {
  MusicCard,
  MusicCardContent,
  MusicCardHeading,
  MusicCardDetails,
  MusicCardItems,
  MusicCardTitle,
  MusicCardItem,
  MusicCardIcon,
  Img,
} from "./Audio.styles";

function Audiocard({ song, audioRef }) {
  const { isPlaying, songs } = useSelector((state) => state.music);

  const dispatch = useDispatch();

  // Function
  const songSelectHandler = async () => {
    await dispatch(setCurrentSong(song));
    const curSong = song;
    const songList = songs;

    const newSongs = songList.map((song) => {
      if (song.id === curSong.id) {
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

    // check if user is wanting to play a song.
    if (isPlaying) {
      audioRef.current.play();
    }

// to redirect the page
    // window.location.replace("http://localhost:3000/audio#playlist");

  };

  return (
    <div>
      <MusicCard onClick={songSelectHandler} isActive={song.active}>
        <Img src={song.cover} alt={song.name} />
        <MusicCardContent>
          <MusicCardHeading>{song.name}</MusicCardHeading>
          <MusicCardTitle>{song.artist}</MusicCardTitle>
          <MusicCardDetails>
            <MusicCardItems>
              <MusicCardTitle>enjoy with us music band </MusicCardTitle>
              <MusicCardItem>
                <MusicCardIcon />
              </MusicCardItem>
            </MusicCardItems>
            <MusicCardItems>
              <MusicCardTitle>Edit delete</MusicCardTitle>
            </MusicCardItems>
          </MusicCardDetails>
        </MusicCardContent>
      </MusicCard>
      
      {/* // */}
    </div>
  );
}

export default Audiocard;
