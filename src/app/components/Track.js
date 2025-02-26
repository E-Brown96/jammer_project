import React from 'react'

export default function Track({ track }) {

  return (
    <div>
      <h3>{track['name']}</h3>
      <h4>{track['artist']} | {track['album']}</h4>
    </div>
  )
}
