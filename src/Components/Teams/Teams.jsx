import React, { useRef, useState } from "react";
import "./Teams.css";
import next_icon from "../../assets/next-icon.png";
import back_icon from "../../assets/back-icon.png";
import team1 from "../../assets/team-1.png";
import team2 from "../../assets/team-2.png";
import team3 from "../../assets/team-3.png";
import team4 from "../../assets/team-4.png";
import team5 from "../../assets/team-5.png";
import { useLanguage } from "../../LanguageContext";

const teamData = {
  en: [
    {
      img: team1,
      name: "Dr. Agustina Mappadang, S.E., M.M., Ak., CPA., BKP., WPPE.",
      role: "Director",
      description:
        "Dr. Agustina Mappadang earned her Bachelor's degree in Accounting from Samratulangi University, Manado, her Master's degree from Trisakti University, Jakarta, and her Doctorate in Taxation from Pancasila University, Jakarta. She is an experienced practitioner in Taxation, Finance, and Accounting, with certifications as a Trainer and Securities Broker Representative. She also holds a license as a Tax Consultant from the Ministry of Finance and is a member of the Indonesian Tax Consultants Association (IKPI), the Indonesian Public Accountants Association (IAPI), and the Accounting and Economic Management Forum (FAME). Dr. Agustina has over 25 years of professional experience in various industries, including roles in Indonesia, Singapore, and Malaysia as a Controller. She previously worked with the Public Accounting and Management Consultant Firm KPMG Sudjendro Soesanto & Co. (a member of Klynvield Peat Marwick Goerdeler) and has contributed significantly to Continuous Professional Development (PPL) as an instructor for the Indonesian Tax Consultants Association. She is a prolific writer, publishing articles on Corporate Governance, Tax, Audit, Finance, and Risk Management in both Scopus-indexed international journals and SINTA-DIKTI-accredited national journals. Additionally, she writes on the Kompasiana blog, discussing economic and social issues, and has authored several books, including: Completely Examine the Tax Aspects of Notaries/PPATs, Investment and Portfolio Management, Effect of Tax Avoidance and Profit Management on Company Value, and Accounting Theory. Dr. Agustina is also a sought-after speaker in Finance, Accounting, and Taxation, presenting in forums organized by universities, private institutions, government agencies, and corporations.",
    },
    {
      img: team2,
      name: "Dr. Agustinus Miranda Wijaya, S.H., S.E., M.M., M.Kn.",
      role: "Senior Partner",
      description:
        "Agustinus Miranda has extensive experience across banking, aviation, and automotive industries and is a trainer and lecturer in Law and Corporate Finance Management at several private institutions, state-owned enterprises, and universities in Indonesia. He most recently served as an executive at Astra's automotive subsidiary. He is a member of several prestigious professional organizations, including the Associates Chamber International of Arbitrators (Aciarb), the Indonesian Advocates Association (Peradi), the Indonesian Association of Legal Auditors (Asahi), the Association of Indonesian Professional Liquidators (PPLI), the Indonesian Procurement Lawyers Association (APPI), the Indonesian Tax Lawyers & Tax Court Attorneys Association (PKPPI), the Indonesian Contract Law Drafters & Experts (PAHKI), and the Indonesian Mining Law Consultants & Lawyers Association (Perkhappi).",
    },
    {
      img: team3,
      name: "Riana, S.E., Ak., M.Ak., CA., BKP.",
      role: "Senior Partner",
      description:
        "Riana is a certified tax consultant of the Indonesian Tax Consultants Association (IKPI) and a Chartered Accountant of Indonesia (IAI) with extensive experience in accounting and taxation. She also holds a license as a tax legal representative from the Directorate General of Taxation. With over 17 years of experience in accounting and taxation, she has worked in various businesses such as export-import (Forwarding International Company) and Trade Fair Organizer companies. Her experience has led her to become a tax supervisor in several companies, a speaker in various seminars, a tax instructor, and a lecturer at Universitas Bunda Mulia. Additionally, she has served as a Senior Head of Tax Accounting at PT Agung Sedayu Group.",
    },
    {
      img: team4,
      name: "Eko Budi Santoso, S.E.",
      role: "Senior Partner",
      description:
        "Eko is a graduate of the State Finance Polytechnic (PKN STAN) and holds a bachelor's degree from Institut Perbanas Jakarta. He started his career in the government institution of the Tax Court from 2010 to 2019. With 10 years of experience in the Tax Court, Eko has extensive experience in examining and analyzing various tax disputes and customs disputes.",
    },
    {
      img: team5,
      name: "Tassha Billy Gunawan, S.Ak., M.Ak., BKP.",
      role: "Partner",
      description:
        "Tasha completed her Bachelor's degree in Accounting from Universitas Multimedia Nusantara in 2016 and completed her AB & C Brevet education in 2015 at the Indonesian Institute of Accountants (IAI). In 2018, Tasha became a certified tax consultant A, and in 2020, she became a certified tax consultant B. Since 2018, Tasha has assisted many taxpayers in fulfilling their tax obligations, both for individuals and entities.",
    },
  ],
  id: [
    {
      img: team1,
      name: "Dr. Agustina Mappadang, S.E., M.M., Ak., CPA., BKP., WPPE.",
      role: "Direktur",
      description:
        "Dr. Agustina Mappadang meraih gelar Sarjana Akuntansi dari Universitas Samratulangi, Manado, gelar Magister dari Universitas Trisakti, Jakarta, dan gelar Doktor di bidang Perpajakan dari Universitas Pancasila, Jakarta. Beliau adalah praktisi berpengalaman dalam bidang Perpajakan, Keuangan, dan Akuntansi dengan sertifikasi sebagai Trainer dan Securities Broker Representative. Beliau juga memiliki lisensi sebagai Konsultan Pajak dari Kementerian Keuangan dan merupakan anggota Asosiasi Konsultan Pajak Indonesia (IKPI), Asosiasi Akuntan Publik Indonesia (IAPI), dan Forum Akuntansi dan Manajemen Ekonomi (FAME). Dr. Agustina memiliki pengalaman profesional lebih dari 25 tahun di berbagai industri, termasuk peran di Indonesia, Singapura, dan Malaysia sebagai Controller. Sebelumnya, beliau bekerja di Kantor Akuntan Publik dan Konsultan Manajemen KPMG Sudjendro Soesanto & Co. (anggota Klynvield Peat Marwick Goerdeler) dan memberikan kontribusi signifikan dalam Pengembangan Profesional Berkelanjutan (PPL) sebagai instruktur di Asosiasi Konsultan Pajak Indonesia. Beliau juga adalah penulis produktif yang menerbitkan artikel tentang Tata Kelola Perusahaan, Pajak, Audit, Keuangan, dan Manajemen Risiko di jurnal internasional yang diindeks Scopus dan jurnal nasional yang terakreditasi SINTA-DIKTI. Selain itu, beliau menulis di blog Kompasiana membahas isu-isu ekonomi dan sosial serta telah menulis beberapa buku, termasuk: Aspek Perpajakan Notaris/PPAT, Manajemen Investasi dan Portofolio, Pengaruh Penghindaran Pajak dan Manajemen Laba terhadap Nilai Perusahaan, dan Teori Akuntansi.",
    },
    {
      img: team2,
      name: "Dr. Agustinus Miranda Wijaya, S.H., S.E., M.M., M.Kn.",
      role: "Senior Partner",
      description:
        "Agustinus Miranda memiliki pengalaman luas di bidang perbankan, penerbangan, dan industri otomotif serta merupakan pelatih dan dosen di bidang Hukum dan Manajemen Keuangan Perusahaan di beberapa institusi swasta, BUMN, dan universitas di Indonesia...",
    },
    {
      img: team3,
      name: "Riana, S.E., Ak., M.Ak., CA., BKP.",
      role: "Senior Partner",
      description:
        "Riana adalah konsultan pajak bersertifikat dari Asosiasi Konsultan Pajak Indonesia (IKPI) dan Akuntan Chartered Indonesia (IAI)...",
    },
    {
      img: team4,
      name: "Eko Budi Santoso, S.E.",
      role: "Senior Partner",
      description:
        "Eko adalah lulusan Politeknik Keuangan Negara (PKN STAN) dan memegang gelar Sarjana dari Institut Perbanas Jakarta...",
    },
    {
      img: team5,
      name: "Tassha Billy Gunawan, S.Ak., M.Ak., BKP.",
      role: "Partner",
      description:
        "Tasha menyelesaikan gelar Sarjana Akuntansi dari Universitas Multimedia Nusantara pada tahun 2016...",
    },
  ],
};

const Teams = () => {
  const slider = useRef();
  const [modalVisible, setModalVisible] = useState(false);
  const [modalContent, setModalContent] = useState({ text: "", img: "" });
  const { language } = useLanguage(); // Get the current language
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
            {teamData[language].map((member, index) => (
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
                    {language === "en" ? "Read More" : "Baca Selengkapnya"}
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
