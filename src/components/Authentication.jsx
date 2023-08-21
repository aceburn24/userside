import React, { useState } from 'react';
import { useAuth } from './AuthContext';
import { Form, Button, Alert, Modal, Tabs, Tab } from 'react-bootstrap';
import { FaEye, FaEyeSlash } from 'react-icons/fa';


function Authentication() {
  const { login } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [username, setUsername] = useState('');
  const [error, setError] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [activeTab, setActiveTab] = useState('login');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [failedAttempts, setFailedAttempts] = useState(0);


  const togglePasswordVisibility = () => {
    setShowPassword(showPassword => !showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(showConfirmPassword => !showConfirmPassword);
  };

  const isValidEmail = (email) => {
    const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return re.test(email);
  };

  const isValidPassword = (password) => {
  // At least one uppercase, one lowercase, one number, one special character and minimum 8 characters long
  const re = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  return re.test(password);
};


const handleLogin = (e) => {
  e.preventDefault();
  setError(''); // Reset the error message

  if (!isValidEmail(email)) {
    setError('Invalid email format');
    return;
  }

  if (!isValidPassword(password)) {
    setError('Password does not meet the required criteria.');
    return;
  }

    if (email === 'user@example.com' && password === 'Password123!') {
    login(); // Update the isAuthenticated state to true
    localStorage.setItem('token', 'YOUR_JWT_TOKEN');
    if (rememberMe) {
      localStorage.setItem('rememberMe', 'true');
    }
    window.location.href = '/'; // Redirect to home
  } else {
    setError('Invalid credentials');
    setFailedAttempts(failedAttempts + 1); // Increment the counter

    if (failedAttempts >= 3) {
      setError('Too many failed attempts. Please try again later.');
      return;
    }
  }
};

  const handleSignup = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }
    // Add your signup logic here
  };

  const handleForgotPassword = () => {
    // Mock action
    alert('Password reset link sent to ' + email);
    setShowModal(false);
  };

  return (
    <div className="auth-container p-4">
      {error && <Alert variant="danger">{error}</Alert>}
      <Tabs activeKey={activeTab} onSelect={(k) => setActiveTab(k)}>
        <Tab eventKey="login" title="Login">
          <Form onSubmit={handleLogin}>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)} />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <div className="password-input">
                <Form.Control 
                  type={showPassword ? 'text' : 'password'} 
                  placeholder="Password" 
                  value={password} 
                  onChange={(e) => setPassword(e.target.value)}
                />
                <i onClick={togglePasswordVisibility}>
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </i>
              </div>
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
        </Tab>
        <Tab eventKey="signup" title="Sign Up">
          <Form onSubmit={handleSignup}>
            <Form.Group controlId="formBasicUsername">
              <Form.Label>Username</Form.Label>
              <Form.Control type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
            </Form.Group>

            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)} />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <div className="password-input">
                <Form.Control 
                  type={showPassword ? 'text' : 'password'} 
                  placeholder="Password" 
                  value={password} 
                  onChange={(e) => setPassword(e.target.value)}
                />
                <i onClick={togglePasswordVisibility}>
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </i>
              </div>
            </Form.Group>

            <Form.Group controlId="formBasicConfirmPassword">
            <Form.Label>Confirm Password</Form.Label>
            <div className="password-input">
              <Form.Control 
                type={showConfirmPassword ? 'text' : 'password'} 
                placeholder="Confirm Password" 
                value={confirmPassword} 
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
              <i onClick={toggleConfirmPasswordVisibility}>
                {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
              </i>
            </div>
          </Form.Group>

            <Button variant="primary" type="submit" className="mb-2">
              Sign Up
            </Button>
          </Form>
        </Tab>
      </Tabs>

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