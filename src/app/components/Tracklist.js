import Track from './Track.js'
import styles from "./app.module.css";

export default function TrackList({trackArray, addTracks}) {
  return (
    <div>
      {trackArray.map((track) => (
        <div key={track.id} className={styles.trackStyle}>
          <Track track={track} />
        <button onClick={() => addTracks(track)}>+</button>
        </div>
      ))}
    </div>
  )
}
