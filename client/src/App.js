import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Navbar from "./components/Navbar/Navbar";
import HomePage from "./components/Home/HomePage.js";
import Signin from "./components/LogPage/Signin.js";
import Register from "./components/LogPage/Register.js";
import CityMain from "./components/Cities/Main.js";
import CityDetails from "./components/Cities/Details.js";
import ShowAccount from "./components/users/Profile.js";
import CreatePost from "./components/Posts/CreatePost.js";
import CreateCity from "./components/Cities/createCity.js";
import PostDetails from "./components/Posts/Details.js";
import EditPost from "./components/Posts/EditPost.js";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/HomePage" element={<HomePage />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/Signin" element={<Signin />} />
        <Route path="/users/:userId" element={<ShowAccount />} />

        <Route path="/cities" element={<CityMain />} />
        <Route path="/cities/:cityId" element={<CityDetails />} />
        <Route path="/posts/:postId" element={<PostDetails />} />
        <Route path="/createcity" element={<CreateCity />} />
        <Route path="/cities/:cityId/createpost" element={<CreatePost />} />
        <Route path="/posts/:postId/edit" element={<EditPost />} />
        <Route path="/cities" element={<CityMain />} />
      </Routes>
    </Router>
  );
};

export default App;
