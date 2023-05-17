import { OutlineButton } from "../../Globalstyles";
import SalmonImg from "../../images/music1.jpg";
import ChickenImg from "../../images/music1.jpg";
import PizzaImg from "../../images/music1.jpg";
import PastaImg from "../../images/music1.jpg";
import SaladImg from "../../images/music1.jpg";
import {
  MusicContainer,
  MusicWrapper,
  MusicTitle,
  MusicContentContainer,
  MusicCardWrapper,
  MusicFeature,
  MusicFeatureContent,
  MusicFeatureTitle,
  MusicFeatureText,
  MusicFeatureDetails,
  MusicFeatureItem,
  MusicItemTitle,
  MusicItemContent,
  MusicItemIcon,
  MusicItemText,
  MusicCardSection,
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
  MusicImg,
  Img,
} from "./Audio.styles";
import Audiocard from "./Audiocard";
const Audio = () => {
  return (
    <div>
      <MusicWrapper>
        <MusicContainer>
          <MusicTitle>Playlists</MusicTitle>
          <MusicContentContainer>
            <MusicCardWrapper>
              <MusicCardSection>
                <MusicSmallCards>
                  <Audiocard />
                  <Audiocard />
                  <Audiocard />
                  <Audiocard />
                  <Audiocard />
                  <Audiocard />
                </MusicSmallCards>
              </MusicCardSection>
            </MusicCardWrapper>
          </MusicContentContainer>
        </MusicContainer>
      </MusicWrapper>
    </div>
  );
};

export default Audio;
