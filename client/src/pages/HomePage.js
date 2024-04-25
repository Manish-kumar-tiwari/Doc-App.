import React, { useEffect, useState } from "react";
import axios from "axios";
import Layout from "./../components/Layout";
import { Row } from "antd";
import DoctorList from "../components/DoctorList";
const HomePage = () => {
  const [doctors, setDoctors] = useState([]);
  // login user data
  const getUserData = async () => {
    try {
      const res = await axios.get(
        "/api/v1/user/getAllDoctors",

        {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        }
      );
      if (res.data.success) {
        setDoctors(res.data.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUserData();
  }, []);
  return (
    <Layout className="bg-dark">
      <h1 className="text-center text-bg-dark bg-gradient fw-bolder">Home Page</h1>
      <Row className="bg-dark p-3 justify-content-around">
        {doctors && doctors.map((doctor,idx) => <DoctorList doctor={doctor} key={idx} />)}
      </Row>
    </Layout>
  );
};

export default HomePage;
