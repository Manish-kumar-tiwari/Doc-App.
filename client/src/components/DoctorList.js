import React from "react";
import { useNavigate } from "react-router-dom";

const DoctorList = ({ doctor }) => {
  const navigate = useNavigate();
  return (
    <>
      <div
        className="card m-2 card-class"
        style={{ cursor: "pointer" }}
        onClick={() => navigate(`/doctor/book-appointment/${doctor._id}`)}
      >
        <div className="profile-pic align-content-center">
          <img
            src={doctor.photo}
            alt="profile picture"
            height="250px"
            width="290px"
            
          />
        </div>

        <div>
          <h2 className="card-header  fw-bolder text-bg-dark">
            Dr. {doctor.firstName} {doctor.lastName}
          </h2>

          <div className="card-body bg-primary ">
            <h6>
              <b>Specialization</b> {doctor.specialization}
            </h6>
            <h6>
              <b>Experience</b> {doctor.experience}
            </h6>
            <h6>
              <b>Fees Per Cunsaltation</b> {doctor.feesPerCunsaltation}
            </h6>
            <h6>
              <b>Timings</b> {doctor.timings[0]} - {doctor.timings[1]}
            </h6>
          </div>
        </div>
      </div>
    </>
  );
};

export default DoctorList;
