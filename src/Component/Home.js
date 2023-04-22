import React, { useState, useEffect } from "react";
import Create from "./Create";
import Update from "./Update";
import Navbar from "./Navbar";
import View from "./View";
import Delete from "./Delete";

const Home = () => {
  const [create, setCreate] = useState(false);
  const [formDataList, setFormDataList] = useState([]);
  const [selectedFormData, setSelectedFormData] = useState(null);
  const [viewMode, setViewMode] = useState(true);
  const [deleted, setDeleted] = useState(false);

  useEffect(() => {
    // Get form data from local storage on page load
    const storedFormData = localStorage.getItem("formDataList");
    if (storedFormData) {
      setFormDataList(JSON.parse(storedFormData));
    }
  }, []);

  const handleComponentBCancel = () => {
    setCreate(false);
  };

  const handleComponentBSubmit = (formData) => {
    setCreate(false);
    setFormDataList([...formDataList, formData]);
    localStorage.setItem(
      "formDataList",
      JSON.stringify([...formDataList, formData])
    );
  };

  const handleClearData = () => {
    setFormDataList([]);
    localStorage.removeItem("formDataList");
  };

  const handleEdit = (formData) => {
    setSelectedFormData(formData);
    setViewMode(false);
  };

  const handleView = (formData) => {
    setSelectedFormData(formData);
    setViewMode(true);
  };

  const handleUpdate = (updatedFormData) => {
    const updatedFormDataList = formDataList.map((formData) => {
      if (formData === selectedFormData) {
        return updatedFormData;
      } else {
        return formData;
      }
    });
    setFormDataList(updatedFormDataList);
    setSelectedFormData(null);
    setViewMode(true);
    localStorage.setItem("formDataList", JSON.stringify(updatedFormDataList));
  };

  const handleDelete = (formDataToDelete) => {
    const updatedFormDataList = formDataList.filter(
      (formData) => formData !== formDataToDelete
    );
    setFormDataList(updatedFormDataList);
    setSelectedFormData(null);
    setViewMode(true);
    localStorage.setItem("formDataList", JSON.stringify(updatedFormDataList));
  };

  return (
    <div className="main">
      <section>
        <Navbar />
      </section>
      <section>
        <div className="container">
          <div
            className="row"
            style={{ display: "flex", justifyContent: "center" }}
          >
            <div className="leftSidebar col-md-4">
              <h2 className="contcatHeading">Contact List</h2>
              {formDataList.length > 0 && (
                <div>
                  {formDataList.map((formData, index) => (
                    <div className="card" key={index}>
                      <div className="card-body">
                        <p className="card-text">
                          Name: {formData.name} 
                        </p>
                        <p className="card-text">
                          Email: {formData.email}
                        </p>
                        <p className="card-text">
                          Active: {formData.active ? "Yes" : "No"}
                        </p>
                        <button
                          onClick={() => handleEdit(formData)}
                          className="btn btn btn-primary"
                        >
                          Update
                        </button>
                        <button
                          onClick={() => handleView(formData)}
                          className="btn btn-info"
                        >
                          View
                        </button>
                        <button
                          onClick={() => handleDelete(formData)}
                          className="btn btn-danger"
                        >
                          Delete
                        </button>
                      </div>
                    </div>
                  ))}
                  <button onClick={handleClearData} className="btn btn-danger">
                    Clear Form Data
                  </button>
                </div>
              )}
            </div>
            <div className="rightSidebar col-md-8">
              {!create && (
                <button
                  onClick={() => setCreate(true)}
                  className="Create btn btn-success"
                >
                  Create Contact
                </button>
              )}
              {create && (
                <Create
                  onCancel={handleComponentBCancel}
                  onFormData={handleComponentBSubmit}
                />
              )}
              {deleted && (
                <Delete
                  formData={selectedFormData}
                  onCancel={() => setDeleted(false)}
                  onDelete={handleDelete}
                />
              )}
              {selectedFormData && viewMode && (
                <View
                  formData={selectedFormData}
                  onClose={() => setSelectedFormData(null)}
                />
              )}
              {selectedFormData && !viewMode && (
                <Update
                  formData={selectedFormData}
                  onUpdate={handleUpdate}
                  onCancel={() => setSelectedFormData(null)}
                />
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
