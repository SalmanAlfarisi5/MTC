import React, { useState } from "react";
import "./Programs.css";
import programsData from "../../data/program.json";

const Programs = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [modalText, setModalText] = useState("");

  const openModal = (text) => {
    setModalText(text);
    setModalVisible(true);
  };

  const closeModal = (e) => {
    if (e.target.className === "modal") {
      setModalVisible(false);
    }
  };

  return (
    <>
      <div className={`programs ${modalVisible ? "blurred" : ""}`}>
        {programsData.map((program, index) => (
          <div
            className="program"
            key={index}
            onClick={() => openModal(program.text)}
          >
            <img src={program.image} alt={program.name} />
            <div className="caption">
              <img src={program.icon} alt={program.name} />
              <p>{program.name}</p>
            </div>
          </div>
        ))}
      </div>

      {modalVisible && (
        <div className="modal" onClick={closeModal}>
          <div className="modal-content">
            <p>{modalText}</p>
          </div>
        </div>
      )}
    </>
  );
};

export default Programs;
