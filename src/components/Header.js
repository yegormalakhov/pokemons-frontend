import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../media/Logo.png";
function Header() {
  return (
    <>
      <Navbar bg="primary" variant="dark" collapseOnSelect>
        <Container>
          <Navbar.Brand href="/">
            <img
              src={logo}
              width="250"
              height="45"
              className="d-inline-block align-top"
              alt="Pokemon fight logo"
            />
          </Navbar.Brand>
          <Nav className="ml-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/arena">
              <i class="fa-solid fa-swords"></i> Arena
            </Nav.Link>
            <Nav.Link href="/logs">Logs</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
