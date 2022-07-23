import React from "react";
import { Link } from "react-router-dom";

const SearchResults = ({ filteredData }) => {
  return (
    <div style={{ position: "relative" }}>
      {filteredData.length !== 0 && (
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
      )}
    </div>
  );
};

export default SearchResults;
