import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import Stack from 'react-bootstrap/Stack';

export default function AllPokemons({pokemons}) {
  console.log(pokemons[1]);

  return (
    <div className="poke-slider">
      <Carousel>
        {pokemons.map(pokemon => (
          <Carousel.Item 
          // style={{ width: '18rem' }}
          >
            <div className="poke-items">
              <h1>{pokemon.name.english}</h1>
              <h3>ID: {pokemon.id}</h3>
            </div>
            <Stack direction="horizontal" gap={3} className="poke-button">
              <Button variant="outline-success" size="sm">Info</Button>
              <div className="vr" />
              <Button variant="outline-danger" size="sm">FIGHT  </Button>
            </Stack>
      </Carousel.Item>
        ))}
    </Carousel>
  </div>
  )
};