import React from "react";

const SearchResults = ({ filteredData }) => {
  return (
    <div style={{ position: "relative" }}>
      {filteredData.length !== 0 && (
        <div className="dataResult">
          {filteredData.map((pokemon) => {
            return (
              <a
                className="searchResultLink"
                style={{ display: "block" }}
                key={pokemon.id}
                href={`/pokemon/${pokemon.id}`}
              >
                {pokemon.name.english}
              </a>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default SearchResults;
