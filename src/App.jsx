import { useState } from 'react';
import './App.css';
import SearchBar from './assets/SearchBar.jsx';
import SearchResults from './assets/SearchResults.jsx';
import Playlist from './assets/Playlist.jsx';

function App() {
  
  return (
    <>
      <div className="card">
        <h1>Jammming</h1>
        <SearchBar />
      </div>
      <div className="content">
        <SearchResults />
        <Playlist />
      </div>
      <p className="read-the-docs">
        This App is still under consctruction. Please check back later for updates.
      </p>
    </>
  )
}

export default App
