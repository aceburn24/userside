import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { useAuth } from './AuthContext';

function MyNavbar() {
  const { isAuthenticated } = useAuth();
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="/">Calcium & Joyjoy</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav" className="justify-content-between">
        <Nav>
          {/* This is left empty intentionally to keep space on the left */}
        </Nav>
        <Nav>
          <Nav.Link href="/wishlist">
            <img src={require("bootstrap-icons/icons/heart-fill.svg").default} alt="Wishlist Icon" className="mb-1" width="16" height="16" /> Wishlist
          </Nav.Link>
          <NavDropdown title={<><img src={require("bootstrap-icons/icons/person-fill.svg").default} alt="Account Icon" className="mb-1" width="16" height="16" /> Account</>} id="basic-nav-dropdown">
          <NavDropdown.Item href={isAuthenticated ? "/profile" : "/auth"}>Profile</NavDropdown.Item>
            <NavDropdown.Item href="/orders">My Orders</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="/logout">Logout</NavDropdown.Item>
          </NavDropdown>
          <Nav.Link href="/cart">
            <img src={require("bootstrap-icons/icons/cart-fill.svg").default} alt="Cart Icon" className="mb-1" width="16" height="16" /> Cart
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default MyNavbar;
