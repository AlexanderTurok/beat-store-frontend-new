
// react
import { useState } from "react";
// components
import SearchForm from "./SearchForm";
// images
import { AiOutlineSearch as SearchIcon } from "react-icons/ai";
// style
import "../../style/css/header/search.css";

function Search() {
  const [isClicked, setIsClicked] = useState(false);
  const showSearchBar = () => {
    setIsClicked(!isClicked);
  }

  return (
    <div className="search">
      <SearchIcon 
        className="search-icon"
        onClick={showSearchBar} />
      {isClicked && <SearchForm
        isClicked={isClicked}
        setIsClicked={setIsClicked} />}
    </div>
  )
}

export default Search