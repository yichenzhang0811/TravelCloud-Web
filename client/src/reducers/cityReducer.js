import {
  FETCH_CITIES,
  FETCH_CITY,
  CREATE_CITY,
  UPDATE_CITY,
  DELETE_CITY,
  CITY_ERROR,
} from "../constants/actionTypes";

const initialState = {
  cities: [],
  cityDetails: { city: {} }, // show one single city
  error: null,
};

const cityReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CITIES:
      return { ...state, cities: action.payload, error: null };
    case FETCH_CITY:
      return {
        ...state,
        cityDetails: action.payload || { city: {} },
        error: null,
      };
    case CREATE_CITY:
      return {
        ...state,
        cities: [...state.cities, action.payload],
        error: null,
      };
    case UPDATE_CITY:
      return {
        ...state,
        cities: state.cities.map((city) =>
          city._id === action.payload._id ? action.payload : city
        ),
        error: null,
      };
    case DELETE_CITY:
      return {
        ...state,
        cities: state.cities.filter((city) => city._id !== action.payload),
        error: null,
      };
    case CITY_ERROR:
      return { ...state, error: action.payload };
    default:
      return state;
  }
};

export default cityReducer;
