import './App.css';
import { TweetCard } from './components/TweetCard';
import { Container } from '@mui/material';

function App() {
  return (
    <Container sx={{pl: '200px', pt: '100px'}}>
      <TweetCard />
    </Container>
  );
}

export default App;
