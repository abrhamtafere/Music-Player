import React from "react";
import styled from "styled-components";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { RiPlayListFill } from "react-icons/ri";
// import { faMusic } from "@fortawesome/free-solid-svg-icons";

import { useSelector, useDispatch } from "react-redux";
import { setLibraryStatus } from "../../state/musicSlice";

const Nav = () => {
  const libraryStatus = useSelector((state) => state.music.libraryStatus);

  const dispatch = useDispatch();

  return (
    <NavContainer id="playlist">
      <H1 libraryStatus={libraryStatus}>Audio PlayLists</H1>
      <Button onClick={() => dispatch(setLibraryStatus(!libraryStatus))}>
        Playlists
        <RiPlayListFill />
      </Button>
    </NavContainer>
  );
};

const NavContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  @media screen and (max-width: 768px) {
    z-index: 100;
    // top: 0;
    left: 0;
    width: 100%;
  }
`;

const H1 = styled.h1`
  transition: all 0.5s ease;

  @media screen and (max-width: 768px) {
    visibility: ${(p) => (p.libraryStatus ? "hidden" : "visible")};
    opacity: ${(p) => (p.libraryStatus ? "0" : "100")};
    transition: all 0.5s ease;
  }
`;

const Button = styled.button`
  background: transparent;
  font-size: 2rem;
  position: none;
  z-index: 200;
  cursor: pointer;
  border: 2px solid rgb(65, 65, 65);
  padding: 0.5rem;
  transition: all 0.3s ease;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;
  &:hover {
    background: rgb(65, 65, 65);
    color: white;
  }
`;

export default Nav;
