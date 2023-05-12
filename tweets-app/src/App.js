import './App.css';
import { TweetsList } from './components/TweetsList';
import { Container } from '@mui/material';

function App() {
  return (
    <Container sx={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center'}}>
      <TweetsList />
    </Container>
  );
}

export default App;
