import React, { useState } from "react";
import { Flex, Box, Heading, Button, Text, Link } from "rebass";
import { Label, Input } from "@rebass/forms";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import {
  setformStatus2,
  setUpdateStatus,
  updateSong,
} from "../../state/musicSlice";

const SongUpdateForm = ({ initialData, id }) => {
  // const [audio, setAudio] = useState(null);
  // const [cover, setCover] = useState(null);
  const [name, setName] = useState(initialData?.name || "");
  const [artist, setArtist] = useState(initialData?.artist || "");

  const { formStatus2, updateStatus } = useSelector((state) => state.music);
  const dispatch = useDispatch();
  // const handleFileChange = (event) => {
  //   const selectedFile = event.target.files[0];
  //   setAudio(selectedFile);
  //   setName(selectedFile.name);
  // };

  // const handleImageChange = (event) => {
  //   const selectedImage = event.target.files[0];
  //   setCover(selectedImage);
  // };
  // const handleAudioChange = (e) => {
  //   e.preventDefault();
  //   setAudio(e.target.files[0]);
  // };
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData();
    // formData.append("audio", initialData.audio);
    // formData.append("cover", initialData.cover);
    formData.append("name", name);
    formData.append("artist", artist);
    //continue from this initialData._id
    dispatch(updateSong({ formData: formData, _id: id }));
    alert("Data Updated Successfully!");
    dispatch(setUpdateStatus(!updateStatus));
    navigate("/");
    // eslint-disable-next-line no-restricted-globals
    location.reload();
    // onSubmit(formData);
  };

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
        <Heading sx={{ mb: 4 }}>Edit song
        </Heading>
        <Box as="form" onSubmit={handleSubmit}>
          <Label htmlFor="artist">Artist Name</Label>
          <Input
            id="artist"
            name="artist"
            type="text"
            value={artist}
            onChange={(event) => setArtist(event.target.value)}
            mb={3}
          />
          {/* <Text sx={{ mb: 3 }}>Current audio: {initialData.name}</Text> */}

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
            sx={{ width: "100%", background: "blue" }}
            onClick={() => dispatch(setformStatus2(!formStatus2))}
          >
            Save changes
          </Button>
          <Link href="/">

          <Button
            type="button"
            sx={{
              width: "100%",
              background: "#EE7013",
              marginTop: "10px",
              cursor: "pointer",
            }}
            onClick={() => dispatch(setformStatus2(!formStatus2))}
            >
            Cancel
          </Button>
            </Link>
        </Box>
      </Box>
    </Flex>
  );
};

export default SongUpdateForm;
