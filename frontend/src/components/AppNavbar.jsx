import { Container } from "react-bootstrap";
import Navbar from "react-bootstrap/Navbar";

export default function AppNavBar() {

  return (
    <Navbar expand="lg" className="custom-navbar navbar">
      <Container>
        <Navbar.Brand className="nav">
          <img src="src\images\DICT-Logo.jpg" alt="dict-logo" /> 
          <h1 className="nav-text">Department of Information and Communications Technology</h1>
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
}