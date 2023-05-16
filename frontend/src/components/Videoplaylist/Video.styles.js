import styled from "styled-components";
import { Container } from "../../Globalstyles";

export const MusicWrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 6rem 0;
`;

export const MusicContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  ${Container};
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
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;


//Music card section
