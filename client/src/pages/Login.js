import React from "react";
import "../styles/RegiserStyles.css";
import { Form, Input, message } from "antd";
import { useDispatch } from "react-redux";
import { showLoading, hideLoading } from "../redux/features/alertSlice";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  //form handler
  const onfinishHandler = async (values) => {
    try {
      dispatch(showLoading());
      const res = await axios.post("/api/v1/user/login", values);
      dispatch(hideLoading());
      if (res.data.success) {
        localStorage.setItem("token", res.data.token);
        message.success("Login Successfully");
        navigate("/");
      } else {
        message.error(res.data.message);
      }
    } catch (error) {
      dispatch(hideLoading());
      console.log(error);
      message.error("something went wrong");
    }
  };
  return (
    
    <div className="login-form-container">
      
      <Form
        layout="vertical"
        onFinish={onfinishHandler}
        className="register-form bg-success"
      >
        <h3 className="text-center fw-bold bg-gradient">Login From</h3>
        <hr />

        <Form.Item label="Email" name="email" className="fw-bold">
          <Input type="email" required placeholder="Email" className="fw-bold"/>
        </Form.Item>
        <Form.Item label="Password" name="password" className="fw-bold">
          <Input type="password" required placeholder="Password" className="fw-bold" />
        </Form.Item>
        <Link to="/register" className="m-2 text-bg-dark fw-bold">
          Not a user Register here
        </Link>
        <button className="btn btn-primary" type="submit">
          Login
        </button>
      </Form>
    </div>
  );
};

export default Login;
