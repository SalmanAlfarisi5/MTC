import React, { useState } from "react";
import "./About.css";
import about_img from "../../assets/about.png";
import { useLanguage } from "../../LanguageContext";

const About = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const { language } = useLanguage(); 

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
            <img src={about_img} alt={language === "en" ? "About Us" : "Tentang Kami"} className="about-img" />
            <div className="caption"></div>
          </div>
        </div>
        <div className="about-right">
          <h3>{language === "en" ? "About Us" : "Tentang Kami"}</h3>
          <h2>{language === "en" ? "Company Profile" : "Profil Perusahaan"}</h2>
          <p>
            {language === "en"
              ? "Mitra Taxindo Consulting (MTC) is a tax consulting company located in Jakarta that has obtained official certification and has experience in handling tax obligations for taxpayers."
              : "Mitra Taxindo Consulting (MTC) adalah perusahaan konsultan pajak yang berlokasi di Jakarta, yang telah memperoleh sertifikasi resmi dan berpengalaman dalam menangani kewajiban perpajakan bagi wajib pajak."}
          </p>
          <p>
            {language === "en"
              ? "MTC was established in response to the needs of individuals and companies to understand and comply with complex tax regulations. Taxes are one of the most important aspects of business activities, and errors in tax calculation or reporting can significantly impact a company's finances and reputation."
              : "MTC didirikan untuk memenuhi kebutuhan individu dan perusahaan dalam memahami serta mematuhi peraturan pajak yang kompleks. Pajak adalah salah satu aspek terpenting dari kegiatan bisnis, dan kesalahan dalam perhitungan atau pelaporan pajak dapat berdampak signifikan pada keuangan dan reputasi perusahaan."}
          </p>
          <p>
            {language === "en"
              ? "MTC is a solution to meet specific tax consultation needs where each company has different tax consultation requirements, depending on the type of business and income earned or received. Thus, companies can focus more on their core business activities without worrying about complex tax regulations, which can help improve operational efficiency and company productivity."
              : "MTC adalah solusi untuk memenuhi kebutuhan konsultasi pajak khusus di mana setiap perusahaan memiliki kebutuhan konsultasi pajak yang berbeda, tergantung pada jenis bisnis dan pendapatan yang diperoleh atau diterima. Dengan demikian, perusahaan dapat lebih fokus pada kegiatan bisnis inti mereka tanpa khawatir dengan peraturan pajak yang kompleks, yang dapat membantu meningkatkan efisiensi operasional dan produktivitas perusahaan."}
          </p>
        </div>
      </div>

      {modalVisible && (
        <div className="modal" onClick={closeModal}>
          <div className="modal-content">
            <p>
              <strong>{language === "en" ? "Motto" : "Moto"}</strong>
              {language === "en"
                ? "“Your Strategic Partner Towards Success, Trustworthy, and Committed”"
                : "“Mitra Strategis Anda Menuju Kesuksesan, Dapat Dipercaya, dan Berkomitmen”"}
            </p>
            <p>
              <strong>{language === "en" ? "Vision" : "Visi"}</strong>
              {language === "en"
                ? "To become a trusted consulting company as a strategic partner that synergizes and upholds the values of professionalism, integrity, and commitment to providing the best service."
                : "Menjadi perusahaan konsultan terpercaya sebagai mitra strategis yang bersinergi dan menjunjung nilai-nilai profesionalisme, integritas, dan komitmen dalam memberikan pelayanan terbaik."}
            </p>
            <p>
              <strong>{language === "en" ? "Mission" : "Misi"}</strong>
              {language === "en" ? (
                <>
                  1. Provide quality tax services by prioritizing the principles of service and optimal solutions for clients.
                  <br />
                  2. Develop professional consultants with high integrity and commitment that comply with national and international standards.
                  <br />
                  3. Value professionalism and integrity in every aspect of the business, including maintaining client confidentiality, not engaging in actions that harm clients, and avoiding conflicts of interest.
                  <br />
                  4. Build long-term partner relationships with clients and actively engage in developing strategic solutions to achieve their business goals.
                  <br />
                  5. Diversify business to continuously grow and advance in accordance with the development of science and technology.
                </>
              ) : (
                <>
                  1. Memberikan layanan pajak berkualitas dengan mengutamakan prinsip pelayanan dan solusi optimal bagi klien.
                  <br />
                  2. Mengembangkan konsultan profesional dengan integritas tinggi dan komitmen yang sesuai dengan standar nasional dan internasional.
                  <br />
                  3. Menghargai profesionalisme dan integritas dalam setiap aspek bisnis, termasuk menjaga kerahasiaan klien, tidak melakukan tindakan yang merugikan klien, dan menghindari konflik kepentingan.
                  <br />
                  4. Membangun hubungan mitra jangka panjang dengan klien dan secara aktif terlibat dalam mengembangkan solusi strategis untuk mencapai tujuan bisnis mereka.
                  <br />
                  5. Mendiversifikasi bisnis untuk terus tumbuh dan maju sejalan dengan perkembangan ilmu pengetahuan dan teknologi.
                </>
              )}
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default About;
