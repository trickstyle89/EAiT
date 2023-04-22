import './css/styles.css';
import Main from './components/Main'
import Navbar from './components/Navbar';

function App() {

  return (
    <div className="App">
      <Navbar></Navbar>
      <Main />
      <footer className="footer" >
        <p>EAiT &copy; 2023</p>
      </footer>
    </div>
  );
}

export default App;