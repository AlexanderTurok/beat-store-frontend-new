
// components
import MusicLi from "./MusicLi";
// style
import "../../style/css/music-list/music-list.css";

import data from './data.json';
import Columns from "./Columns";

function MusicList() {
  return (
    <ul className='music-list'>
      <Columns />
      {data.map((beat) => (
        <MusicLi key={beat.id} beat={beat} />
      ))}
    </ul>
  )
}

export default MusicList