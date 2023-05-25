import React from "react";
import { useSelector } from "react-redux";
import styled, { keyframes } from "styled-components";

const Song = () => {
  const { currentSong, isPlaying } = useSelector((state) => state.music);

  return (
    <SongContainer>
      <Img
        src={`http://127.0.0.1:5000/uploads/images/` + currentSong.cover}
        alt={currentSong.name}
        isPlaying={isPlaying}
      />
      <H1>{currentSong.name}</H1>
      <H2>{currentSong.artist}</H2>
    </SongContainer>
  );
};

const SongContainer = styled.div`
  margin-top: 10vh;
  min-height: 50vh;
  max-height: 60vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

// Create the keyframes
const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

const Img = styled.img`
  width: 350px;
  height: 350px;
  border-radius: 50%;
  animation: ${rotate} ${(p) => (p.isPlaying ? "10s linear infinite" : "")};
  // animation: ${rotate} 10s linear infinite;
  @media screen and (max-width: 768px) {
    
		width: 250px;
  height: 250px;
  }
`;

const H1 = styled.h2`
  padding: 3rem 1rem 1rem 1rem;
`;

const H2 = styled.h3`
  font-size: 1rem;
`;

export default Song;

// Here we create a component that will rotate everything we pass in over two seconds
// const Rotate = styled.div`
//   display: inline-block;
//   animation: ${rotate} 2s linear infinite;
//   padding: 2rem 1rem;
//   font-size: 1.2rem;
// `;

// render(
//   <Rotate>&lt; 💅🏾 &gt;</Rotate>
// );
