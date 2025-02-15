import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateUserAvatar } from "../../actions/userActions";
import { Upload, Button, message } from "antd";
import { IoMdCloudUpload } from "react-icons/io";

const UploadAvatar = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth?.authData?.user);
  const [avatar, setAvatar] = useState(user?.avatar || "/default-avatar.png");

  const handleUpload = async ({ file, onSuccess }) => {
    const reader = new FileReader();
    reader.onload = async () => {
      const base64Image = reader.result;
      setAvatar(base64Image);
      onSuccess("ok");

      try {
        await dispatch(updateUserAvatar(user._id, base64Image));
        message.success("Avatar updated successfully!");
      } catch (error) {
        message.error("Failed to update avatar.");
      }
    };
    reader.readAsDataURL(file);
  };

  return (
    <div>
      <Upload customRequest={handleUpload} showUploadList={false}>
        <Button icon={<IoMdCloudUpload />} className="mt-3">
          Upload Avatar
        </Button>
      </Upload>
    </div>
  );
};

export default UploadAvatar;
