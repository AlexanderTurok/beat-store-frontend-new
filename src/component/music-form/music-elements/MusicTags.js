
// components
import MusicTag from "./MusicTag";

function MusicTags({ tags }) {
  return (
    <ul className="music-tags">
      {tags.map((tag) => (
        <MusicTag key={tag.id} tag={tag} />
      ))}
    </ul>
  )
}

export default MusicTags