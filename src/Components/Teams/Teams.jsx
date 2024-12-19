import React, { useRef, useState } from "react";
import "./Teams.css";
import next_icon from "../../assets/next-icon.png";
import back_icon from "../../assets/back-icon.png";
import team_1 from "../../assets/team-1.png";
import team_2 from "../../assets/team-2.png";
import team_3 from "../../assets/team-3.png";
import team_4 from "../../assets/team-4.png";

const Teams = () => {
  const slider = useRef();
  const [modalVisible, setModalVisible] = useState(false);
  const [modalContent, setModalContent] = useState({ text: "", img: "" });
  let tx = 0;

  const teamData = [
    {
      img: team_1,
      name: "Riana, Ak, M.Ak,CA.,BKP",
      role: "Senior Partner",
      description: `Riana is a certified tax consultant of the Indonesian Tax Consultants Association (IKPI) and a Chartered 
      Accountant of Indonesia (IAI) with extensive experiencein accounting and taxation. She also holds a license as a tax legal 
      representative from the Directorate General of Taxation. With over 17 years of experience in accounting and taxation, 
      she has worked in various businesses such as exportimport (Forwarding Int’L Company) and Trade Fair Organizer companies. 
      Her experience has led her to become a tax supervisor in several companies, a speaker in various seminars, a tax instructor, 
      and a lecturer at Universitas Bunda Mulia. Additionally, she has served as a Senior Head of Tax Accounting at PT Agung Sedayu Group`,
    },
    {
      img: team_2,
      name: "Tassha Billy Gunawan, S.Ak, BKP",
      role: "Partner",
      description: `Tassha completed her Bachelor's degree in Accounting from Universitas Multimedia Nusantara in 2016 
      and completed her AB & C Brevet education in 2015 at the Indonesian Institute of Accountants (IAI). 
      In 2018, Tasha became a certified tax consultant A, and in 2020, she became a certified tax consultant B. 
      Since 2018, Tasha has assisted many taxpayers in fulfilling their tax obligations, both for individuals 
      and entities.`,
    },
    {
      img: team_3,
      name: "Eko Budi Santoso, S.E.",
      role: "Senior Partner",
      description: `Eko is a graduate of the State Finance Polytechnic (PKN STAN) and holds a bachelor's degree 
      from Institut Perbanas Jakarta. He started his career in the government institution of the 
      Tax Court from 2010 to 2019. With 10 years of experience in the Tax Court, Eko has extensive 
      experience in examining and analyzing various tax disputes and customs disputes. His experience 
      enables him to see disputes from two perspectives, namely the perspective of taxpayers and the state. 
      This dual perspective is valuable in handling tax disputes.`,
    },
    {
        img: team_4,
        name: "Dr. Agustina Mappadang, SE.MM. Ak. CPA. BKP. WPPE",
        role: "Senior Partner",
        description: `Dr. Agustina Mappadang earned her Bachelor's degree in Accounting from Samratulangi University, 
        Manado, her Master's degree from Trisakti University, Jakarta, and her Doctorate in Taxation from Pancasila University, Jakarta. 
        She is an experienced practitioner in Taxation, Finance, and Accounting, with certifications as a Trainer and Securities Broker Representative. 
        She is also a licensed Tax Consultant under the Ministry of Finance and a member of the Indonesian Tax Consultants Association (IKPI), 
        the Indonesian Public Accountants Association (IAPI), and the Accounting and Economic Management Forum (FAME). 
        Dr. Agustina has over 25 years of professional experience across industries in Indonesia, Singapore, and Malaysia, 
        including roles in Public Accounting and Management Consulting at KPMG Sudjendro Soesanto & Co. 
        She has served as a Controller and contributed as an instructor in Continuous Professional Development (PPL) programs for the IKPI.
        A prolific writer, she has published articles on Corporate Governance, Tax, Audit, Finance, and Risk Management in international journals 
        (including Scopus-indexed ones) and SINTA-DIKTI-accredited national journals. She is also active on the Kompasiana blog, addressing contemporary economic and social issues. 
        Additionally, she has authored several books, including: Examining the Tax Aspects of Notaries/PPATs, Investment and Portfolio Management, 
        The Effect of Tax Avoidance and Profit Management on Company Value, and Accounting Theory.
        `,
      },
  ];

  const slideForward = () => {
    if (tx > -50) {
      tx -= 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  };

  const slideBackward = () => {
    if (tx < 0) {
      tx += 25;
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
