import City from "../models/cityModel.js";
import Post from "../models/postModel.js";

// create City
export const createCity = async (req, res) => {
  const city = req.body;
  const newCity = new City(city);
  try {
    await newCity.save();
    res.status(201).json(newCity);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

//get all Cities
export const getCities = async (req, res) => {
  try {
    const cities = await City.find();
    res.status(200).json(cities);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

// get one single city for details
export const getCity = async (req, res) => {
  try {
    const { id } = req.params;
    const city = await City.findById(id);

    if (!city) {
      return res.status(404).json({ message: "City not found" });
    }

    const posts = await Post.find({ city: id });

    res.status(200).json({ city, posts });
  } catch (error) {
    res.status(500).json({ message: "Error fetching city details" });
  }
};
