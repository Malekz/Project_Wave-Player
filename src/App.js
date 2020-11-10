import React, { useState } from 'react';

// Import Styles
import './styles/app.scss';

// Ading Components
import Player from './components/player';
import Song from './components/song';

// Import Data
import data from './data';

function App() {
  const [songs, setSongs] = useState(data());
  const [currentSong, setCurrentSong] = useState(songs[0]);
  const [isPlaying, setIsplaying] = useState(false);
  return (
    <div className="App">
      <Song currentSong={currentSong} />
      <Player
        setIsplaying={setIsplaying}
        isPlaying={isPlaying}
        currentSong={currentSong}
      />
    </div>
  );
}

export default App;
