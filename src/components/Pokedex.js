import Card from "react-bootstrap/Card";
import Row from 'react-bootstrap/Row';

export default function Pokedex({pokemons}) {
  // console.log(pokemons[1]);

  return (
    <>
    <div className="pokedex-container">
    <Row
        style={{
            justifyContent: 'center',
        }}
    >
        {pokemons.map(pokemon => (
            <Card 
                style={{ 
                    width: '8rem', 
                    margin: '1rem',
                }}
            >
                <Card.Link 
                    href={`/pokemon/${pokemon.id}`}
                    style={{
                        textDecoration: 'none',
                        color: 'black'
                    }}    
                >
                <Card.Img 
                    style={{
                        marginTop: '1rem'
                    }}
                    variant="top"
                    src="https://images.pexels.com/photos/1716861/pexels-photo-1716861.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                />
                <Card.Body>
                    <Card.Title
                        style={{
                            fontSize: '0.8rem',
                            display: 'flex',
                            justifyContent: 'center'
                        }}
                    >
                        {pokemon.name.english}
                    </Card.Title>
                </Card.Body>
                </Card.Link>
            </Card>
        ))}
        </Row>
        </div>
     </>
  )
};