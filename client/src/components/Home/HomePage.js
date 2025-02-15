import React from "react";
import { Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./HomePage.css";
import homeImage from "../../assets/HomePage.jpg";
const HomePage = () => {
  return (
    <div className="homepage">
      <div className="overlay">
        <Container className="text-center">
          <h1 className="welcome-text">Welcome to TravelShare!</h1>
          <Link to="/cities">
            <Button variant="primary" size="lg">
              See all Cities
            </Button>
          </Link>
        </Container>
      </div>
    </div>
  );
};

export default HomePage;
