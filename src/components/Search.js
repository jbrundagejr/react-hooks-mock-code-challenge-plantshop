
function Search({searchedPlant, onSearchPlant}) { 
  return (
    <div className="searchbar">
      <label htmlFor="search">Search Plants:</label>
      <input
        type="text"
        id="search"
        placeholder="Type a name to search..."
        value={searchedPlant}
        onChange={e => onSearchPlant(e.target.value)}
      />
    </div>
  );
}

export default Search;
