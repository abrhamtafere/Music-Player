import React from "react";
import { Hero, Welcome, Audio, Audiocard, Video, Footer } from "../components";
import Slider from "../components/Slider/Sliderkeen";
import Audio2 from "./Audio";

function Home() {
  return <div>
    <Hero />
    <Welcome />
    <Audio />
    <Video />
    <div style={{}}>
      {/* <Audio2 /> */}
    </div>
    {/* <Slider /> */}
    <Footer />
  </div>;
}

export default Home;
