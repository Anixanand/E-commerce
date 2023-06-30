import React from "react";
import Layout from "./../components/Layout/Layout";

const About = () => {
  return (
    <Layout title={"About us - Ecommerce app"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/about.jpeg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <p className="text-justify mt-2">
            
            We have Developed a E-commerce application. User can buy the basic product available from the site.
            Assurance  of the safety and security of your transactions on your e-commerce app. Cash on delivery is also available or you can make payment through debit/credit card, secure payment gateways, or privacy policies that protect customer information.I will always stand in the favour of customer.For return ans replace there is always supporting team will be available.
            Thank You.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default About;
