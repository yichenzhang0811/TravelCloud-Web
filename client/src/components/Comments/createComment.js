import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { Card, Form, Input, Typography, Button, message } from "antd";
import { useParams } from "react-router-dom";
import { createComment } from "../../actions/commentActions";

function CreateComment() {
  const { postId } = useParams();

  const dispatch = useDispatch();
  const [form] = Form.useForm();

  const userId = useSelector((state) => state.auth?.authData.user._id);

  const handleSubmit = (values) => {
    const commentData = {
      body: values.body,
      user: userId,
      post: postId,
    };

    dispatch(createComment(commentData));
    message.success("Comment submitted successfully!");
    form.resetFields();
  };

  return (
    <Card>
      <Form form={form} onFinish={handleSubmit}>
        <Form.Item name="body" label="Write a comment">
          <Input.TextArea allowClear></Input.TextArea>
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit">
            Submit{" "}
          </Button>
        </Form.Item>
      </Form>
    </Card>
  );
}

export default CreateComment;
