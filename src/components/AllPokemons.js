import Button from "react-bootstrap/Button";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const AllPokemons = ({ pokemons, chosePokemon }) => {
  const [randomPokemons, setRandomPokemons] = useState([]);
  const [change, setChange] = useState(false);

  const choseRandomPokemons = () => {
    let randomNumbers = [];
    for (let i = 0; i !== 4; i++) {
      randomNumbers.push(Math.ceil(Math.random() * 809));
    }
    console.log(pokemons[randomNumbers[1]]);
    let randomPokemons = [];
    randomNumbers.forEach((number) => randomPokemons.push(pokemons[number]));
    setRandomPokemons(randomPokemons);
  };

  const handlePokemonDraw = () => {
    choseRandomPokemons();
    setChange(true);
  };
  if (!randomPokemons) {
    return <h1>Loading...</h1>;
  }
  return (
    <div className="start-page">
      <div className="start-page_col">
        <h1 className="rules">Rules</h1>
        <ol>
          <li className="rules-item">Press start game</li>
          <li className="rules-item">Chose one of the provided pokemons</li>
          <li className="rules-item">Or press 'Change' to change pokemons</li>
          <li className="rules-item">Enemy pokemon will be chosen randomly</li>
          <li className="rules-item">See results on next page</li>
        </ol>
      </div>
      <div className="start-page_col start-page_pokemons">
        <Button className="start-btn" onClick={handlePokemonDraw}>
          {change ? "Change" : "Start game"}{" "}
        </Button>
        {randomPokemons.map((pokemon, index) => {
          return (
            <Link
              key={index}
              to={`/arena`}
              className="pokemon-to-choose"
              onClick={chosePokemon}
              payload={pokemon.id}
            >
              {pokemon.name.english}
            </Link>
          );
        })}
      </div>
    </div>
  );
};
export default AllPokemons;
