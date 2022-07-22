import { Link } from 'react-router-dom';
import Carousel from 'react-bootstrap/Carousel';
import Stack from 'react-bootstrap/Stack';

export default function AllPokemons({pokemons}) {
  // console.log(pokemons[1]);

  return (
    <div className="poke-slider">
      <Carousel>
        {pokemons.map(pokemon => (
          <Carousel.Item 
            key="{pokemon.id}"
          >
            <div className="poke-items">
              <h1>{pokemon.name.english}</h1>
              <img 
                className="poke-photo"
                src="https://images.pexels.com/photos/1716861/pexels-photo-1716861.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="{pokemon.name.english}"
              />
              <h3>ID: {pokemon.id}</h3>
            </div>
            <Stack 
              direction="horizontal" 
              gap={3} 
              className="poke-links"
            >
                <Link
                  to={`/pokemon/${pokemon.id}`}
                  className="poke-info"
                >Info</Link>
                <div className="vr" />
                <Link 
                  to={`/arena`}
                  className="poke-fight"
                >FIGHT</Link>
            </Stack>
      </Carousel.Item>
        ))}
    </Carousel>
  </div>
  )
};