import React, { useState } from "react";
import { Flex, Box, Heading, Button } from "rebass";
import { Label, Input } from "@rebass/forms";
import { useNavigate } from "react-router-dom";
import { createSong, setformStatus } from "../../state/musicSlice";
import { useDispatch, useSelector } from "react-redux";

const SongForm = () => {
  const [audio, setAudio] = useState(null);
  const [cover, setCover] = useState(null);
  const [name, setName] = useState("");
  const [artist, setArtist] = useState("");

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    setAudio(selectedFile);
    setName(selectedFile.name);
  };

  const handleImageChange = (event) => {
    const selectedImage = event.target.files[0];
    setCover(selectedImage);
  };

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("audio", audio);
    formData.append("cover", cover);
    formData.append("name", name);
    formData.append("artist", artist);

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
      }}
    >
      <Box sx={{ maxWidth: "400px", width: "100%", px: 3 }}>
        <Heading sx={{ mb: 1 }}>Add a new song</Heading>
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
            sx={{ cursor: "pointer" }}
          />

          <Label htmlFor="cover">Cover Image</Label>
          <Input
            id="cover"
            name="cover"
            type="file"
            required
            accept="image/*"
            onChange={handleImageChange}
            mb={3}
            sx={{ cursor: "pointer" }}
          />

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

          <Button
            type="submit"
            sx={{ width: "100%", background: "blue", cursor: "pointer" }}
          >
            Add song
          </Button>

          <Button
            type="button"
            sx={{
              width: "100%",
              background: "#EE7013",
              marginTop: "10px",
              cursor: "pointer",
            }}
            onClick={() => dispatch(setformStatus(!formStatus))}
          >
            Cancel
          </Button>
        </Box>
      </Box>
    </Flex>
  );
};

export default SongForm;
