import React from "react";
import { Hero, Welcome, Audio, Audiocard, Video, Footer } from "../components";
import Audio2 from "./Audio";

function Home() {
  return <div>
    <Welcome />
    <Audio />
    <Video />
    <div style={{}}>
      <Audio2 />
    </div>
    
    <Footer />
  </div>;
}

export default Home;
