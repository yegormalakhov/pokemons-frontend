import { Link } from "react-router-dom";

const AllPokemons = ({ pokemons }) => {
  // console.log(pokemons[1]);
  return (
    <>
      {pokemons.map((pokemon) => {
        return (
          <div key={pokemon.id} className="preCard">
            <h2>{pokemon.name.english}</h2>
            <Link to={`/pokemon/${pokemon.id}`}>See details here....</Link>
          </div>
        );
      })}
    </>
  );
};

export default AllPokemons;
