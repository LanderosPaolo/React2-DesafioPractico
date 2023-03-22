import '../stylesheets/Banner.css'
import { Alert } from 'react-bootstrap';

const Banner = () => {
    return (
        <Alert className='banner'>
            <h1>¡Pizzería Mamma Mia!</h1>
            <p>¡Tenemos las mejores pizzas que podrás encontrar!</p>
        </Alert>
    )
}

export default Banner;