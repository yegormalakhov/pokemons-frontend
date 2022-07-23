import React, { useEffect, useState } from "react";
import { Route, Routes, Link, NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import Header from "./components/Header";
import AllPokemons from "./components/AllPokemons";
import SinglePokemon from "./components/SinglePokemon";
import Arena from "./components/Arena";
import Footer from "./components/Footer";
import serverURL from "./serverURL";
import "bootstrap/dist/css/bootstrap.min.css";
// import { Container } from "react-bootstrap";
// import ReactPaginate from "react-paginate";

const App = () => {
  const [pokemons, setPokemons] = useState([]);
  const [userPokemon, setUserPokemon] = useState([]);


  //set user pokemon state
  const handleChoice = (event) => {
    // console.log(event.target.attributes.payload.value);
    const targetPokemonId = event.target.attributes.payload.value;
    console.log(targetPokemonId);
    setUserPokemon(targetPokemonId);
  };

  useEffect(() => {
    fetch(`${serverURL}/pokemons`)
      .then((res) => res.json())
      .then((data) => {
        setPokemons(data);
      })
      .catch((err) => console.log({ fetchAllArticlesError: err.message }));
  }, []);

  if (!pokemons) {
    return <h1>Loading...</h1>;
  }
  return (
    <>
      <Header pokemons={pokemons}/>
      <div className="main-container">
        <div className="poke-body">
          <Routes>
            <Route path="/" element={<AllPokemons pokemons={pokemons} />} />
            <Route
              path="/pokemon/:id"
              element={
                <SinglePokemon
                  pokemons={pokemons}
                  chosePokemon={handleChoice}
                />
              }
            />
            <Route />
            <Route path="/arena" element={<Arena pokemons={pokemons} />} />
            {/* <Route path="/statistics" element={<Statistics />} /> */}
          </Routes>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default App;

// ==> for pagination
// const [allPokemons, setAllPokemons] = useState([]);
// const [totalPages, setTotalPages] = useState(0);
// const [itemOffset, setItemOffset] = useState(0);

// const pokemonsPerPage = 10;
// const endOffset = itemOffset + pokemonsPerPage;
// useEffect(() => {
//   setPokemons(allPokemons.slice(itemOffset, endOffset));
//   setTotalPages(Math.ceil(allPokemons.length / pokemonsPerPage));
// }, [allPokemons, itemOffset]);

// const handleChange = (page) => {
//   const newOffset = page.selected * pokemonsPerPage;
//   setItemOffset(newOffset);
// };

{
  /* <ReactPaginate
      className="pagination py-4 justify-content-center"
      nextLabel="Next >"
      previousLabel="< Previous"
      breakLabel="..."
      onPageChange={handleChange}
      pageCount={totalPages}
      pageClassName="page-item"
      pageLinkClassName="page-link"
      nextClassName="page-item"
      previousClassName="page-item"
      nextLinkClassName="page-link"
      previousLinkClassName="page-link"
      breakClassName="page-item"
      breakLinkClassName="page-link"
      containerClassName="pagination"
      activeClassName="active"
      pageRangeDisplayed={3}
      marginPagesDisplayed={4}
    /> */
}
