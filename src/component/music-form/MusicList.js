
// components
import MusicLi from "./MusicLi";

import data from './data.json';

function MusicList() {
  return (
    <ul className='music-list'>
      {data.map((beat) => (
        <MusicLi key={beat.id} beat={beat} />
      ))}
    </ul>
  )
}

export default MusicList