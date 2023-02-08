import React, { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import CalculateWinner from "./CalculateWinner";
import GoBack from "./GoBack";

const Arena = ({ userPokemon, pokemons }) => {
  const [enemyImage, setEnemyImage] = useState();
  const [userImage, setUserImage] = useState();

  const findUserPokemon = pokemons.find((pokemon) => {
    return pokemon.id === Number(userPokemon);
  });

  const randomEnemyId = Math.floor(Math.random() * pokemons.length);
  const findEnemyPokemon = pokemons.find((pokemon) => {
    return pokemon.id === Number(randomEnemyId);
  });

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${randomEnemyId}`)
      .then((response) => response.json())
      .then((data) => {
        setEnemyImage(data.sprites.front_default);
      })
      .catch((err) => console.log(err.message));
  }, []);

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${findUserPokemon.id}`)
      .then((response) => response.json())
      .then((data) => {
        setUserImage(data.sprites.front_default);
      })
      .catch((err) => console.log(err.message));
  }, []);

  if (!findUserPokemon) {
    return <h1>Please choose you pokemon first</h1>;
  }
  if (!findEnemyPokemon && !userImage && !enemyImage) {
    return <h1>Loading...</h1>;
  }
  if (!userImage) {
    return <h1>Loading...</h1>;
  }
  if (!enemyImage) {
    return <h1>Loading...</h1>;
  }
  return (
    <>
      <h1 className="arenaTitle">Match between</h1>
      <div className="matchCards">
        <Card className="one-poke-card">
          <Card.Header id="one-poke-header">
            <h2>{findUserPokemon.name.english}</h2>
          </Card.Header>

          <div className="card-body">
            <div style={{ display: "flex", width: "50%" }}>
              <Card.Img
                variant="top"
                src={userImage}
                style={{
                  width: "400%",
                }}
              />
            </div>

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
          </div>
        </Card>

        <p className="VS">VS</p>

        <Card className="one-poke-card">
          <Card.Header id="one-poke-header">
            <h2>{findEnemyPokemon.name.english}</h2>
          </Card.Header>

          <div className="card-body">
            <div style={{ display: "flex", width: "50%" }}>
              <Card.Img
                variant="top"
                src={enemyImage}
                style={{
                  width: "400%",
                }}
              />
            </div>
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
          </div>
        </Card>
      </div>
      <div className="arena-result-container">
        <CalculateWinner
          userPokemon={findUserPokemon}
          enemyPokemon={findEnemyPokemon}
        />
        <GoBack />
      </div>
    </>
  );
};

export default Arena;
