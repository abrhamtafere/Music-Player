import React from "react";
import img1 from "../../images/music2.jpg";
import {
  MusicContainer,
  MusicWrapper,
  MusicTitle,
  MusicContentContainer2,
  MusicInnerContainer,
} from "./Video.styles";
import Videocard from "./Videocard";
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"


function Video() {
  const title = "Card tiltle";
const date = "23/34/1212";
const imgUrl = "Card tiltle";

const [sliderRef] = useKeenSlider({
  loop: true,
  mode: "free-snap",
  slides: {
    perView: 3,
    spacing: 15,
  },
})

  return <div>
  <MusicWrapper>
      <MusicTitle>Video Playlists</MusicTitle>
    <MusicContainer>
    <MusicContentContainer2> 
{/* <div ref={sliderRef} className="keen-slider"> */}
      {/* <div  className="keen-slider__slide number-slide1"> */}
        <Videocard title={"Sample Video"} date={1} imgUrl={img1} />
      {/* </div> */}
      {/* <div  className="keen-slider__slide number-slide1"> */}
        <Videocard title={"Name name"} date={1} imgUrl={img1} />
      {/* </div> */}
      {/* <div  className="keen-slider__slide number-slide1"> */}
        <Videocard title={"Oblag Chamo"} date={1} imgUrl={img1} />
      {/* </div> */}
      {/* <div  className="keen-slider__slide number-slide1"> */}
        <Videocard title={"Bean Back"} date={1} imgUrl={img1} />
      {/* </div> */}
      {/* <div  className="keen-slider__slide number-slide1"> */}
        <Videocard title={"Music World"} date={1} imgUrl={img1} />
        {/* </div> */}
        {/* </div> */}

    
      
    </MusicContentContainer2>
    </MusicContainer>
  </MusicWrapper>
</div>;
}

export default Video;
