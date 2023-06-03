import React from "react";
import LibrarySong from "./LibrarySong";
import styled from "styled-components";
import { RiPlayListFill } from "react-icons/ri";

import { useSelector, useDispatch } from "react-redux";
import { setLibraryStatus } from "../../state/musicSlice";

const Library = ({ audioRef }) => {
  const { libraryStatus, songs } = useSelector((state) => state.music);

  const dispatch = useDispatch();

  return (
    <LibraryContainer libraryStatus={libraryStatus}>
      <SubContainer>
        <H1>Library</H1>
        <Button onClick={() => dispatch(setLibraryStatus(!libraryStatus))}>
          <RiPlayListFill />
        </Button>
      </SubContainer>
      <SongContainer>
        {songs.map((song) => (
          <LibrarySong song={song} key={song._id} audioRef={audioRef} />
        ))}
      </SongContainer>
    </LibraryContainer>
  );
};
const LibraryContainer = styled.div`
  position: fixed;
  z-index: 9;
  top: 60px;
  padding: 0 0 50px 0;
  left: 0;
  width: 30rem;
  height: 100%;
  background-color: white;
  box-shadow: 2px 2px 50px rgb(204, 204, 204);
  user-select: none;
  overflow: scroll;
  transform: translateX(${(p) => (p.libraryStatus ? "0%" : "-100%")});
  transition: all 0.5s ease;
  opacity: ${(p) => (p.libraryStatus ? "100" : "0")};
  scrollbar-width: thin;
  scrollbar-color: rgba(155, 155, 155, 0.5) tranparent;
  &::-webkit-scrollbar {
    width: 5px;
  }
  &::-webkit-scrollbar-track {
    background: transparent;
  }
  &::-webkit-scrollbar-thumb {
    background-color: rgba(155, 155, 155, 0.5);
    border-radius: 20px;
    border: transparent;
  }
  @media screen and (max-width: 768px) {
    width: 100%;
    z-index: 1000;
    top: 0px;
  }
`;

const SongContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
`;

const H1 = styled.h2``;

const SubContainer = styled.div`
  padding: 1.5rem;
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const Button = styled.button`
  backgroundx: transparent;
  font-size: 2rem;
  border: none;
  cursor: pointer;
  border: 0px solid rgb(65, 65, 65);
  padding: 0.5rem;
  transition: all 0.3s ease;
  &:hover {
    background: rgb(65, 65, 65);
    color: white;
  }
`;
export default Library;
