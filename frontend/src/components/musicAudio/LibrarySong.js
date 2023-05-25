import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { setCurrentSong, setSongs, setformStatus2, deleteSong } from "../../state/musicSlice";
import {Link} from 'react-router-dom';
import axios from "axios";

const LibrarySong = ({ song, audioRef }) => {
	
	const {isPlaying, songs, formStatus2} = useSelector((state) => state.music);

  const dispatch = useDispatch();
	
	// Function
	const songSelectHandler = async () => {
		await dispatch(setCurrentSong(song));
		const curSong = song;
		const songList = songs;

		const newSongs = songList.map((song) => {
			if (song._id === curSong._id) {
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
	};

	// function handleDelete(id) {
  //   const confirm = window.confirm("Do you like to Delete?");
  //   if (confirm) {
  //     axios.delete("http://127.0.0.1:5000/api/songs/" + id).then((res) => {
  //       alert("Record Deleted");
  //       // eslint-disable-next-line no-restricted-globals
  //       location.reload();
  //     });
  //   }
  // }

	const handleDeleteSong = (song) => {
    if (window.confirm(`Are you sure you want to delete ${song.name}?`)) {
      dispatch(deleteSong(song._id));
    }
  };

	return (
		<LibrarySongContainer onClick={songSelectHandler} isActive={song.active}>
			<Img src={`http://127.0.0.1:5000/uploads/images/` + song.cover} alt={song.name}></Img>
			<LibrarySongDescription>
				<H1>{song.name}</H1>
				<H2>{song.artist}</H2>
			<div style={{display: 'flex', flexDirection: 'flex-col', height:'', justifyContent: 'end'}} >
			<Link to={`/update/${song._id}`}  style={{color: 'blue',  cursor: 'pointer', textDecoration: 'none' }}
			onClick={() => dispatch(setformStatus2(!formStatus2))}
			>Edit</Link>
			&nbsp;&nbsp;&nbsp;
			<p  style={{color: 'red', cursor: 'pointer', textDecoration: 'none' }} onClick={() => handleDeleteSong(song)}>Delet</p>
			</div>
			</LibrarySongDescription>
		</LibrarySongContainer>
	);
};
const LibrarySongContainer = styled.div`
	padding: 0 2rem 0 2rem;
	height: 100px;
	width: 100%;
	display: flex;
	transition: all 0.3s ease;
	background-color: ${(p) => (p.isActive ? "#79CEFF" : "white")};
	
	&:hover {
		background-color: lightblue;
		transition: all 0.3s ease;
	}
	&.active {
		background-color: pink;
	}
`;

const LibrarySongDescription = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
`;

const Img = styled.img`
	margin: 20px 0;
	width: 70px;
	height: 70px;
	border-radius: 50%;
`;

const H1 = styled.h3`
	padding-left: 1rem;
	font-size: 2rem;
`;

const H2 = styled.h4`
	padding-left: 1rem;
	font-size: 1rem;
`;

export default LibrarySong;
