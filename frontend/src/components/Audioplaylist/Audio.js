import { useSelector } from "react-redux";
import {
  MusicContainer,
  MusicWrapper,
  MusicTitle,
  MusicContentContainer,
  MusicCardWrapper,
  MusicCardSection,
  MusicSmallCards,
} from "./Audio.styles";
import Audiocard from "./Audiocard";
const Audio = ({ song, audioRef }) => {
  const { songs } = useSelector((state) => state.music);

  return (
    <div>
      <MusicWrapper>
        <MusicContainer>
          <MusicTitle>Playlists</MusicTitle>
          <MusicContentContainer>
            <MusicCardWrapper>
              <MusicCardSection>
                <MusicSmallCards>
                  {songs.map((song) => (
                    <>
                      <Audiocard
                        song={song}
                        key={song.id}
                        audioRef={audioRef}
                      />
                    </>
                  ))}
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
