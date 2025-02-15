import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Card, Form, Input, Typography, message, Button, Upload } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import { useNavigate, useParams } from "react-router-dom";
import { createPost } from "../../actions/postsActions";

const { Title } = Typography;

function CreatePost() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [form] = Form.useForm();
  const [fileList, setFileList] = useState([]);

  const { cityId } = useParams();
  const userId = useSelector((state) => state.auth?.authData?.user?._id);

  const handleChange = ({ fileList: newFileList }) => {
    setFileList(newFileList);
  };
  const beforeUpload = (file) => {
    return false;
  };

  const handleSubmit = async (values) => {
    const postData = new FormData();

    postData.append("title", String(values.title));
    postData.append("content", values.content);
    postData.append("location", values.location || "");
    postData.append("cityId", cityId);
    postData.append("userId", userId);

    // append images
    fileList.forEach((file) => {
      postData.append("images", file.originFileObj);
    });

    try {
      await dispatch(createPost(postData));
      message.success("Post created successfully!");
      navigate(`/cities/${cityId}`);
    } catch (error) {
      console.error("crete post failed:", error);
      message.error("Failed to create post.");
    }
  };

  return (
    <Card className="container mt-4">
      <Title level={2}>Create a Post</Title>
      <Form form={form} onFinish={handleSubmit} layout="vertical">
        <Form.Item
          name="title"
          label="Title"
          placeholder="Landmarks, Cities, Places... "
          rules={[{ required: true, message: "Title is required!" }]}
        >
          <Input placeholder="Landmark, Restaurant, Place, City...." />
        </Form.Item>
        <Form.Item
          name="content"
          label="Content"
          rules={[{ required: true, message: "Content is required!" }]}
        >
          <Input.TextArea
            rows={5}
            placeholder="Share Your Amazing Experience here"
          />
        </Form.Item>
        <Form.Item name="location" label="Location ">
          <Input />
        </Form.Item>
        <Form.Item label="Upload Images">
          <Upload
            beforeUpload={() => false}
            listType="picture"
            multiple
            fileList={fileList}
            onChange={handleChange}
          >
            <Button icon={<UploadOutlined />}>Upload Images</Button>
          </Upload>
        </Form.Item>
        <Button type="primary" htmlType="submit">
          Publish Post
        </Button>
      </Form>
    </Card>
  );
}

export default CreatePost;
