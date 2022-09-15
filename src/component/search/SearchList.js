
import SearchItem from "./SearchItem";

// TODO: remove
const data = [{
  "id": 1,
  "name": "beat 1"
}, {
  "id": 2,
  "name": "beat 2"
}] 

function SearchList() {
  return (
    <ul className="search-list">
      {data.map((beat) => (
        <SearchItem key={beat.id} beat={beat}/>
      ))}
    </ul>
  )
}

export default SearchList