import React from 'react'
import TrackList from './Tracklist.js'

export default function SearchResults({trackArray, addTracks}) {
  return (
    <div>
      <TrackList trackArray={trackArray} addTracks={addTracks}/>
    </div>
  )
}
