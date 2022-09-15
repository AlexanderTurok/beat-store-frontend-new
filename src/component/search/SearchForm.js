
// react
import { useState } from "react";
// components 
import SearchList from "./SearchList";
import SearchInput from "./SearchInput";

function SearchForm({ isClicked, setIsClicked}) {
  const [inputText, setInputText] = useState("");
  let inputHandler = (e) => {
    let lowerCase = e.target.value.toLowerCase();
    setInputText(lowerCase);
  };  

  return (
    <div className="search-form">
      <SearchInput inputHandler={inputHandler} />
      <SearchList 
        input={inputText}
        isClicked={isClicked} 
        setIsClicked={setIsClicked} />
    </div>
  )
}

export default SearchForm