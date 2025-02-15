import React, { useEffect } from "react";
import { Link, Navigate, useParams, useNavigate } from "react-router-dom";
import { Card } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";

//import cities from "../../data/cityData";
import PostList from "../Posts/PostList";
import { getCity } from "../../actions/cityActions";
import CreatePost from "../Posts/CreatePost";
import { Button } from "antd";
import { getPostsByCity } from "../../actions/postsActions";
import { message } from "antd";

const CityDetails = () => {
  const { cityId } = useParams();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { cityDetails } = useSelector((state) => state.citiesData);
  const { city, posts } = cityDetails || { city: {}, posts: [] };
  // const { cityPosts } = useSelector((state) => state.postsData);
  const userId = useSelector((state) => state.auth?.authData?.user._id);

  const handleCreatePost = () => {
    if (!userId) {
      message.error("You must Login  to post");
      // if not login in, navigate to signin page
      navigate("/Signin", {});
    } else {
      // if already loged in, navigate to createPost page
      navigate(`/cities/${cityId}/createPost`);
    }
  };
  useEffect(() => {
    dispatch(getCity(cityId));
    // dispatch(getPostsByCity(cityId));
  }, [dispatch, cityId]);

  if (!city) {
    return <p className="container mt-4">City not found.</p>;
  }

  return (
    <div className="container mt-4">
      {/* 景点信息（上半部分） */}
      <div className="city-info text-center">
        <h1> Details</h1>
        <Card>
          <Card.Img
            variant="top"
            src={city.images}
            alt={city.name}
            style={{ maxHeight: "400px", objectFit: "cover" }}
          />
          <Card.Body>
            <Card.Title className="fs-2">{city.name}</Card.Title>
            <Card.Subtitle className="text-muted fs-5">
              {city.location}
            </Card.Subtitle>
            <Card.Text className="mt-3 fs-6">{city.moreInfo}</Card.Text>
          </Card.Body>
        </Card>
      </div>

      <Button onClick={handleCreatePost}>Share your Post!</Button>

      <PostList posts={posts} />
    </div>
  );
};

export default CityDetails;
