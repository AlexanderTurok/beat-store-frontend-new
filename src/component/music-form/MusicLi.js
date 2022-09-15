
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

function MusicLi({ beat }) {
  return (
    <li className="music-li">
      <MusicImage photo={beat.photo_path} />
      <PlayButton className="play-button" />
      <PauseButton className="pause-button" />
      <MusicTitle title={beat.name} />
      <MusicBpm bpm={beat.bpm} />
      <MusicKey key={beat.key} />
      <MusicTags tags={beat.tags} />
      <Share className=" btn-share" />
      <Cart className="cart-image"/>
    </li>
  )
}

export default MusicLi