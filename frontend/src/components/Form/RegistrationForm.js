import React, { useState } from 'react';
import { Flex, Box, Heading, Button } from 'rebass';
import { Label, Input } from '@rebass/forms';


const RegistrationForm = () => {
  const [songname, setSongname] = useState('');
  const [artist, setArtist] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Here you can handle the form submission logic
    console.log('Registration form submitted:', { songname, artist, password });
  };

  return (
    <Flex
      sx={{
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Box sx={{ width: '100%', px: 3 }}>
        <Heading sx={{ mb: 4 }}>Create an account</Heading>
        <Box as="form" onSubmit={handleSubmit}>
          <Label htmlFor="songname">Song Name</Label>
          <Input
            id="songname"
            name="songname"
            type="text"
            value={songname}
            onChange={(event) => setSongname(event.target.value)}
            mb={3}
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

          <Label htmlFor="password">Password</Label>
          <Input
            id="password"
            name="password"
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            mb={4}
          />
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            name="email"
            type="file"
            placeholder="jane@example.com"
          />
          <Button type="submit" sx={{ width: '100%' }}>
            Add Music
          </Button>
        </Box>
      </Box>
    </Flex>
  );
};

export default RegistrationForm;