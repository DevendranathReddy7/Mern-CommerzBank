import React, { useState } from "react";
import { ButtonStyles, InputStyles } from "../../common/Styles/Styles";
import { Link, useNavigate } from "react-router-dom";
import ErrorModal from "../../common/error/ErrorModal";
import { login } from "../../storeSetup/actions/loginAction";
import { useDispatch } from "react-redux";

const Login = (props) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    number: "",
    password: "",
  });
  const [error, setError] = useState({ error: false, msg: "" });
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

    const data = await response.json();
    dispatch(login(data.user));
    if (response.ok) {
      setError((prev) => ({ ...prev, error: false, msg: "" }));
      navigate("/home");
    } else {
      setError((prev) => ({ ...prev, error: true, msg: data.message }));
    }
  };

  const errorCloseHandler = () => {
    setError((prev) => ({ ...prev, error: false, msg: "" }));
  };
  return (
    <>
      {error.error && (
        <ErrorModal message={error.msg} onClose={errorCloseHandler} />
      )}
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
    </>
  );
};
export default Login;
