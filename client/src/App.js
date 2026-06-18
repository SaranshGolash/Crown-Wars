import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Main from './pages/Main';
import Game from './pages/Game';
import HowToPlay from './pages/HowToPlay';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/game" element={<Game />} />
          <Route path="/how-to-play" element={<HowToPlay />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
