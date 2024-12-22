import React, { useState } from "react";
import "./About.css";
import about_img from "../../assets/about.png";

const About = () => {
  const [modalVisible, setModalVisible] = useState(false);

  const openModal = () => {
    setModalVisible(true);
  };

  const closeModal = (e) => {
    if (e.target.className === "modal") {
      setModalVisible(false);
    }
  };

  return (
    <>
      <div className="about">
        <div className="about-left">
          <div className="about-image-container" onClick={openModal}>
            <img src={about_img} alt="About Us" className="about-img" />
            <div className="caption">
            </div>
          </div>
        </div>
        <div className="about-right">
          <h3>About Us</h3>
          <h2>Company Profile</h2>
          <p>
            Mitra Taxindo Consulting (MTC) is a tax consulting company located in
            Jakarta that has obtained official certification and has experience
            in handling tax obligations for taxpayers.
          </p>
          <p>
            MTC was established in response to the needs of individuals and
            companies to understand and comply with complex tax regulations.
            Taxes are one of the most important aspects of business activities,
            and errors in tax calculation or reporting can significantly impact a
            company's finances and reputation.
          </p>
          <p>
            MTC is a solution to meet specific tax consultation needs where each
            company has different tax consultation requirements, depending on the
            type of business and income earned or received. Thus, companies can
            focus more on their core business activities without worrying about
            complex tax regulations, which can help improve operational
            efficiency and company productivity.
          </p>
        </div>
      </div>

      {modalVisible && (
        <div className="modal" onClick={closeModal}>
          <div className="modal-content">
            <p>
              <strong>Motto</strong>
              “Your Strategic Partner Towards Success, Trustworthy, and Committed”
            </p>
            <p>
              <strong>Vision</strong>
              To become a trusted consulting company as a strategic partner that
              synergizes and upholds the values of professionalism, integrity, and
              commitment to providing the best service.
            </p>
            <p>
              <strong>Mission</strong>
              1. Provide quality tax services by prioritizing the principles of
              service and optimal solutions for clients.
              <br />
              2. Develop professional consultants with high integrity and
              commitment that comply with national and international standards.
              <br />
              3. Value professionalism and integrity in every aspect of the
              business, including maintaining client confidentiality, not engaging
              in actions that harm clients, and avoiding conflicts of interest.
              <br />
              4. Build long-term partner relationships with clients and actively
              engage in developing strategic solutions to achieve their business
              goals.
              <br />
              5. Diversify business to continuously grow and advance in accordance
              with the development of science and technology.
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default About;
