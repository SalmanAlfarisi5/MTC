import React, { useState } from "react";
import "./WhatsappWidget.css";
import whatsappIcon from "../../assets/whatsapp-icon.png";

const WhatsappWidget = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleWidget = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="whatsapp-widget">
      {!isOpen ? (
        <div className="widget-toggle" onClick={toggleWidget}>
          <img src={whatsappIcon} alt="WhatsApp" className="whatsapp-icon" />
        </div>
      ) : (
        <div className="widget-modal">
          <div className="modal-header">
            <h4>Start a Conversation</h4>
            <p>Hi! Click the button below to chat on <strong>WhatsApp</strong>.</p>
            <button className="close-btn" onClick={toggleWidget}>
              &#x2715;
            </button>
          </div>
          <div className="modal-body">
            <a
              href="https://api.whatsapp.com/send?phone=6285765574651&text=Halo%20Mitra%20Taxindo%20Consulting.."
              target="_blank"
              rel="noopener noreferrer"
              className="whatsapp-link"
            >
              <img src={whatsappIcon} alt="WhatsApp" className="whatsapp-icon" />
              <span>Mitra Taxindo Consulting</span>
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default WhatsappWidget;
