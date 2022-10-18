import { Button } from "bootstrap";
import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import CalculateWinner from "./CalculateWinner";

const Arena = ({ userPokemon, pokemons }) => {
  //   const [showResult, setResult] = useState(false);
  const findUserPokemon = pokemons.find((pokemon) => {
    return pokemon.id === Number(userPokemon);
  });

  const randomEnemyId = Math.floor(Math.random() * pokemons.length);
  //   console.log(randomEnemyId);

  const findEnemyPokemon = pokemons.find((pokemon) => {
    return pokemon.id === Number(randomEnemyId);
  });

  //   const battleResult = () => {
  //     if (!findEnemyPokemon || !findUserPokemon) {
  //       <h1>Loading</h1>;
  //     } else {
  //       return CalculateWinner(findUserPokemon, randomEnemyId);
  //     }
  //   };

  if (!findUserPokemon) {
    return <h1>Please choose you pokemon first</h1>;
  }
  if (!findEnemyPokemon) {
    return <h1>Loading...</h1>;
  }
  return (
    <>
      <h1 className="arenaTitle">Match between</h1>
      <div className="matchCards">
        <Card className="one-poke-card">
          <Card.Header className="one-poke-header">
            <h2>{findUserPokemon.name.english}</h2>
          </Card.Header>
          <Card.Body>
            <Card.Text className="one-poke-skills">Skills</Card.Text>
            <div className="pokelist">
              <ListGroup variant="flush">
                <ListGroup.Item className="one-poke-item">
                  HP: {findUserPokemon.base.HP}
                </ListGroup.Item>
                <ListGroup.Item className="one-poke-item">
                  Attack: {findUserPokemon.base.Attack}
                </ListGroup.Item>
                <ListGroup.Item className="one-poke-item">
                  Defense: {findUserPokemon.base.Defense}
                </ListGroup.Item>
                <ListGroup.Item className="one-poke-item">
                  Speed: {findUserPokemon.base.Speed}
                </ListGroup.Item>
              </ListGroup>
            </div>
          </Card.Body>
        </Card>

        <p className="VS">VS</p>
        <Card className="one-poke-card">
          <Card.Header className="one-poke-header">
            <h2>{findEnemyPokemon.name.english}</h2>
          </Card.Header>
          <Card.Body>
            <Card.Text className="one-poke-skills">Skills</Card.Text>
            <div className="pokelist">
              <ListGroup variant="flush">
                <ListGroup.Item className="one-poke-item">
                  HP: {findEnemyPokemon.base.HP}
                </ListGroup.Item>
                <ListGroup.Item className="one-poke-item">
                  Attack: {findEnemyPokemon.base.Attack}
                </ListGroup.Item>
                <ListGroup.Item className="one-poke-item">
                  Defense: {findEnemyPokemon.base.Defense}
                </ListGroup.Item>
                <ListGroup.Item className="one-poke-item">
                  Speed: {findEnemyPokemon.base.Speed}
                </ListGroup.Item>
              </ListGroup>
            </div>
          </Card.Body>
        </Card>
      </div>
      {/* <div className="resultBtn" onClick={() => setResult(!showResult)}>
        Find result
      </div> */}
      <CalculateWinner
        userPokemon={findUserPokemon}
        enemyPokemon={findEnemyPokemon}
      />
    </>
  );
};

export default Arena;
