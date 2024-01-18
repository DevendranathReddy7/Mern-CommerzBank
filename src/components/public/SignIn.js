import React, { useEffect, useState } from "react";

import { ButtonStyles, InputStyles } from "../../common/Styles/Styles";
import { Link, useNavigate } from "react-router-dom";

const SignIn = (props) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    number: "",
    password: "",
  });
  const [mandatoryFieldCheck, setMandatoryFieldCheck] = useState({});

  const dataHandler = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  useEffect(() => {
    if (
      formData.name.trim() === "" ||
      formData.number.trim() === "" ||
      formData.password.trim() === ""
    ) {
      setMandatoryFieldCheck(true);
    } else {
      setMandatoryFieldCheck(false);
    }
  }, [formData.name, formData.number, formData.password]);
  const submitHandler = async (e) => {
    e.preventDefault();

    const response = await fetch("http://localhost:5000/signin", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });
    //in future generate a random number for each signin

    await response.json();
    if (response.ok) {
      navigate("/home");
    } else {
      console.log("in err");
    }
  };

  return (
    <form onSubmit={submitHandler}>
      <label>Enter Name</label>
      <InputStyles onChange={dataHandler} name="name" />
      <label>Enter Mobile Number</label>
      <InputStyles onChange={dataHandler} name="number" />
      <label>Enter Password</label>
      <InputStyles onChange={dataHandler} name="password" />
      <ButtonStyles type="submit" disabled={mandatoryFieldCheck}>
        Create an Account
      </ButtonStyles>
      <hr />
      <p>
        Existing Customer? <Link to="/login">Login</Link>
      </p>
    </form>
  );
};
export default SignIn;
