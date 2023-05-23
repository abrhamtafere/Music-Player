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
import { useDispatch, useSelector } from "react-redux";

import { setLibraryStatus,  } from "../../state/musicSlice";


const Hero = () => {

  const { libraryStatus } = useSelector((state) => state.music);
  const dispatch = useDispatch();


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
              <Button primary big bigFont bigRadius
              onClick={()=> dispatch(setLibraryStatus(!libraryStatus))}
              >
                Go to playlists
              </Button>
          </HeroContentText>
        </HeroContent>
      </HeroContainer>
    </div>
  );
};

export default Hero;
