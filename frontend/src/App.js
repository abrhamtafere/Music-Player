//Wrap your components inside the router.
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import { Hero } from "./components";
import UpdateForm from "./components/Form/UpdateForm";
import GlobalStyles from "./Globalstyles";
import { Home, AudioPage, Video, NotFound } from "./pages";
import { getSongs } from "./state/musicSlice";

function App() {

  const { songs } = useSelector((state) => state.music);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSongs());
  }, [dispatch]);
  console.log('from app');
  console.log(songs);

  return (
    <Router>
      <GlobalStyles />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/audio" element={<AudioPage />} />
        <Route path="/video" element={<Video />} />
        <Route path="/update/:id" element={<UpdateForm />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
