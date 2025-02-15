import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { Card, Form, Input, Typography, Button } from "antd";
//import { createStory, updateStory } from "../../actions/stories";
import { Link, useParams } from "react-router-dom";
import { createCity } from "../../actions/cityActions";
const { Title } = Typography;

function CreateCity() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (values) => {
    const newCity = {
      ...values,
      location: {
        type: "Point",
        coordinates: [values.longitude, values.latitude],
      },
      image: values.image,
    };

    dispatch(createCity(newCity, navigate));
  };
  return (
    <Card>
      <Form onFinish={handleSubmit}>
        <Form.Item name="name" label="Name">
          <Input.TextArea allowClear></Input.TextArea>
        </Form.Item>
        <Form.Item name="description" label="Description">
          <Input.TextArea allowClear></Input.TextArea>
        </Form.Item>
        <Form.Item name="location" label="location">
          <Input.TextArea allowClear></Input.TextArea>
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            {" "}
            Create a City{" "}
          </Button>{" "}
        </Form.Item>
      </Form>
    </Card>
  );
}

export default CreateCity;
