import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../../actions/userActions";
import { Link, useNavigate } from "react-router-dom";
import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";

import "./Log.css";
import { message } from "antd";

const SignIn = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: "", password: "" });

  const loading = useSelector((state) => state.auth?.loading);
  const loginError = useSelector((state) => state.auth?.error);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loginUser(formData, navigate));
  };

  useEffect(() => {
    if (loginError) {
      message.error(loginError, 2);
    }
  }, [loginError]);

  return (
    <Container fluid className="log-container">
      <Row className="log-row">
        {/* Left form */}
        <Col md={6} className="log-form-container">
          <div className="log-form">
            <h2>Sign In</h2>
            {loginError && <p className="error-message">{loginError}</p>}{" "}
            {/* error message */}
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="email">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </Form.Group>

              <Form.Group controlId="password" className="mt-3">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Enter password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
              </Form.Group>

              <Button
                type="submit"
                variant="dark"
                disabled={loading}
                className="mt-4"
              >
                {loading ? "Signing in..." : "Sign In"}
              </Button>
            </Form>
            <p className="mt-3">
              Don't have an account? <Link to="/register">Sign-up here</Link>
            </p>
          </div>
        </Col>

        <Col md={6} className="log-image-container"></Col>
      </Row>
    </Container>
  );
};

export default SignIn;
