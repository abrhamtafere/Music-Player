import {
  WelcomeContainer,
  WelcomeContent,
  WelcomeImg,
  WelcomeContentText,
  WelcomeContentTitle,
  WelcomeText,
  Img,
} from "./Welcome.styles";
import MusicImg from "../../images/music2.jpg";
const Welcome = () => {
  return (
    <div>
      <WelcomeContainer>
        <WelcomeContent>
          <WelcomeImg>
            <Img src={MusicImg} alt=" Delious Pizza" />
          </WelcomeImg>
          <WelcomeContentText>
            <WelcomeContentTitle>Welcome</WelcomeContentTitle>
            <WelcomeText>
              Welcome to our music playing website! We're excited to share with
              you why we think our website is the best choice for all your music
              needs.
            </WelcomeText>
            <WelcomeText>
              Turn up the volume, hear the beat, Our website's got what you
              need, Find your rhythm, dance and sway, Let our music light up
              your day, Join our community, let's play! 
              <br/><br/>
              Overall, we believe that
              our music playing website provides the ultimate listening
              experience and is the best choice for anyone who loves music.
            </WelcomeText>
          </WelcomeContentText>
        </WelcomeContent>
      </WelcomeContainer>
    </div>
  );
};

export default Welcome;
