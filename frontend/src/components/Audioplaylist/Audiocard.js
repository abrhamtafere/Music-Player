import React from "react";
import ChickenImg from "../../images/music1.jpg";
import {
  MusicSmallCards,
  MusicCard,
  MusicCardContent,
  MusicCardHeading,
  MusicCardDetails,
  MusicCardItems,
  MusicCardTitle,
  MusicCardItem,
  MusicCardIcon,
  MusicCardText,
  Img,
} from "./Audio.styles";

function Audiocard() {
  return (
    <div>
        <MusicCard>
          <Img src={ChickenImg} alt="Chicken Music" />
          <MusicCardContent>
            <MusicCardHeading>Music name </MusicCardHeading>
            <MusicCardTitle>Unknown artist </MusicCardTitle>
            <MusicCardDetails>
              <MusicCardItems>
                <MusicCardTitle>disctiption about the music </MusicCardTitle>
                <MusicCardItem>
                  <MusicCardIcon />
                  <MusicCardText>4:17 min</MusicCardText>
                </MusicCardItem>
              </MusicCardItems>
              <MusicCardItems>
                <MusicCardTitle>Edit delete</MusicCardTitle>
              </MusicCardItems>
            </MusicCardDetails>
          </MusicCardContent>
        </MusicCard>
    </div>
  );
}

export default Audiocard;
