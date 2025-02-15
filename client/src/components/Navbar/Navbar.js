import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { Navbar, Nav, Container, Button } from "react-bootstrap";
import { logoutUser } from "../../actions/userActions";

const NavigationBar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  //get authdata from Redux
  const authData = useSelector((state) => state.auth?.authData);

  const handleLogout = () => {
    dispatch(logoutUser(navigate));
  };

  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/">
          TravelCloud
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/cities">
              Cities
            </Nav.Link>

            {authData ? (
              <>
                <Nav.Link as={Link} to={`/users/${authData.user._id}`}>
                  Profile
                </Nav.Link>
                <Button variant="outline-light" onClick={handleLogout}>
                  Logout
                </Button>
              </>
            ) : (
              <>
                <Nav.Link as={Link} to="/Signin">
                  Login
                </Nav.Link>
                <Nav.Link as={Link} to="/Register">
                  Register
                </Nav.Link>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
