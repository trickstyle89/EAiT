import './css/styles.css';
import Main from './components/Main'
import Navbar from './components/Navbar';
import { Box } from '@mui/material';


function App() {

  return (
    <Box sx={{
      display: "flex",
      flexDirection: "column",
      minHeight: "100vh",
    }}>
      <Navbar />
      <Main />
      <footer className="footer" style={{ marginTop: "auto" }} >
        <p>EAiT &copy; 2023</p>
      </footer>
    </Box >
  );
}

export default App;