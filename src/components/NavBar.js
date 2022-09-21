import {Container, Nav, Navbar } from "react-bootstrap/Container";
import CartWidget from "./CartWidget";
import './CartWidget.css';

const NavBar = () => {
return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="#home">
                    Tienda de Golosinas
                </Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#features">Caramelos</Nav.Link>
                    <Nav.Link href="#chocolates">Chocolates</Nav.Link>
                    <Nav.Link href="#otros">Otros</Nav.Link>
                    <Nav.Link href="#contacto">Contacto</Nav.Link>
                    <Nav.Link href="#nosotros">Nosotros</Nav.Link>
                </Nav>
            <CartWidget/>
        </Container>
    </Navbar>
);
}

export default NavBar;