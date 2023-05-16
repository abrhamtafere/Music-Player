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
      <MusicSmallCards>
        <MusicCard>
          <Img src={ChickenImg} alt="Chicken Music" />
          <MusicCardContent>
            <MusicCardHeading>Pretzel-Crusted Chicken</MusicCardHeading>
            <MusicCardDetails>
              <MusicCardItems>
                <MusicCardTitle>Serving</MusicCardTitle>
                <MusicCardItem>
                  <MusicCardIcon />
                  <MusicCardText>2</MusicCardText>
                </MusicCardItem>
              </MusicCardItems>
              <MusicCardItems>
                <MusicCardTitle>Cook time</MusicCardTitle>
                <MusicCardText>30-45 min</MusicCardText>
              </MusicCardItems>
              <MusicCardItems>
                <MusicCardTitle>Difficulty level</MusicCardTitle>
                <MusicCardText>20%</MusicCardText>
              </MusicCardItems>
            </MusicCardDetails>
          </MusicCardContent>
        </MusicCard>
      </MusicSmallCards>
    </div>
  );
}

export default Audiocard;
