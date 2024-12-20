import React, { useRef, useState } from "react";
import "./Teams.css";
import next_icon from "../../assets/next-icon.png";
import back_icon from "../../assets/back-icon.png";
import teamData from "../../data/team.json";

const Teams = () => {
  const slider = useRef();
  const [modalVisible, setModalVisible] = useState(false);
  const [modalContent, setModalContent] = useState({ text: "", img: "" });
  let tx = 0;

  const slideForward = () => {
    if (tx > -60) { 
        tx -= 20;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
};

const slideBackward = () => {
    if (tx < 0) {
        tx += 20;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
};


  const openModal = (text, img) => {
    setModalContent({ text, img });
    setModalVisible(true);
  };

  const closeModal = (e) => {
    if (e.target.className === "modal") {
      setModalVisible(false);
    }
  };

  return (
    <>
      <div className={`teams ${modalVisible ? "blurred" : ""}`}>
        <img src={next_icon} alt="" className="next-btn" onClick={slideForward} />
        <img src={back_icon} alt="" className="back-btn" onClick={slideBackward} />
        <div className="slider">
          <ul ref={slider}>
            {teamData.map((member, index) => (
              <li key={index}>
                <div className="slide">
                  <div className="user-info">
                    <img src={member.img} alt={member.name} />
                    <div>
                      <h3>{member.name}</h3>
                      <span>{member.role}</span>
                    </div>
                  </div>
                  <p>{member.description.substring(0, 100)}...</p>
                  <button
                    className="read-more-btn"
                    onClick={() => openModal(member.description, member.img)}
                  >
                    Read More
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {modalVisible && (
        <div className="modal" onClick={closeModal}>
          <div className="modal-content">
            <img src={modalContent.img} alt="Team Member" />
            <p>{modalContent.text}</p>
          </div>
        </div>
      )}
    </>
  );
};

export default Teams;
