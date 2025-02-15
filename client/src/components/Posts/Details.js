import React, { useEffect } from "react";
import { Card, Button, Carousel } from "react-bootstrap";
import { Link, useNavigate, useParams } from "react-router-dom";
import ShowComments from "../Comments/Comments";
import { useDispatch, useSelector } from "react-redux";
import { getPostById, deletePost } from "../../actions/postsActions";
import CreateComment from "../Comments/createComment";
import moment from "moment";
import { FaCalendarAlt } from "react-icons/fa";
import { MdOutlineFace } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { message } from "antd";
import { MdDelete } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";

const PostDetails = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { postId } = useParams();

  const { post } = useSelector((state) => state.postsData.post || {});
  const userId = useSelector((state) => state.auth?.authData?.user._id);
  useEffect(() => {
    dispatch(getPostById(postId));
  }, [dispatch, postId]);

  const handleDelete = () => {
    if (window.confirm("Are you sure to delete this post?")) {
      dispatch(deletePost(postId))
        .then(() => {
          message.success("Deleted Post successfully!");
          navigate(`/cities/${post.city}`);
        })
        .catch((error) => {
          console.error("Delete post failed:", error);
        });
    }
  };
  // is there is no post
  if (!post) {
    return (
      <p className="container mt-4">
        Post not found.THIS SHOULD BE POST DETAIL
      </p>
    );
  }
  return (
    <div className="container mt-4">
      <Card>
        {post.images.length > 1 ? (
          <Carousel>
            {post.images.map((img, index) => (
              <Carousel.Item key={index}>
                <img
                  className="d-block w-100"
                  src={img}
                  alt={`Slide ${index + 1}`}
                  style={{ maxHeight: "500px", objectFit: "cover" }}
                />
              </Carousel.Item>
            ))}
          </Carousel>
        ) : (
          <Card.Img
            variant="top"
            src={post.images[0]}
            alt="Post Image"
            style={{ maxHeight: "500px", objectFit: "cover" }}
          />
        )}
        <Card.Body>
          <Card.Title className="fs-3">{post.title}</Card.Title>
          <Card.Text className="mt-3 fs-5">{post.content}</Card.Text>
          <Card.Subtitle className="text-muted">
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <MdOutlineFace />

              <span>By {post.user.username}</span>
            </div>
          </Card.Subtitle>
          <Card.Subtitle className="text-muted">
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <FaCalendarAlt />
              <span>
                {moment(post?.createdAt).format("MMMM D, YYYY h:mm A")}
              </span>
            </div>
          </Card.Subtitle>
          <Card.Subtitle className="text-muted">
            <FaLocationDot /> Shot at {post.location}
          </Card.Subtitle>
        </Card.Body>{" "}
        {userId === post.user._id && (
          <div className="d-flex gap-2 mb-2">
            <Button variant="danger" onClick={() => handleDelete()}>
              <MdDelete /> Delete
            </Button>
            <Link to={`/posts/${post._id}/edit`}>
              <Button>
                {" "}
                <FaRegEdit /> Edit
              </Button>
            </Link>
          </div>
        )}
      </Card>
      <h1> Comments</h1>
      {userId ? <CreateComment /> : <p>You must log in to comment.</p>}
      <ShowComments />
    </div>
  );
};

export default PostDetails;
