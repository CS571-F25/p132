import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router";

import "./HeaderBar.css"

export default function HeaderBar() {
    return <Navbar>
        <Container>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse>
                <Nav>
                    <Nav.Link as={Link} to="/">Home</Nav.Link>
                    <Nav.Link as={Link} to="/events">Events</Nav.Link>
                    <Nav.Link as={Link} to="/exhibits">Exhibits</Nav.Link>
                    <Nav.Link as={Link} to="/species">Species</Nav.Link>
                    <Nav.Link as={Link} to="/basket">Basket</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>
}