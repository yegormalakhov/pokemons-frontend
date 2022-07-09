import React from "react";
import { useParams } from "react-router-dom";
import { useState } from "react";

const SinglePokemon = ({ pokemons }) => {
  const { id } = useParams();
  // console.log(id);
  const targetPokemon = pokemons.find((pokemon) => {
    return pokemon.id == id; //change string to number for ===
  });

  // console.log(targetPokemon);

  if (!targetPokemon) {
    return <div>So such Pokemon!</div>;
  }

  return (
    <div>
      <h1>{targetPokemon.name.english}</h1>
      <h3>{targetPokemon.type}</h3>
      <div>{targetPokemon.base.HP}</div>
      <div>{targetPokemon.base.Attack}</div>
      <div>{targetPokemon.base.Defense}</div>
      <div>{targetPokemon.base.Speed}</div>
    </div>
  );
};
export default SinglePokemon;
// "HP": 30,
// "Attack": 56,
// "Defense": 35,
// "Sp. Attack": 25,
// "Sp. Defense": 35,
// "Speed": 72

//find a way for sp. attack...
