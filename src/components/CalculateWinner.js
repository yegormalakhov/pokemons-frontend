import React from "react";

const CalculateWinner = ({ userPokemon, enemyPokemon }) => {
  //is pokemon has more attack than oponent defence? if not it isn't shows up to battle
  const userEffectiveDamage =
    enemyPokemon.base.Defense / 2 - userPokemon.base.Attack;
  const enemyEffectiveDamage =
    userPokemon.base.Defense / 2 - enemyPokemon.base.Attack;

  if (userEffectiveDamage > 0) {
    return (
      <p className="matchResult">
        "Your pokemon was scared of an enemy, so it ran away! You LOST!"
      </p>
    );
  }
  if (enemyEffectiveDamage > 0) {
    return (
      <p className="matchResult">
        "Enemy pokemon was scared of your pokemon, so it ran away! You WIN!"
      </p>
    );
  }

  // how much damage pokemone damage per unit time
  const userDPS = userEffectiveDamage * userPokemon.base.Speed * -1;
  const enemyDPS = enemyEffectiveDamage * enemyPokemon.base.Speed * -1;

  const userLifetime = userPokemon.base.HP / enemyDPS; // 100/50=2
  const enemyLifetime = enemyPokemon.base.HP / userDPS; // 100/25=4

  if (userLifetime > enemyLifetime) {
    return <p className="matchResult">"Your pokemon win!"</p>;
  } else if (userLifetime < enemyLifetime) {
    return <p className="matchResult">"Enemy pokemon win!"</p>;
  } else {
    return <p className="matchResult">"Draw"</p>;
  }
};

export default CalculateWinner;
