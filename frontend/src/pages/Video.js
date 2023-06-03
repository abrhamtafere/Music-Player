import React from "react";
import styled from "styled-components";
import { Navbar, Videocard } from "../components";
import { Container } from "../Globalstyles";
import img1 from "../images/music2.jpg";

function Video() {
  return (
    <div>
      <Navbar />
      <MusicWrapper>
        <MusicTitle>Video Playlists</MusicTitle>
        <MusicContainer>
        <Videocard title={"Sample Video"} date={1} />
        <Videocard title={"Name name"} date={1} imgUrl={img1} />
        <Videocard title={"Oblag Chamo"} date={1} imgUrl={img1} />
        <Videocard title={"Bean Back"} date={1} imgUrl={img1} />
        <Videocard title={"Music World"} date={1} imgUrl={img1} />
        <Videocard title={"Sample Video"} date={1} imgUrl={img1} />
        <Videocard title={"Name name"} date={1} imgUrl={img1} />
        <Videocard title={"Oblag Chamo"} date={1} imgUrl={img1} />
        <Videocard title={"Bean Back"} date={1} imgUrl={img1} />
        <Videocard title={"Music World"} date={1} imgUrl={img1} />      
        </MusicContainer>
      </MusicWrapper>
    </div>
  );
}

export const MusicWrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 6rem 0rem;
`;

export const MusicContainer = styled(Container)`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  ${Container};
`;

export const MusicTitle = styled.h2`
  font-size: clamp(2rem, 8vw, 5rem);
  text-align: center;
  margin-bottom: 3rem;
  font-weight: bold;
  @media only screen and (max-width: 700px) {
    margin-bottom: 0;
  }
`;

export default Video;
