import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Main from './pages/Main';
import Game from './pages/Game';
import HowToPlay from './pages/HowToPlay';
import Credits from './pages/Credits';
import { sounds } from './utils/soundManager';

function App() {
  useEffect(() => {
    const initAudio = () => {
      if (!sounds.bgMusic.playing()) {
        sounds.bgMusic.play();
      }
    };

    // Try playing immediately
    initAudio();

    // Fallback for strict browser autoplay policies
    document.addEventListener('click', initAudio);
    document.addEventListener('keydown', initAudio);

    return () => {
      document.removeEventListener('click', initAudio);
      document.removeEventListener('keydown', initAudio);
    };
  }, []);

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/game" element={<Game />} />
          <Route path="/how-to-play" element={<HowToPlay />} />
          <Route path="/credits" element={<Credits />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
