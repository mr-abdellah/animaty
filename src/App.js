import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Container from './components/Container';
import Detail from './components/Detail';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/home" element={<Container />} />
        <Route exact path="/anime/:title" element={<Detail />} />
      </Routes>
    </Router>
  );
}

export default App;
