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
const Audio = () => {
  return (
    <div>
      <MusicWrapper>
        <MusicContainer>
          <MusicTitle>Playlists</MusicTitle>
          <MusicContentContainer>
            <MusicCardWrapper>
              <MusicFeature>
                <MusicImg src={SalmonImg} alt="Salmon Song" />
                <MusicFeatureContent>
                  <MusicFeatureTitle>Salmon and Hot Music</MusicFeatureTitle>
                  <MusicFeatureText>
                    The hot honey kinda sounds
                  </MusicFeatureText>
                  <MusicFeatureDetails>
                    <MusicFeatureItem>
                      <MusicItemTitle>Serving</MusicItemTitle>
                      <MusicItemContent>
                        <MusicItemIcon />
                        <MusicItemText>2</MusicItemText>
                      </MusicItemContent>
                    </MusicFeatureItem>
                    <MusicFeatureItem>
                      <MusicItemTitle>Cook time</MusicItemTitle>
                      <MusicItemText>35-45 min</MusicItemText>
                    </MusicFeatureItem>
                    <MusicFeatureItem>
                      <MusicItemTitle>Difficulty level</MusicItemTitle>
                      <MusicItemText>20%</MusicItemText>
                    </MusicFeatureItem>
                  </MusicFeatureDetails>
                </MusicFeatureContent>
              </MusicFeature>
              <MusicCardSection>
                <MusicSmallCards>
                  <MusicCard>
                    <Img src={ChickenImg} alt="Chicken Music" />
                    <MusicCardContent>
                      <MusicCardHeading>
                        Pretzel-Crusted Chicken
                      </MusicCardHeading>
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
                  <MusicCard>
                    <Img src={SaladImg} alt="Salad Music" />
                    <MusicCardContent>
                      <MusicCardHeading>Sesame Asian Salad</MusicCardHeading>
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
                          <MusicCardText>10-15 min</MusicCardText>
                        </MusicCardItems>
                        <MusicCardItems>
                          <MusicCardTitle>Difficulty level</MusicCardTitle>
                          <MusicCardText>10%</MusicCardText>
                        </MusicCardItems>
                      </MusicCardDetails>
                    </MusicCardContent>
                  </MusicCard>
                </MusicSmallCards>
                <MusicSmallCards>
                  <MusicCard>
                    <Img src={PizzaImg} alt="Pizza Music" />
                    <MusicCardContent>
                      <MusicCardHeading>
                        Italian Pizza with Cheese
                      </MusicCardHeading>
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
                  <MusicCard>
                    <Img src={PastaImg} alt="Pasta Music" />
                    <MusicCardContent>
                      <MusicCardHeading>
                        Pasta with creamy sause
                      </MusicCardHeading>
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
                          <MusicCardText>10-15 min</MusicCardText>
                        </MusicCardItems>
                        <MusicCardItems>
                          <MusicCardTitle>Difficulty level</MusicCardTitle>
                          <MusicCardText>10%</MusicCardText>
                        </MusicCardItems>
                      </MusicCardDetails>
                    </MusicCardContent>
                  </MusicCard>
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
