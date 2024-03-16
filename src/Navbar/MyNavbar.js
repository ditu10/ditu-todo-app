import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, NavLink } from 'react-router-dom';

const MyNavbar = () => {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <NavLink className="text-decoration-none text-gray me-2" to="/">Home</NavLink>
            <NavLink className="text-decoration-none text-gray me-2" to="/addNote">Add Note</NavLink>
            <NavLink className="text-decoration-none text-gray me-2" to="/notes">View Note</NavLink>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default MyNavbar