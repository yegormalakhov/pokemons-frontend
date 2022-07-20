import React from "react";

const CalculateWiiner = (userPokemon, enemyPokemon) => {
  //is pokemon has more attack than oponent defence? if not it isn't shows up to battle
  const userEffectiveDamage = enemyPokemon.Defense - userPokemon.Attack;
  const enemyEffectiveDamage = userPokemon.Defense - enemyPokemon.Attack;

  if (userEffectiveDamage > 0) {
    return "Your pokemon was scared of an enemy, so it ran away! You LOST!";
  }
  if (enemyEffectiveDamage > 0) {
    return "Enemy pokemon was scared of your pokemon, so it ran away! You WIN!";
  }

  // how much damage pokemone damage per unit time
  const userDPS = -userEffectiveDamage * userPokemon.Speed;
  const enemyDPS = -enemyEffectiveDamage * enemyPokemon.Speed;

  const userLifetime = userPokemon.HP / enemyDPS; // 100/50=2
  const enemyLifetime = enemyPokemon.HP / userDPS; // 100/25=4

  if (userLifetime < enemyLifetime) {
    return "Your pokemon win!";
  } else if (userLifetime > enemyLifetime) {
    return "Enemy pokemon win!";    
  } else {
    return "Draw";
  }
};

export default CalculateWiiner;

// "HP": 30,
// "Attack": 56,
// "Defense": 35,
// "Sp. Attack": 25,
// "Sp. Defense": 35,
// "Speed": 72
