import React from 'react'
import PlaylistResults from './PlaylistResults.js'

export default function Playlist({trackArray, minusTracks}) {
  return (
    <div>
      <PlaylistResults trackArray={trackArray} minusTracks={minusTracks}/>
    </div>
  )
}
