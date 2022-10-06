import {Container, Nav, Navbar } from "react-bootstrap/Container";
import CartWidget from "./CartWidget/CartWidget";


const NavBar = () => {
return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="#home">
                    Tienda de Golosinas
                </Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link as={Link} to='/'>
                        Home
                    </Nav.Link>
                    <Nav.Link as={Link} to='/category/caramelos'>
                        Caramelos
                    </Nav.Link>
                    <Nav.Link as={Link} to='/category/chocolates'>
                        Chocolates
                    </Nav.Link>
                    <Nav.Link href="#otros">Otros</Nav.Link>
{/*                     <Nav.Link href="#contacto">Contacto</Nav.Link>
                    <Nav.Link href="#nosotros">Nosotros</Nav.Link> */}
                </Nav>
            <CartWidget/>
        </Container>
    </Navbar>
);
}

export default NavBar;