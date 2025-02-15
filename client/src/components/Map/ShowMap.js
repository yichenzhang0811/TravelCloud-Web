import React, { useState } from "react";
import Map, { Marker, Popup, NavigationControl } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import { Link } from "react-router-dom";
import { FaMapMarkerAlt } from "react-icons/fa";

const ShowMap = ({ cities }) => {
  const [selectedCity, setSelectedCity] = useState(null);

  // only valid cities
  const validCities = cities.filter(
    (city) =>
      city.geometry &&
      city.geometry.coordinates &&
      city.geometry.coordinates.length === 2
  );

  console.log("ShowMAP", cities[0]);
  console.log();
  return (
    <div style={{ height: "400px", width: "100%" }}>
      <Map
        mapboxAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
        initialViewState={{
          longitude: -95.7128,
          latitude: 37.09,
          zoom: 4,
        }}
        mapStyle="mapbox://styles/mapbox/standard"
      >
        <NavigationControl position="top-right" />
        {cities &&
          cities.map((city) => (
            <Marker
              key={city._id}
              longitude={city.geometry.coordinates[1]}
              latitude={city.geometry.coordinates[0]}
              onClick={() => setSelectedCity(city)}
            >
              <FaMapMarkerAlt color="red" size={20} />
            </Marker>
          ))}
        {selectedCity && (
          <Popup
            longitude={selectedCity.geometry.coordinates[1]}
            latitude={selectedCity.geometry.coordinates[0]}
            closeButton={true}
            closeOnClick={false}
            onClose={() => setSelectedCity(null)}
            anchor="top"
          >
            <div style={{ textAlign: "center" }}>
              <h5>{selectedCity.name}</h5>
              <p>{selectedCity.description}</p>
              <Link
                to={`/cities/${selectedCity._id}`}
                className="btn btn-primary"
              >
                View Details
              </Link>
            </div>
          </Popup>
        )}
      </Map>
    </div>
  );
};

export default ShowMap;
