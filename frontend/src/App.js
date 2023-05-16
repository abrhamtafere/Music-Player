//Wrap your components inside the router.
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Hero } from "./components";
import GlobalStyles from "./Globalstyles";
import NotFound from "./pages/NotFound";
import Home from "./pages/Home";
import Audio from "./pages/Audio";
import Video from "./pages/Video";
import AboutUs from "./pages/AboutUs";

function App() {
  return (
    <Router>
      <GlobalStyles />
      <Hero />
      <Routes>
        <Route path="/" element={<Home />} />
          <Route path="/audio" element={<Audio />} />
          <Route path="/video" element={<Video />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/*" element={<NotFound />} />
        
      </Routes>
    </Router>
  );
}

export default App;
