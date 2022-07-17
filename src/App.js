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

const App = () => {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    fetch(`${serverURL}/pokemons`)
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setPokemons(data);
      })
      .catch((err) => console.log({ fetchAllArticlesError: err.message }));
  }, []);

  if (!pokemons) {
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
              element={<SinglePokemon pokemons={pokemons} />}
            />
            <Route />
          </Routes>
        </Container>
      </main>
      <Footer />
    </>
  );
};

export default App;
