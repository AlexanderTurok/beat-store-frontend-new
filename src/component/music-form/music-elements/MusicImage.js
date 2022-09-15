
import React from 'react'

function MusicImage({ photo }) {
  return (
    <img 
      className="music-image" 
      src={`../../${photo}`} 
      alt="beat album" 
    />
  )
}

export default MusicImage