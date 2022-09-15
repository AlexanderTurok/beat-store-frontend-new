
// components
import Columns from "./Columns"
import MusicList from "./MusicList"
// style
import "../../style/css/music-form/music-form.css";

function MusicForm() {
  return (
    <div className="music-form">
      <Columns />
      <MusicList />
    </div>
  )
}

export default MusicForm