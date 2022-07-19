import React from "react";
import { useParams } from "react-router-dom";
import { useState } from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

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

  return 
    (
    <Card 
      className="all-pokemons-card"
      key={targetPokemon.id}
    >
      <Card.Header>{targetPokemon.name.english}</Card.Header>
      <Card.Body>
        <Card.Title>{targetPokemon.type}</Card.Title>
        <Card.Text>Scills</Card.Text>
        <ListGroup variant="flush">
        <ListGroup.Item>{targetPokemon.base.HP}</ListGroup.Item>
        <ListGroup.Item>{targetPokemon.base.Attack}</ListGroup.Item>
        <ListGroup.Item>{targetPokemon.base.Defense}</ListGroup.Item>
        <ListGroup.Item>{targetPokemon.base.Speed}</ListGroup.Item>
      </ListGroup>
        <Button 
          variant="danger"
        >!!Fight!!!</Button>
      </Card.Body>
      </Card>
      )
};
      
export default SinglePokemon;
