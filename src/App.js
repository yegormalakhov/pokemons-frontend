import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import Header from "./components/Header";
import AllPokemons from "./components/AllPokemons";
import SinglePokemon from "./components/SinglePokemon";
import Arena from "./components/Arena";
import Footer from "./components/Footer";
import serverURL from "./serverURL";
import "bootstrap/dist/css/bootstrap.min.css";
import Search from "./components/Search";
import SearchResults from "./components/searchResults";

const App = () => {
  const [allPokemons, setAllPokemons] = useState([]);
  const [userPokemon, setUserPokemon] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  //set user pokemon state
  const handleChoice = (e) => {
    const targetPokemonId = e.target.attributes.payload.value;
    setUserPokemon(targetPokemonId);
  };

  const handleFilter = (e) => {
    const searchWord = e.target.value;
    const newFilter = allPokemons.filter((pokemon) => {
      return pokemon.name.english
        .toLowerCase()
        .includes(searchWord.toLowerCase());
    });

    if (searchWord === "") {
      setFilteredData([]);
    } else {
      setFilteredData(newFilter);
    }
  };

  useEffect(() => {
    fetch(`${serverURL}/pokemons`)
      .then((res) => res.json())
      .then((data) => {
        setAllPokemons(data);
      })
      .catch((err) => console.log({ fetchAllArticlesError: err.message }));
  }, []);

  if (!allPokemons) {
    return <h1>Loading...</h1>;
  }

  return (
    <>
      <div style={{ position: "relative" }}>
        <div className="headerContainer">
          <Header pokemons={allPokemons} />
          <Search
            className="searchContainer"
            style={{ color: "black" }}
            placeholder={"search pokemon"}
            handleFilter={handleFilter}
          />
        </div>
        <SearchResults
          style={{ position: "absolute" }}
          className="searchResultsList"
          filteredData={filteredData}
        />
      </div>

      <div className="main-container">
        <div className="poke-body">
          <Routes>
            <Route
              path="/"
              element={
                <AllPokemons
                  pokemons={allPokemons}
                  chosePokemon={handleChoice}
                />
              }
            />
            <Route
              path="/pokemon/:id"
              element={
                <SinglePokemon
                  pokemons={allPokemons}
                  chosePokemon={handleChoice}
                />
              }
            />
            <Route
              path="/arena"
              element={
                <Arena pokemons={allPokemons} userPokemon={userPokemon} />
              }
            />
          </Routes>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default App;