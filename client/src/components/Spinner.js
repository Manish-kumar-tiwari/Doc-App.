import React from "react";
import Layout from "./Layout";

const Spinner = () => {
  return (
    <Layout >
      <div className="text-center justify-content-center">
        <div className="spinner-border" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    </Layout>
  );
};

export default Spinner;
