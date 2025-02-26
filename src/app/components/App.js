'use client';

import React, { useState } from 'react';
import TrackList from './Tracklist';
import SearchBar from './SearchBar';
import SearchResults from './SearchResults';
import styles from "./app.module.css";
import Playlist from './Playlist';
import PlaylistSaving from './SpotifySave';

const hard_coded_tracks = [
  {
    "name": "Blinding Lights",
    "artist": "The Weeknd",
    "album": "After Hours",
    "id": "1"
  },
  {
    "name": "Shape of You",
    "artist": "Ed Sheeran",
    "album": "÷",
    "id": "2"
  },
  {
    "name": "Levitating",
    "artist": "Dua Lipa",
    "album": "Future Nostalgia",
    "id": "3"
  },
  {
    "name": "Good 4 U",
    "artist": "Olivia Rodrigo",
    "album": "SOUR",
    "id": "4"
  },
  {
    "name": "Peaches",
    "artist": "Justin Bieber",
    "album": "Justice",
    "id": "5"
  },
  {
    "name": "Montero (Call Me By Your Name)",
    "artist": "Lil Nas X",
    "album": "Montero",
    "id": "6"
  },
  {
    "name": "Kiss Me More",
    "artist": "Doja Cat feat. SZA",
    "album": "Planet Her",
    "id": "7"
  },
  {
    "name": "Save Your Tears",
    "artist": "The Weeknd",
    "album": "After Hours",
    "id": "8"
  },
  {
    "name": "Industry Baby",
    "artist": "Lil Nas X & Jack Harlow",
    "album": "Montero",
    "id": "9"
  },
  {
    "name": "Heat Waves",
    "artist": "Glass Animals",
    "album": "Dreamland",
    "id": "10"
  },
  {
    "name": "Deja Vu",
    "artist": "Olivia Rodrigo",
    "album": "SOUR",
    "id": "11"
  },
  {
    "name": "Bad Habits",
    "artist": "Ed Sheeran",
    "album": "Equals",
    "id": "12"
  },
  {
    "name": "Stay",
    "artist": "The Kid LAROI & Justin Bieber",
    "album": "F*CK LOVE 3+",
    "id": "13"
  },
  {
    "name": "Shivers",
    "artist": "Ed Sheeran",
    "album": "Equals",
    "id": "14"
  },
  {
    "name": "Blame It On Me",
    "artist": "George Ezra",
    "album": "Wanted On Voyage",
    "id": "15"
  },
  {
    "name": "Dynamite",
    "artist": "BTS",
    "album": "BE",
    "id": "16"
  },
  {
    "name": "Wake Me Up",
    "artist": "Avicii",
    "album": "True",
    "id": "17"
  },
  {
    "name": "Rolling in the Deep",
    "artist": "Adele",
    "album": "21",
    "id": "18"
  },
  {
    "name": "Someone Like You",
    "artist": "Adele",
    "album": "21",
    "id": "19"
  },
  {
    "name": "Uptown Funk",
    "artist": "Mark Ronson feat. Bruno Mars",
    "album": "Uptown Special",
    "id": "20"
  }
]


export default function App() {

  const [searchBarName, setSearchBarName] = useState('')
  const [searchResults, setSearchResults] = useState(hard_coded_tracks);
  const [playlistName, setPlaylistName] = useState('');
  const [playlistTracks, setPlaylistTracks] = useState([])

  const handlePlaylistNameChange = (event) => {
    setPlaylistName(event.target.value)
  }

  const handleAddTrack = (track) => {
    if(!playlistTracks.some((playlistTrack) => playlistTrack.id === track.id)) {
      setPlaylistTracks((prevTracks) => [...prevTracks, track])
    }
  }

  const handleMinusTrack = (track) => {
    setPlaylistTracks((prevTracks) =>
      prevTracks.filter((prevTrack) => prevTrack.id !== track.id)
    );
  }

  const handleSearchName = (event) => {
    const query = event.target.value
    setSearchBarName(query)
  }

  const handleSearchClick = () => {
    const filtered = hard_coded_tracks.filter(
      track => track.name.toLowerCase().includes(searchBarName.toLowerCase())
    )

    setSearchResults(filtered)
  }

  return (
    <div className={styles.containter}>
      <header className={styles.headerDiv}><h1>Jammer</h1></header>
      <div className={styles.bodyDiv}>
        <div className={styles.searchSection}>
          <h2>Please search for a track</h2>
          <input type='text' value={searchBarName} onChange={handleSearchName} />
          <button className={styles.searchButton} onClick={handleSearchClick}>Search</button>
        </div>
        <div className={styles.sideBySide}>
          <div className={styles.sideDiv}>
            <h1>Results</h1>
            <SearchResults trackArray={searchResults} addTracks={handleAddTrack}/>
          </div>
          <div className={styles.sideDiv}>
            <input type='text' value={playlistName} onChange={handlePlaylistNameChange} placeholder="Enter playlist name" />
            <Playlist className={styles.playlist2} trackArray={playlistTracks} minusTracks={handleMinusTrack}/>
            <PlaylistSaving playlistName={playlistName} setPlaylistName={setPlaylistName} playlistTracks={playlistTracks} setPlaylistTracks={setPlaylistTracks}/>
          </div>
        </div>
      </div>
    </div>
  )
}
