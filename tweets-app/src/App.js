import './App.css';
import { TweetCard } from './components/TweetCard';
import { TweetsList } from './components/TweetsList';
import { Container } from '@mui/material';
import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://64414784792fe886a8a33619.mockapi.io/";

function App() {
  return (
    <Container sx={{pl: '200px', pt: '100px'}}>
      <TweetsList />
    </Container>
  );
}

export default App;
