import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { useAuth } from './AuthContext';
import { useNavigate } from 'react-router-dom';

import HeartIcon from 'bootstrap-icons/icons/heart-fill.svg';
import PersonIcon from 'bootstrap-icons/icons/person-fill.svg';
import CartIcon from 'bootstrap-icons/icons/cart-fill.svg';

function MainNavbar() {
  const { isAuthenticated, logout } = useAuth();
  const navigate = useNavigate();
  
  const handleLogout = () => {
    logout();
    navigate('/');  // Use navigate instead of history.push
  };

  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="/" style={{ marginRight: 'auto' }}>Calcium & Joyjoy</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
        <Nav>
        <Nav.Link href="/wishlist">
            <img src={HeartIcon} alt="Wishlist Icon" className="mb-1" width="16" height="16" />
            Wishlist
        </Nav.Link>

          <NavDropdown title={<><img src={PersonIcon} alt="Account Icon" className="mb-1" width="16" height="16" /> Account</>} id="basic-nav-dropdown" aria-label="User Account Options">
            {isAuthenticated ? (
              <>
                <NavDropdown.Item href="/profile">Profile</NavDropdown.Item>
                <NavDropdown.Item href="/orders">My Orders</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item onClick={handleLogout}>Logout</NavDropdown.Item>
              </>
            ) : (
              <NavDropdown.Item href="/auth">Login/Signup</NavDropdown.Item>
            )}
          </NavDropdown>
        <Nav.Link href="/cart">
            <img src={CartIcon} alt="Cart Icon" className="mb-1" width="16" height="16" />
            Cart
        </Nav.Link>

        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default MainNavbar;
