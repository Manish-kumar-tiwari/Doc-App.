import React from "react";
import "../styles/RegiserStyles.css";
import { Form, Input, message } from "antd";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { showLoading, hideLoading } from "../redux/features/alertSlice";
const Register = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  //form handler
  const onfinishHandler = async (values) => {
    try {
      dispatch(showLoading());
      const res = await axios.post("/api/v1/user/register", values);
      dispatch(hideLoading());
      if (res.data.success) {
        message.success("Register Successfully!");
        navigate("/login");
      } else {
        message.error(res.data.message);
      }
    } catch (error) {
      dispatch(hideLoading());
      console.log(error);
      message.error("Something Went Wrong");
    }
  };
  return (
    <>
      <div className="register-form-container">
        <Form
          layout="vertical"
          onFinish={onfinishHandler}
          className="register-form bg-success"
        >
          <h3 className="text-center fw-bold bg-gradient">Register From</h3>
          <hr />
          <Form.Item label="Name" name="name" className="fw-bold">
            <Input type="text" required  placeholder="Name" className="fw-bold"/>
          </Form.Item>
          <Form.Item label="Email" name="email" className="fw-bold">
            <Input type="email" required placeholder="Email" className="fw-bold"/>
          </Form.Item>
          <Form.Item label="Phone" name="phone" className="fw-bold">
            <Input type="number" required placeholder="Phone" className="fw-bold" />
          </Form.Item>
          <Form.Item label="Address" name="address" className="fw-bold">
            <Input type="text" required placeholder="Address" className="fw-bold" />
          </Form.Item>
          <Form.Item label="Password" name="password" className="fw-bold" >
            <Input type="password" required placeholder="Password" className="fw-bold"/>
          </Form.Item>
          <Link to="/login" className="m-2 fw-bold bg-dark">
            Already user login here
          </Link>
          <button className="btn btn-primary" type="submit">
            Register
          </button>
        </Form>
      </div>
    </>
  );
};

export default Register;
