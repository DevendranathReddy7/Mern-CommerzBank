import React, { useState } from "react";
import { ButtonStyles, InputStyles } from "../../common/Styles/Styles";
import { Link } from "react-router-dom";

const Login = (props) => {
  const [formData, setFormData] = useState({
    number: "",
    password: "",
  });
  const dataHandler = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:5000/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    await response.json();
  };
  return (
    <form onSubmit={submitHandler}>
      <label>Enter Mobile Number</label>
      <InputStyles onChange={dataHandler} name="number" />
      <label>Enter Password</label>
      <InputStyles type="password" onChange={dataHandler} name="password" />
      <ButtonStyles>🔒Log-in</ButtonStyles>
      <hr />
      <p>
        New to Commerz? <Link to="/signin">Open an account</Link>
      </p>
    </form>
  );
};
export default Login;
