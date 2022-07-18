import React, { useEffect, useState } from "react";
import { Route, Routes, Link, NavLink } from "react-router-dom";
import "./index.css";
import Header from "./components/Header";
import AllPokemons from "./components/AllPokemons";
import SinglePokemon from "./components/SinglePokemon";
import Arena from "./components/Arena";
import Footer from "./components/Footer";
import serverURL from "./serverURL";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import ReactPaginate from "react-paginate";

const App = () => {
  const [allPokemons, setAllPokemons] = useState([]);
  const [pokemons, setPokemons] = useState([]);
  const [totalPages, setTotalPages] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);

  const pokemonsPerPage = 10;
  const endOffset = itemOffset + pokemonsPerPage;

  useEffect(() => {
    fetch(`${serverURL}/pokemons`)
      .then((res) => res.json())
      .then((data) => {
        setAllPokemons(data);
      })
      .catch((err) => console.log({ fetchAllArticlesError: err.message }));
  }, []);

  useEffect(() => {
    setPokemons(allPokemons.slice(itemOffset, endOffset));
    setTotalPages(Math.ceil(allPokemons.length / pokemonsPerPage));
  }, [allPokemons, itemOffset]);

  const handleChange = (page) => {
    const newOffset = page.selected * pokemonsPerPage;
    setItemOffset(newOffset);
  };

  if (!allPokemons) {
    return <h1>Loading...</h1>;
  }
  return (
    <>
      <Header />
      <main className="py-4">
        <Container>
          <Routes>
            <Route path="/" element={<AllPokemons pokemons={pokemons} />} />
            <Route
              path="/pokemon/:id"
              element={<SinglePokemon pokemons={allPokemons} />}
            />
            {/* <Route path="/arena" element={<Arena />} />
            <Route path="/statistics" element={<Statistics />} /> */}
          </Routes>
          <ReactPaginate
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
          />
        </Container>
      </main>
      <Footer />
    </>
  );
};

export default App;
