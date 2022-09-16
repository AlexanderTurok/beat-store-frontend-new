

function MusicImage({ photo }) {
  return (
    <img 
      className="music-image" 
      src={require(`../../../images/${photo}.jpg`)} 
      alt={photo} 
    />
  )
}

export default MusicImage