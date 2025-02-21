
import { Navbar, Container } from "react-bootstrap";

export default function AppNavBar() {

  return (
    <Navbar className="navbar bg-body-tertiary" bg="light" expand="lg">
      <Container  className="container-fluid">
        <Navbar.Brand className="navbar-brand" href="#">
          <img
            src="frontend\src\images\DICT-Logo.jpg"
            alt="Logo"
            width="30"
            height="24"
          />
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
}