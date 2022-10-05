import { IoIosCart } from 'react-icons/io';
import './CartWidget.css';
import { Link } from 'react-router-dom';

const CartWidget = () => {
    return (
    <Link to="/cart">
        <IoIosCart />
    </Link>
    );
}

export default CartWidget;