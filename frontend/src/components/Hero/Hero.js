import Navbar from "../Navbar/Navbar";
import { Button } from "../../Globalstyles";
import {
  HeroContainer,
  HeroContent,
  HeroContentText,
  HeroTitle,
  HeroTitleText,
  HeroSubTitle,
  HeroText,
  HeroBtn,
} from "./Hero.styles";

const Hero = () => {
  return (
    <div>
      <HeroContainer>
        <Navbar />
        <HeroContent>
          <HeroContentText>
            <HeroTitle>
              <HeroTitleText>Enjoy</HeroTitleText>
              <HeroTitleText>With Our Musics</HeroTitleText>
            </HeroTitle>
            <HeroSubTitle>For a happy Life</HeroSubTitle>
            <HeroText>
              Discover new music and artists on our website. Listen your favorite songs. Join our community of music lovers today.
            </HeroText>
            <HeroBtn to="/playlist">
              <Button primary big bigFont bigRadius>
                Go to playlists
              </Button>
            </HeroBtn>
          </HeroContentText>
        </HeroContent>
      </HeroContainer>
    </div>
  );
};

export default Hero;
