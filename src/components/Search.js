import React from "react";
const Search = ({ placeholder, handleFilter }) => {
  return (
    <div className="search">
      <div className="searchInput">
        <form>
          <input
            id="searchPokemon"
            type="text"
            placeholder={placeholder}
            onChange={handleFilter}
          ></input>
        </form>
      </div>
    </div>
  );
};

export default Search;
