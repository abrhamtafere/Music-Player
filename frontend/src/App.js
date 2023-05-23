//Wrap your components inside the router.
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import { Hero } from "./components";
import UpdateForm from "./components/Form/UpdateForm";
import GlobalStyles from "./Globalstyles";
import { Home, Audio, Video, NotFound } from "./pages";

function App() {
  return (
    <Router>
      <GlobalStyles />
      <Hero />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/audio" element={<Audio />} />
        <Route path="/video" element={<Video />} />
        <Route path="/:id" element={<UpdateForm />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
