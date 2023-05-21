//Wrap your components inside the router.
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import { Hero } from "./components";
import GlobalStyles from "./Globalstyles";
import {Home, Audio, Video, AboutUs, NotFound} from "./pages";

function App() {
  return (
    <Router>
      <GlobalStyles />
      <Hero />
      <Routes>
        <Route path="/" element={<Home />} />
          <Route path="/audio" element={<Audio />} />
          <Route path="/video" element={<Video />} />
          {/* <Route path="/about" element={<AboutUs />} /> */}
          <Route path="/*" element={<NotFound />} />
        
      </Routes>
    </Router>
  );
}

export default App;
