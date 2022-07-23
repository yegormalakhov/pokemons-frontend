import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Search = ({ placeholder, data, handleFilter}) => {
//   const [filteredData, setFilteredData] = useState([]);

//   const handleFilter = (e) => {
//     const searchWord = e.target.value;

//     const newFilter = data.filter((pokemon) => {
//       return pokemon.name.english
//         .toLowerCase()
//         .includes(searchWord.toLowerCase());
//     });

//     if (searchWord === "") {
//       setFilteredData([]);
//     } else {
//       setFilteredData(newFilter);
//     }
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log(filteredData);
//     //need to add check existance of pokemon in data
//     //link to the correct route
//     // if()
//   };

  return (
    <div className="search">
      <div className="searchInput">
        <form 
        // onSubmit={handleSubmit}
        >
          <input
            id="searchPokemon"
            type="text"
            placeholder={placeholder}
            onChange={handleFilter}
          ></input>
        </form>
      </div>
      {/* {filteredData.length !== 0 && (
        <div className="dataResult">
          {filteredData.map((pokemon) => {
            return (
              <Link
                className="searchResultLink"
                style={{ display: "block" }}
                key={pokemon.id}
                to={`/pokemon/${pokemon.id}`}
              >
                {pokemon.name.english}
              </Link>
            );
          })}
        </div>
      )} */}
    </div>
  );
};

export default Search;