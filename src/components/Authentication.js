import React, { useState } from 'react';
import { useAuth } from './AuthContext';
import { Form, Button, Alert, Modal } from 'react-bootstrap';

function Authentication() {
  const { login } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  const isValidEmail = (email) => {
    const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return re.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isValidEmail(email)) {
      setError('Invalid email format');
      return;
    }
    if (email === 'user@example.com' && password === 'password123') {
      login(); // Update the isAuthenticated state to true
      localStorage.setItem('token', 'YOUR_JWT_TOKEN');
      if (rememberMe) {
        localStorage.setItem('rememberMe', 'true');
      }
      window.location.href = '/'; // Redirect to home
    } else {
      setError('Invalid credentials');
    }
  };

  const handleForgotPassword = () => {
    // Mock action
    alert('Password reset link sent to ' + email);
    setShowModal(false);
  };

  return (
    <div className="auth-container p-4">
      {error && <Alert variant="danger">{error}</Alert>}
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </Form.Group>

        <Form.Group controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Remember Me" checked={rememberMe} onChange={() => setRememberMe(!rememberMe)} />
        </Form.Group>
        
        <Button variant="primary" type="submit" className="mb-2">
          Login
        </Button>
        <Button variant="link" onClick={() => setShowModal(true)} className="mb-2">
          Forgot Password?
        </Button>
        <Button variant="secondary" onClick={() => window.location.href = '/guest'} className="mb-2">
          Continue as Guest
        </Button>
      </Form>

      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Forgot Password</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Enter your email to receive a password reset link.</p>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)} />
          </Form.Group>
          <Button variant="primary" onClick={handleForgotPassword}>
            Send Reset Link
          </Button>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default Authentication;
