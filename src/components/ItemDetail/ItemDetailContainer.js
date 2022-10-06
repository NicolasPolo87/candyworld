import { useEffect } from "react";
import { Container } from "react-bootstrap";
import { useParams } from 'react-router-dom';
import { getProduct } from "../../Utils/products";
import ItemDetail from "./ItemDetail";
import Item from "./ItemList/Item";

const ItemDetailContainer = () => {
    const [product, setProduct] = useState()
    const { id } = useParams();

    useEffect(() => {
    getProduct(id)
        .then((data) => {setProduct(data)})
        .catch(error => console.warn(error))
}, [id])

console.log(product);
return (
    <Container>
        <h1>Detalle del Producto</h1>
        <ItemDetail product={product}/>
    </Container>    
    );
}

export default ItemDetailContainer;