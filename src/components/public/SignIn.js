import React, { useState } from "react";

import { ButtonStyles, InputStyles } from "../../common/Styles/Styles";
import { Link } from "react-router-dom";

const SignIn = (props) => {
  const [formData, setFormData] = useState({
    name: "",
    number: "",
    password: "",
  });

  const dataHandler = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    const response = await fetch("http://localhost:5000/signin", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });
    //in future generate a random number for each signin
    await response.json();
  };

  return (
    <form onSubmit={submitHandler}>
      <label>Enter Name</label>
      <InputStyles onChange={dataHandler} name="name" />
      <label>Enter Mobile Number</label>
      <InputStyles onChange={dataHandler} name="number" />
      <label>Enter Password</label>
      <InputStyles onChange={dataHandler} name="password" />
      <ButtonStyles type="submit">Create an Account</ButtonStyles>
      <hr />
      <p>
        Existing Customer? <Link to="/login">Login</Link>
      </p>
    </form>
  );
};
export default SignIn;
