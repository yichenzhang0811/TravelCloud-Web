import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
//import cities from "../../data/Data";
import { getCities } from "../../actions/cityActions";
import { useSelector, useDispatch } from "react-redux";
import ShowMap from "../Map/ShowMap.js";
import Search from "./searchCity.js";

const CityMain = () => {
  const dispatch = useDispatch();
  const { cities } = useSelector((state) => state.citiesData);
  console.log("This is my landmakr", cities);
  const [filteredCities, setFilteredCities] = useState([]);

  useEffect(() => {
    dispatch(getCities());
  }, [dispatch]);
  useEffect(() => {
    setFilteredCities(cities);
  }, [cities]);

  const handleSearch = (searchTerm) => {
    const filtered = cities.filter(
      (city) =>
        city.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        city.location.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredCities(filtered);
  };

  return (
    <div className="container mt-4">
      <h2>Explore Cities</h2>
      <ShowMap cities={cities} />

      <Search onSearch={handleSearch} />

      <div className="row mt-4">
        {filteredCities.map((city) => (
          <div key={city._id} className="col-md-4 mb-3">
            <Card>
              <Card.Img variant="top" src={city.images[0]} alt={city.name} />
              <Card.Body>
                <Card.Title>{city.name}</Card.Title>
                <Card.Text>{city.description}</Card.Text>
                <Card.Text className="text-muted">{city.location}</Card.Text>
                <Link to={`/cities/${city._id}`} className="btn btn-primary">
                  View City
                </Link>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CityMain;
