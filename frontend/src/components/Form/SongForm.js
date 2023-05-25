import React, { useState } from "react";
import { Flex, Box, Heading, Button, Text, Link } from "rebass";
import { Label, Input } from "@rebass/forms";
import { useNavigate } from "react-router-dom";
import { createSong, setformStatus } from "../../state/musicSlice";
import { useDispatch, useSelector } from "react-redux";

const SongForm = ({ initialData }) => {
  const [audio, setAudio] = useState(null);
  const [cover, setCover] = useState(null);
  const [name, setName] = useState(initialData?.name || "");
  const [artist, setArtist] = useState(initialData?.artist || "");

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    setAudio(selectedFile);
    setName(selectedFile.name);
  };

  const handleImageChange = (event) => {
    const selectedImage = event.target.files[0];
    setCover(selectedImage);
  };
  // const handleAudioChange = (e) => {
  //   e.preventDefault();
  //   setAudio(e.target.files[0]);
  // };
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("audio", audio);
    formData.append("cover", cover);
    formData.append("name", name);
    formData.append("artist", artist);
    //continue from this
    // axios.post("http://127.0.0.1:5000/api/songs", formData).then((res) => {
    //   alert("Data Posted Successfully!");
    //   navigate("/");
    // });
    // onSubmit(formData);
    dispatch(createSong(formData));
    alert("Data Posted Successfully!");
    navigate("/");
  };

  const { formStatus } = useSelector((state) => state.music);
  const dispatch = useDispatch();

  return (
    <Flex
      sx={{
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        // minHeight: '100vh',
      }}
    >
      <Box sx={{ maxWidth: "400px", width: "100%", px: 3 }}>
        <Heading sx={{ mb: 4 }}>
          {initialData ? "Edit song" : "Add a new song"}
        </Heading>
        <Box as="form" onSubmit={handleSubmit}>
          <Label htmlFor="audio">Song audio</Label>
          <Input
            id="audio"
            name="audio"
            type="file"
            accept="audio/*"
            required
            onChange={handleFileChange}
            mb={3}
            sx={{ cursor: 'pointer' }}
          />

          {initialData && (
            <Text sx={{ mb: 3 }}>Current audio: {initialData.name}</Text>
          )}

          <Label htmlFor="cover">Cover Image</Label>
          <Input
            id="cover"
            name="cover"
            type="file"
            required
            accept="image/*"
            // accept=".mp3"
            onChange={handleImageChange}
            mb={3}
            sx={{ cursor: 'pointer' }}
          />

          {initialData && (
            <Text sx={{ mb: 3 }}>Current cover image: {initialData.cover}</Text>
          )}

          <Label htmlFor="artist">Artist Name</Label>
          <Input
            id="artist"
            name="artist"
            type="text"
            value={artist}
            onChange={(event) => setArtist(event.target.value)}
            mb={3}
          />

          <Label htmlFor="name">audio Name</Label>
          <Input
            id="name"
            name="name"
            type="text"
            value={name}
            onChange={(event) => setName(event.target.value)}
            mb={4}
          /> 

          <Button type="submit" sx={{ width: "100%", background: "blue", cursor: 'pointer' }} 
          >
            {initialData ? "Save changes" : "Add song"}
          </Button>
          
            <Button type="button" sx={{ width: "100%", background: "#EE7013", marginTop: '10px', cursor: 'pointer' }}
            onClick={() => dispatch(setformStatus(!formStatus))}>
              {initialData ? "Save changes" : "Cancel"}
            </Button>
      </Box><>
          </>
        </Box>
    </Flex>
  );
};

export default SongForm;
