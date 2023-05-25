import styled from "styled-components";
import { Container } from "../../Globalstyles";

export const MusicWrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 6rem 0rem;

  //scroll
`;

export const Small = styled.small`
  color: grey;
`;
export const Mobile = styled.div`
display: flex;
justify-content: center;
align-items: center;
margin: 10px 20px;
margin: ;
@media only screen and (min-width: 700px) {
 display: none;
}
`;

export const Middle = styled.div`
display: flex;
justify-content: center;
align-items: center;
margin: 10px 20px;
margin: ;
@media only screen and (min-width: 700px && max-width: 1380px) {
 display: none;
}
`;

export const Pc = styled.div`
display: flex;
@media only screen and (max-width: 1380px) {
 display: none;
}
`;

export const MusicContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  ${Container};
  padding: 0;
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

export const MusicContentContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  max-width: 100vw;
  
`;

export const MusicContentContainer2 = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  max-width: 100vw;
  overflow-x: scroll;
  &::-webkit-scrollbar {
    display: none;
    width: 5px;
    background-color: green;
}
`;

export const MusicInnerContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-left: 800px;
`;


//Music card section

export const CardWrapper = styled.div`
  display: grid;
  grid-template-columns: 250px;
  grid-template-rows: 160px 210px;
  
  grid-template-areas: "image" "text" "stats";
  border-radius: 0px 80px 0px 80px;
  background: #fff;
  box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.9);
  text-align: center;
  margin: 20px;
  padding: 50px;
  @media only screen and (max-width: 600px) {
    padding: 5px;
    margin: 5px;
    border-radius: 0px 20px 0px 20px;
  }
  &:hover {
    background-color: #FEDE5B;
    transition: 1s;
    color: yellow;
    & CardTextWrapper{
      background-color: #FEDE5B;
    }
  }
`;



export const Video = styled.video`
  width: 100%;
  background-image: url(${({ background }) => background});
  // border-top-left-radius: 15px;
  // border-top-right-radius: 15px;
  background-size: cover;
`;

export const CardTextWrapper = styled.div`
  grid-area: text;
  margin: 25px;
`;

export const CardTextDate = styled.span`
  color: rgb(255, 7, 110);
  font-size: 13px;
`;

export const CardTextTitle = styled.h2`
  margin-top: 0px;
  font-size: 2rem;
  box-sizing: border-box;
  min-width: 0px;
  line-height: 1.2;
  margin: 0px;
  background: linear-gradient(
    110.78deg,
    rgb(118, 230, 80) -1.13%,
    rgb(249, 214, 73) 15.22%,
    rgb(240, 142, 53) 32.09%,
    rgb(236, 81, 87) 48.96%,
    rgb(255, 24, 189) 67.94%,
    rgb(26, 75, 255) 85.34%,
    rgb(98, 216, 249) 99.57%
  );
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
`;

export const CardTextBody = styled.p`
  color: grey;
  font-size: 15px;
  font-weight: 300;
`;

export const CardStatWrapper = styled.div`
  grid-area: stats;
  display: grid;
  /* grid-template-columns: 1fr 1fr 1fr; */
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr;

  // border-bottom-left-radius: 15px;
  // border-bottom-right-radius: 15px;
  background: #5930e5;
`;

export const CardStats = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  color: white;
  padding: 10px;
`;

export const LinkText = styled.a`
  color: #fff;
  text-decoration: none;
`;
