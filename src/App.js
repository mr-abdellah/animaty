import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { loadAnime } from './redux/cards';
import './App.css';
import Navbar from './components/Navbar';
import Container from './components/Container';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadAnime());
  }, []);
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Container />} />
      </Routes>
    </Router>
  );
}

export default App;
