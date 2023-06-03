import React from "react";
import {
  CardWrapper,
  CardTextWrapper,
  CardTextDate,
  CardTextTitle,
  CardTextBody,
  Video,
} from "./Video.styles";
import Tilt from "react-parallax-tilt";

export const Videocard = ({ title, date, imgUrl, src }) => {
  return (
    <div>
      <Tilt>
        <CardWrapper>
          <Video width="100%" height="100%" controls>
            <source
              src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
              type="video/mp4"
            />
          </Video>
          <CardTextWrapper>
            <CardTextDate>{date} days ago</CardTextDate>
            <CardTextTitle>{title}</CardTextTitle>
            <CardTextBody>
              Lorem ipsum dolor sit amet consectetur, Ducimus, repudiandae
              temporibus omnis illum maxime quod deserunt eligendi dolor
            </CardTextBody>
          </CardTextWrapper>
        </CardWrapper>
      </Tilt>
    </div>
  );
};

export default Videocard;
