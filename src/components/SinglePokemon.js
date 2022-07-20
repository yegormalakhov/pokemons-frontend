import React from "react";
import { useParams, Link } from "react-router-dom";
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

const SinglePokemon = ({ pokemons }) => {
  const { id } = useParams();
  // console.log(Number(id));
  const targetPokemon = pokemons.find((pokemon) => {
    return pokemon.id === Number(id); //change string to number for === Number()
  });

  // console.log(targetPokemon);

  if (!targetPokemon) {
    return <div>No such Pokemon!</div>;
  }

  return (
    <Card className="one-poke-card">
      <Card.Header
        className="one-poke-header"
      >{targetPokemon.name.english}</Card.Header>
      <Card.Body>
        <Card.Text
          className="one-poke-skills"
        >Skills</Card.Text>
          <ListGroup variant="flush">
            <ListGroup.Item className="one-poke-item">HP: {targetPokemon.base.HP}</ListGroup.Item>
            <ListGroup.Item className="one-poke-item">Attack: {targetPokemon.base.Attack}</ListGroup.Item>
            <ListGroup.Item className="one-poke-item">Defense: {targetPokemon.base.Defense}</ListGroup.Item>
            <ListGroup.Item className="one-poke-item">Speed: {targetPokemon.base.Speed}</ListGroup.Item>
          </ListGroup>
          <Link 
            to={`/`}
            className="one-poke-fight"
          >FIGHT</Link>
      </Card.Body>
    </Card>
  )
};
      
export default SinglePokemon;
