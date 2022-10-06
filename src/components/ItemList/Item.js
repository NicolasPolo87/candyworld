import { CardImg } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Item = ({product}) => {
    return (
        <Card style={{ width: '14rem'}}>
            <Card.Img variant="top" src={product.pictureUrl}/>
            <Card.Body>
                <Card.Title>{product.title}</Card.Title>
                <Card.Text>
                    $ {product.price}
                </Card.Text>
                <Card.Text>
                    {product.description}
                </Card.Text>
                    <Link to={`/item/${product.id}`}>
                        <Button variant="primary">
                            Ver detalle
                        </Button>
                    </Link>
            </Card.Body>
        </Card>
    );
}

export default Item;