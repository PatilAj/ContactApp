import React from "react";

const View = ({ formData, onClose }) => {
  return (
    <div>
      <div className="d-flex justify-content-center align-items-center mt-3">
        <div className="form-div border-dark bg-secondary text-white">
          <h2 className="heading">Contact Info</h2>
          <p className="name">
            Name: <p className="innerName">{formData.name}</p>{" "}
          </p>
          <p className="name">
            Email: <p className="innerName">{formData.email}</p>
          </p>
          <p className="name">
            Status:
            <p className="innerName">{formData.active ? "Yes" : "No"}</p>
          </p>
          <button onClick={onClose} className="btn btn-md btn-warning ms-1">
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default View;
