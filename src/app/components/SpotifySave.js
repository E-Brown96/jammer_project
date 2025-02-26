import React, {useState} from 'react'
import styles from "./app.module.css";



export default function PlaylistSaving({ playlistName , setPlaylistName, setPlaylistTracks, playlistTracks}) {
  const [savedLists, setSavedLists] = useState([])

  const handleListAdd = (playlistName) => {
    if (playlistName && !savedLists.includes(playlistName)) {
      setSavedLists((prevLists) => [...prevLists, { name: playlistName, trackCount: playlistTracks.length }]);
    }
    const trackNumber = playlistTracks.length
    setPlaylistName('')
    setPlaylistTracks([])
  }

  const handleMinusList = (list) => {
    setSavedLists((prevLists) =>
      prevLists.filter((prevLists) => prevLists.id !== list.id)
    );
  }

  return (
    <div className={styles.savedLists}>
      <button className={styles.spotify} onClick={() => handleListAdd(playlistName)}>Save to Spotify</button>
      <h2>Saved Playlists:</h2>
      <ul>
        {savedLists.map((list, index) => (
          <li key={index}>Playlist {index + 1}: {list.name} ({list.trackCount} tracks)<button onClick={() => handleMinusList(list)}>x</button></li>
        ))}
      </ul>
    </div>
  )
}
