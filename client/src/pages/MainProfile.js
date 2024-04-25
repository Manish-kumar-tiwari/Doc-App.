import React from "react";
import Layout from "../components/Layout";
import { useSelector } from "react-redux";


const MainProfile = () => {
  const { user } = useSelector((state) => state.user);

  return (
    <Layout>
      <h1 className="text-center">My profile</h1>
      <section style={{ backgroundColor: "#eee" }}>
        <div className="container py-5">
          <div className="row">
           
          </div>
          <div className="row">
           
            <div className="col-lg-8">
              <div className="card mb-4">
                <div className="card-body">
                  <div className="row">
                    <div className="col-sm-3">
                      <p className="mb-0">Full Name</p>
                    </div>
                    <div className="col-sm-9">
                      <p className="text-muted mb-0">{user?.name}</p>
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-sm-3">
                      <p className="mb-0">Email</p>
                    </div>
                    <div className="col-sm-9">
                      <p className="text-muted mb-0">{user?.email}</p>
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-sm-3">
                      <p className="mb-0">Phone</p>
                    </div>
                    <div className="col-sm-9">
                      <p className="text-muted mb-0">{user?.phone}</p>
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-sm-3">
                      <p className="mb-0">Address</p>
                    </div>
                    <div className="col-sm-9">
                      <p className="text-muted mb-0">{user?.address}</p>
                    </div>
                  </div>
                  <hr />
                  
                </div>
              </div>
             
               
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default MainProfile;
