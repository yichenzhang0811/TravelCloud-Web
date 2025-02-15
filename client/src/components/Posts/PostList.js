import { Link } from "react-router-dom";
import { Button, Card } from "react-bootstrap";
import React, { useEffect } from "react";
import { getPostsByCity } from "../../actions/postsActions";
import { useDispatch, useSelector } from "react-redux";
import { FETCH_POSTS } from "../../constants/actionTypes";
import { fetchPostsByCity } from "../../api";

const PostList = ({ posts = [] }) => {
  const dispatch = useDispatch();
  const cityId = posts[0]?.city;

  useEffect(() => {
    dispatch(getPostsByCity(cityId));
  }, [dispatch]);

  useEffect(() => {
    console.log(" Redux posts updated:", posts);
  }, [posts]);

  // if no posts existing
  if (!posts || posts.length === 0) {
    return <p>No posts available.</p>;
  }

  return (
    <div className="city-posts mt-5">
      <h3 className="mb-4"> Posts</h3>

      <div className="row">
        {posts.map((post) => (
          <div key={post.id} className="col-md-4">
            <Card className="mb-3">
              {post.images.length > 0 && (
                <Card.Img variant="top" src={post.images[0]} />
              )}
              <Card.Body>
                <Card.Title>{post.title}</Card.Title>
                <Link to={`/posts/${post._id}`}>
                  <Button variant="primary">View Details</Button>
                </Link>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PostList;
