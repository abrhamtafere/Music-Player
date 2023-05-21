import React, { useState } from "react";
import { Flex, Box, Heading, Button, Text } from "rebass";
import { Label, Input } from "@rebass/forms";

const SongForm = ({ onSubmit, initialData }) => {
  const [file, setFile] = useState(null);
  const [coverImage, setCoverImage] = useState(null);
  const [fileName, setFileName] = useState(initialData?.fileName || "");
  const [artistName, setArtistName] = useState(initialData?.artistName || "");

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    setFile(selectedFile);
    setFileName(selectedFile.name);
  };

  const handleImageChange = (event) => {
    const selectedFile = event.target.files[0];
    setCoverImage(selectedFile);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("file", file);
    formData.append("coverImage", coverImage);
    formData.append("fileName", fileName);
    formData.append("artistName", artistName);
    onSubmit(formData);
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
        <Heading sx={{ mb: 4 }}>
          {initialData ? "Edit song" : "Add a new song"}
        </Heading>
        <Box as="form" onSubmit={handleSubmit}>
          <Label htmlFor="file">Song File</Label>
          <Input
            id="file"
            name="file"
            type="file"
            accept=".mp3"
            onChange={handleFileChange}
            mb={3}
          />

          {initialData && (
            <Text sx={{ mb: 3 }}>Current file: {initialData.fileName}</Text>
          )}

          <Label htmlFor="coverImage">Cover Image</Label>
          <Input
            id="coverImage"
            name="coverImage"
            type="file"
            // accept=".mp3"
            onChange={handleFileChange}
            mb={3}
          />

          {initialData && (
            <Text sx={{ mb: 3 }}>Current file: {initialData.fileName}</Text>
          )}

          <Label htmlFor="artistName">Artist Name</Label>
          <Input
            id="artistName"
            name="artistName"
            type="text"
            value={artistName}
            onChange={(event) => setArtistName(event.target.value)}
            mb={3}
          />

          <Label htmlFor="fileName">File Name</Label>
          <Input
            id="fileName"
            name="fileName"
            type="text"
            value={fileName}
            onChange={(event) => setFileName(event.target.value)}
            mb={4}
          />

          <Button type="submit" sx={{ width: "100%", background: "blue" }}>
            {initialData ? "Save changes" : "Add song"}
          </Button>
        </Box>
      </Box>
    </Flex>
  );
};

export default SongForm;
