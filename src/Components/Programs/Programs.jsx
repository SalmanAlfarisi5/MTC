import React, { useState } from "react";
import "./Programs.css";
import program_1 from "../../assets/program-1.png";
import program_2 from "../../assets/program-2.png";
import program_3 from "../../assets/program-3.png";
import program_icon_1 from "../../assets/program-icon-1.png";
import program_icon_2 from "../../assets/program-icon-2.png";
import program_icon_3 from "../../assets/program-icon-3.png";

const Programs = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [modalText, setModalText] = useState("");

  const programsData = [
    {
      image: program_1,
      icon: program_icon_1,
      name: "Tax Consultation",
      text: "Services in the form of providing tax consulting services to taxpayers in the context of exercising their rights and fulfilling their tax obligations.",
    },
    {
      image: program_2,
      icon: program_icon_2,
      name: "Tax Compliance",
      text: "Taxation services to support taxpayers in fulfilling tax obligations for a period of time and annually consisting of income tax and value added tax (VAT) obligations. Support is provided in the form of calculating tax payable, paying and depositing taxes, filling out and submitting tax returns.",
    },
    {
      image: program_3,
      icon: program_icon_3,
      name: "Tax Review",
      text: "Tax review is a service related to the review of all existing tax obligations in a company to find out the level of compliance of taxpayers in fulfilling tax obligations (tax compliance), whether full comply, under comply, or over comply.",
    },
    {
      image: program_1,
      icon: program_icon_1,
      name: "Tax Management",
      text: "Tax Management is a management strategy for controlling, planning, and organizing aspects of taxation to benefit the company’s business value while continuing to carry out tax obligations according to regulations and laws.",
    },
    {
      image: program_2,
      icon: program_icon_2,
      name: "Tax Audit",
      text: "Services provided when a taxpayer requires assistance in a tax audit. These services are provided to manage or fulfill summons from the Tax Service Office.",
    },
    {
      image: program_3,
      icon: program_icon_3,
      name: "Tax Refund",
      text: "Tax Refund Services are provided to taxpayers who have excess taxes and wish to file a tax return or refund. Tax refunds can occur on the reporting of Annual Income Tax Return and VAT Tax Return.",
    },
    {
      image: program_1,
      icon: program_icon_1,
      name: "Tax Litigation",
      text: "Services provided to accompany and/or represent taxpayers in resolving tax disputes starting from the objection process at the DGT, appeals and lawsuits at the Tax Court, and review at the Supreme Court.",
    },
    {
      image: program_2,
      icon: program_icon_2,
      name: "Transfer Pricing",
      text: "Services related to company policy in determining the transfer price of a transaction, whether it is goods, services, intangible assets, or financial transactions carried out by the company in accordance with tax provisions (TP Doc Making).",
    },
    {
      image: program_3,
      icon: program_icon_3,
      name: "Accounting",
      text: "Accounting is a service that deals with the process of recording financial transactions and is a part of the accounting process in businesses and other organizations.",
    },
  ];

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
