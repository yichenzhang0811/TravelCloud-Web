import {
  CREATE_CITY,
  FETCH_CITIES,
  FETCH_CITY,
  UPDATE_CITY,
  DELETE_CITY,
  CITY_ERROR,
} from "../constants/actionTypes.js";
import * as api from "../api/index.js";

// Create New City
export const createCity = (cityData, navigate) => async (dispatch) => {
  try {
    const { data } = await api.createCity(cityData);
    dispatch({ type: CREATE_CITY, payload: data });
    navigate("/cities"); // navigate to cities
  } catch (error) {
    console.error("Error creating City:", error);
  }
};

// get all cities list for the main page
export const getCities = () => async (dispatch) => {
  try {
    const { data } = await api.fetchCities();
    dispatch({ type: FETCH_CITIES, payload: data });
  } catch (error) {
    dispatch({
      type: CITY_ERROR,
      payload: "Error fetching cities",
    });
  }
};

// get one single city
export const getCity = (cityId) => async (dispatch) => {
  try {
    const response = await api.fetchCity(cityId);
    if (!response || !response.data) {
      throw new Error("No data received from API");
    }
    dispatch({ type: FETCH_CITY, payload: response.data });
  } catch (error) {
    console.error(`Error fetching city id: ${cityId}`, error);
  }
};

// update the city
export const updateCity = (id, updatedData) => async (dispatch) => {
  try {
    const { data } = await api.updateCity(id, updatedData);
    dispatch({ type: UPDATE_CITY, payload: data });
  } catch (error) {
    dispatch({ type: CITY_ERROR, payload: "Error updating city" });
  }
};

// delete city
export const deleteCity = (id) => async (dispatch) => {
  try {
    await api.deleteCity(id);
    dispatch({ type: DELETE_CITY, payload: id });
  } catch (error) {
    dispatch({ type: CITY_ERROR, payload: "Error deleting city" });
  }
};
