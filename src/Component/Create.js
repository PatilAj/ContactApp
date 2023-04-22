// Component B
import React, { useState } from "react";

const Create = ({ onCancel, onFormData }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [active, setActive] = useState(false);
  const [formDataList, setFormDataList] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      name: name,
      email: email,
      active: active,
    };
    console.log(
      `Submitted: ${formData.name} ${formData.email} (active: ${formData.active})`
    );
    onFormData(formData);
    setFormDataList([...formDataList, formData]);
    // You can use this data to update state or send to an API, etc.
  };

  return (
    <div>
      <div className="d-flex justify-content-center align-items-center">
        <div className="form-div border-dark bg-secondary text-white">
          <h2 className="heading">New Contact</h2>

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
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
            </div>
            <div className="row p-1">
              <label className=" inputName col-sm-3 col-form-label mb-2">
                Email:
              </label>
              <div className="col-sm-8">
                <input
                  className="form-control"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
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
                onChange={(e) => setActive(e.target.checked)}
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
      {formDataList.length > 0 && (
        <div>
          <h2>Form Data List:</h2>
          <ul>
            {formDataList.map((formData, index) => (
              <li key={index}>
                <p>Name: {formData.name}</p>
                <p>Email: {formData.email}</p>
                <p>Active: {formData.active ? "Yes" : "No"}</p>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Create;
