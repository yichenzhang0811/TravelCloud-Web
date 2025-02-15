import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { getPostById, updatePost } from "../../actions/postsActions";
import { Card, Form, Input, Typography, message, Button, Upload } from "antd";
import { UploadOutlined, DeleteOutlined } from "@ant-design/icons";

const { Title } = Typography;

function EditPost() {
  const { postId } = useParams();
  const { post } = useSelector((state) => state.postsData.post || {});

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [form] = Form.useForm();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [existingImages, setExistingImages] = useState([]);
  const [newImages, setNewImages] = useState([]);
  useEffect(() => {
    if (post) {
      form.setFieldsValue({
        title: post.title,
        content: post.content,
        location: post.location,
      });
      setTitle(post.title || "");
      setContent(post.content || "");
      setExistingImages(post.images || []);
    }
  }, [post, form]);

  const handleImageUpload = ({ file, onSuccess }) => {
    const reader = new FileReader();
    reader.onload = () => {
      setNewImages((prev) => [...prev, file]);
      onSuccess("ok");
    };
    reader.readAsDataURL(file);
  };

  const handleSubmit = async () => {
    const formData = new FormData();
    formData.append("title", title || "");
    formData.append("content", content || "");

    formData.append("existingImages", JSON.stringify(existingImages || []));

    newImages.forEach((image) => {
      formData.append("newImages", image);
    });

    try {
      await dispatch(updatePost(postId, formData));
      message.success("Post updated successfully!");
      navigate(`/posts/${postId}`);
    } catch (error) {
      console.error("Update post failed", error);
      message.error("Failed to update post.");
    }
  };

  return (
    <Card className="container mt-4">
      <Title level={2}>Edit Post</Title>
      <Form form={form} onFinish={handleSubmit} layout="vertical">
        <Form.Item label="Title" required>
          <Input value={title} onChange={(e) => setTitle(e.target.value)} />
        </Form.Item>
        <Form.Item label="Content" required>
          <Input.TextArea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            rows={5}
          />
        </Form.Item>

        <Form.Item label="Existing Images">
          <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
            {existingImages.map((img, index) => (
              <img
                key={index}
                src={img}
                alt="Uploaded"
                width="100"
                style={{ borderRadius: "5px" }}
              />
            ))}
          </div>
        </Form.Item>

        <Form.Item label="Add New Images">
          <Upload
            customRequest={handleImageUpload}
            listType="picture"
            multiple
            showUploadList
          >
            <Button icon={<UploadOutlined />}>Upload Images</Button>
          </Upload>
        </Form.Item>

        <Button type="primary" htmlType="submit">
          Update Post
        </Button>
      </Form>
    </Card>
  );
}

export default EditPost;
