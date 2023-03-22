import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useContext } from 'react';
import PizzaContext from '../Context';
import { ListGroup } from 'react-bootstrap';
import '../stylesheets/PizzaCards.css';
import { Link } from 'react-router-dom';

const PizzaCards = () => {
    const { pizzas, handleClick } = useContext(PizzaContext);

    return (
        <div className="card-container d-flex flex-wrap justify-content-center">
            {pizzas.map((p) => (
                < Card key={p.id} style={{ width: '18rem', marginTop: '25px' }}>
                    <Card.Img variant="top" src={p.img} alt={p.name} />
                    <Card.Body>
                        <Card.Title className='title'>{(p.name)}</Card.Title>
                        <p className='fw-bold'>Ingredientes:</p>
                        <ListGroup variant='flush' className='ingredients'>
                            {p.ingredients.map((ingredients, index) => (
                                <ListGroup.Item key={`${p.id}-${index}`}>
                                    🍕{ingredients}
                                </ListGroup.Item>
                            ))}
                        </ListGroup>
                        <hr />
                        <p className='fw-bold fs-5 text-center'>
                            Precio: ${p.price}
                        </p>
                        <div className='d-flex justify-content-around'>
                            <Link to={`/pizza/${p.id}`}>
                                <Button variant="info" className='fw-bold'>Ver más👀</Button>
                            </Link>
                            <Button variant="danger" className='fw-bold' onClick={() => handleClick(p)}>
                                Añadir🛒
                            </Button>
                        </div>
                    </Card.Body>
                </Card>
            ))}
        </div>
    )
}

export default PizzaCards;