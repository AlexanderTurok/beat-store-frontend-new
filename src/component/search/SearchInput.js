

function SearchInput({ inputHandler }) {
  return (
    <input 
        className='search-input'
        type="text"
        placeholder='Search...'
        onChange={inputHandler} 
      />
  )
}

export default SearchInput