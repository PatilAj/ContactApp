import React, { useState } from "react";

const Update = ({ formData, onUpdate, onCancel }) => {
  const [name, setName] = useState(formData.name);
  const [email, setEmail] = useState(formData.email);
  const [active, setActive] = useState(formData.active);

  const handleSubmit = (event) => {
    event.preventDefault();
    const updatedFormData = {
      name,
      email,
      active,
    };
    onUpdate(updatedFormData);
  };

  return (
    <div>
      <div className="d-flex justify-content-center align-items-center mt-3">
        <div className="form-div border-dark bg-secondary text-white">
          <h2 className="heading">Update Contact</h2>
          <form onSubmit={handleSubmit}>
            <div className="row mt-3 p-1">
              <label className="inputName col-sm-3 col-form-label mb-3">
                Name:
              </label>
              <div className="col-sm-8">
                <input
                  className="form-control"
                  type="text"
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                />
              </div>
            </div>
            <div className="row p-1">
              <label className="inputName col-sm-3 col-form-label mb-2">
                Email:
              </label>
              <div className="col-sm-8">
                <input
                type="email"
                  className="form-control"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                />
              </div>
            </div>
            <div className="form-check form-switch form-check-reverse col-sm-11 mb-0">
              <label className="inputName">Status:</label>
              <input
                className="form-check-input"
                type="checkbox"
                role="switch"
                id="flexSwitchCheckDefault"
                checked={active}
                onChange={(event) => setActive(event.target.checked)}
              />
            </div>
            <br />
            <button className="btn btn-info">Submit</button>
            <button onClick={onCancel} className="btn btn-md btn-danger ms-1">
              Cancel
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Update;
