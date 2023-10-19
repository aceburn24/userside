import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { useAuth } from './AuthContext';
import { useNavigate } from 'react-router-dom';

function MainNavbar() {
  const { isAuthenticated, logout, username } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <Navbar bg="light" expand="lg">
      {isAuthenticated && (
        <Nav className="mr-auto">
          <Navbar.Text>
            Hello, {username}!
          </Navbar.Text>
        </Nav>
      )}
      
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
        {isAuthenticated ? (
          <NavDropdown title="Account" id="basic-nav-dropdown" aria-label="User Account Options">
            <NavDropdown.Item href="/profile">Profile</NavDropdown.Item>
            <NavDropdown.Item href="/orders">My Orders</NavDropdown.Item>
            <NavDropdown.Item href="/settings">Settings</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item onClick={handleLogout}>Logout</NavDropdown.Item>
          </NavDropdown>
        ) : null}
        
        <Nav.Link href="/help">Help & Support</Nav.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default MainNavbar;
