import Navbar from "../Navbar/Navbar";
import Form from "../Form/Form";
import { Button } from "../../Globalstyles";
import {
  HeroContainer,
  HeroContent,
  HeroContentText,
  HeroTitle,
  HeroTitleText,
  HeroSubTitle,
  HeroText,
} from "./Hero.styles";

const Hero = () => {
  return (
    <div>
      <HeroContainer>
        <Navbar />
        <Form />
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
            <a href="/audio#playlist">
              <Button primary big bigFont bigRadius>
                Go to playlists
              </Button>
            </a>
          </HeroContentText>
        </HeroContent>
      </HeroContainer>
    </div>
  );
};

export default Hero;
