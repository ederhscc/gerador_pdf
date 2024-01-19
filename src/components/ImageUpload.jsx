import React from "react";

const ImageUpload = () => {
  return (
    <div className="imageUpload">
      <label className="config-label">
        Upload Image:
        <input type="file" accept="image/*" className="file-input" />
      </label>
    </div>
  );
};

export default ImageUpload;
