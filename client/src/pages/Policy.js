import React from "react";
import Layout from "./../components/Layout/Layout";

const Policy = () => {
  return (
    <Layout title={"Privacy Policy"}>
      <div className="contactus" style={{margin:"50px"}}>
        <div className="col-md-5 ">
          <img
            src="/images/contactus.jpeg"
            alt="contactus"
            style={{ width: "90%" }}
          />
        </div>
        <div className="col-md-5">
          <div className="container gy-6">
            <h4 className="text-center">Privacy Policy</h4>
          <p>This policy outlines the guidelines and regulations governing the use of our e-commerce application ("App") for both users and sellers. By accessing or using our App, users and sellers agree to comply with the terms and conditions set forth in this policy. We reserve the right to update or modify this policy at any time, and users and sellers are encouraged to review it periodically.</p>
          <p>Users must provide accurate and truthful information when creating product listings.</p>
          <p>Users are responsible for reviewing product details, including prices, descriptions, and shipping policies, before making a purchase</p>
          <p>Sellers must accurately represent their products and provide clear and detailed descriptions.</p>
          <p>Please note that this policy is a general outline and should be customized to suit the specific needs and requirements of your e-commerce application</p>
          
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Policy;
