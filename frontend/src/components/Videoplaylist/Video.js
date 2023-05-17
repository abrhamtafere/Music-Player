import React from "react";
import img1 from "../../images/music2.jpg";
import {
  MusicContainer,
  MusicWrapper,
  MusicTitle,
  MusicContentContainer2,
  MusicInnerContainer,
} from "./Video.styles";
import Videocard from "./Videocard";


function Video() {
  const title = "Card tiltle";
const date = "23/34/1212";
const imgUrl = "Card tiltle";

  return <div>
  <MusicWrapper>
    <MusicContainer>
      <MusicTitle>Video Playlists</MusicTitle>
      <MusicContentContainer2>
      <MusicInnerContainer>
        <Videocard title={"Sample Video"} date={1} imgUrl={img1} />
        <Videocard title={"Name name"} date={1} imgUrl={img1} />
        <Videocard title={"Oblag Chamo"} date={1} imgUrl={img1} />
        <Videocard title={"Bean Back"} date={1} imgUrl={img1} />
        <Videocard title={"Music World"} date={1} imgUrl={img1} />
      </MusicInnerContainer>
      </MusicContentContainer2>
    </MusicContainer>
  </MusicWrapper>
</div>;
}

export default Video;
