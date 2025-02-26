import React from 'react'
import Track from './Track.js'
import styles from "./app.module.css";

export default function PlaylistResults({trackArray, minusTracks}) {
  return (
    <div>
      {trackArray.map((track) => (
        <div key={track.id} className={styles.trackStyle}>
          <Track track={track} />
        <button onClick={() => minusTracks(track)}>-</button>
        </div>
      ))}
    </div>
  )
}
