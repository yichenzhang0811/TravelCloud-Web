import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Card, Button, Avatar, List, message } from "antd";
import { getUserPosts, deletePost } from "../../actions/postsActions";
import { getUserProfile } from "../../actions/userActions";
import moment from "moment";
import UploadAvatar from "./UploadAvatar";

const Profile = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const user = useSelector((state) => state.auth?.authData?.user);
  const userPosts = useSelector((state) => state.postsData?.posts || []);
  const [avatar, setAvatar] = useState(user?.avatar);

  useEffect(() => {
    if (user) {
      dispatch(getUserProfile(user._id));
      dispatch(getUserPosts(user._id));
      setAvatar(user?.avatar || "/default-avatar.png");
    }
  }, [dispatch, user]);

  const handleDeletePost = (postId) => {
    if (window.confirm("Are you sure you want to delete this post?")) {
      dispatch(deletePost(postId))
        .then(() => message.success("Post deleted successfully"))
        .catch((error) => message.error("Failed to delete post"));
    }
  };

  return (
    <div className="container mt-4">
      <Card>
        <div style={{ display: "flex", alignItems: "center", gap: "15px" }}>
          <Avatar size={80} src={user?.avatar || "/default-avatar.png"} />
          <div>
            <h2>{user?.username}</h2>
            <p>Email: {user?.email}</p>
            <p>Joined: {moment(user?.createdAt).format("MMMM D, YYYY")}</p>

            <UploadAvatar />
          </div>
        </div>
      </Card>

      <h2 className="mt-4">My Posts</h2>
      <List
        dataSource={userPosts}
        renderItem={(post) => (
          <Card className="mb-3">
            <List.Item key={post._id}>
              <List.Item.Meta
                avatar={
                  <img
                    src={post.images?.[0] || "/default-post.png"}
                    alt="Post Thumbnail"
                    style={{
                      width: "50px",
                      height: "50px",
                      objectFit: "cover",
                    }}
                  />
                }
                title={
                  <a onClick={() => navigate(`/posts/${post._id}`)}>
                    {post.title}
                  </a>
                }
                description={`Created on ${moment(post.createdAt).format(
                  "MMMM D, YYYY h:mm A"
                )}`}
              />
              <div>
                <Button
                  type="link"
                  onClick={() => navigate(`/posts/${post._id}/edit`)}
                >
                  Edit
                </Button>
                <Button
                  type="link"
                  danger
                  onClick={() => handleDeletePost(post._id)}
                >
                  Delete
                </Button>
              </div>
            </List.Item>
          </Card>
        )}
      />
    </div>
  );
};

export default Profile;
