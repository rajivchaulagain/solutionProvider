import React, { useState } from "react";
import "./SignUpForm.css";

export const SignUpForm = () => {
  const [showUserForm, setShowUserForm] = useState(false);
  const [showSupplierForm, setShowSupplierForm] = useState(false);

  const handleUserClick = () => {
    setShowUserForm(true);
    setShowSupplierForm(false);
  };

  const handleSupplierClick = () => {
    setShowUserForm(false);
    setShowSupplierForm(true);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div>
      <h1 className="FormHead">Choose How you want to Sign Up</h1>
      <div className="btn3">
        <button className="btn1" onClick={handleUserClick}>
          User
        </button>
        &nbsp; &nbsp; &nbsp; &nbsp;
        <button className="btn2" onClick={handleSupplierClick}>
          Service Provider
        </button>
      </div>

      {showUserForm && (
        <form onSubmit={handleFormSubmit}>
          <div className="formMain">
            <label className="formLabel">
              Email:
              <input type="email" name="email" />
            </label>
            <br />
            <br />
            <br />
            <label className="formLabel">
              Password:
              <input type="password" name="password" />
            </label>
            <br />
            <button className="submit1" type="submit">
              Submit
            </button>
          </div>
        </form>
      )}

      {showSupplierForm && (
        <form onSubmit={handleFormSubmit}>
          <div className="secondForm">
          <label className="name">
            Pin:
          </label>
          <br />
          <br />
          <input type="number" name="number" />
          <br />
          <label className="name">
            <br />
            Email:
            &nbsp;
          </label>
          <br />
          <br />
          <input type="email" name="email" />
          <br />
          <br />
          <br />
          <label className="name">
            password:
          </label>
          <br />
          <br />
          <input type="password" name="password" />
          <br />
          <button className="btn2" type="submit">submit</button>
          </div>
        </form>
      )}
    </div>
  );
};
