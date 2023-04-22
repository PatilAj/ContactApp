import React from "react";

const Delete = ({ formData, onCancel, onDelete }) => {
  const handleDelete = () => {
    onDelete(formData);
    onCancel();
  };

  return (
    <div className="delete">
      <button onClick={handleDelete}>Delete</button>
      <button onClick={onCancel}>Cancel</button>
    </div>
  );
};
export default Delete;
