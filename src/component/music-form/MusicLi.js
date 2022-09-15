
// images
import { BsPlayCircle as PlayButton } from "react-icons/bs";
import { BsPauseCircle as PauseButton } from "react-icons/bs";
import { BsFillShareFill as Share } from "react-icons/bs";
import { GiShoppingCart as Cart } from "react-icons/gi";
// components
import MusicBpm from "./music-elements/MusicBpm";
import MusicImage from "./music-elements/MusicImage";
import MusicKey from "./music-elements/MusicKey";
import MusicTags from "./music-elements/MusicTags";
import MusicTitle from "./music-elements/MusicTitle";
// style
import "../../style/css/music-form/music-li.css";

function MusicLi({ beat }) {
  return (
    <li className="music-li">
      <MusicImage photo={beat.photo_path} />
      <PlayButton className="play-button" />
      <PauseButton className="pause-button" />
      <MusicTitle title={beat.name} />
      <MusicBpm bpm={beat.bpm} />
      <MusicKey keyName={beat.key} />
      <MusicTags tags={beat.tags} />
      <Share className=" music-share" />
      <Cart className="music-cart"/>
    </li>
  )
}

export default MusicLi