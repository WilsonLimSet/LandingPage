import { ChakraProvider } from '@chakra-ui/react';
import ReactDOM from 'react-dom';
import SpotifyNowPlaying from './spotify/SpotifyNowPlaying';
import React from "react";
import SleepData from "./Oura"
require('dotenv').config();

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider>
      <SpotifyNowPlaying/>
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById('root')
);