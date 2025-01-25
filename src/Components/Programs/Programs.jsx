import React, { useState } from "react";
import "./Programs.css";
import taxConsultation from "../../assets/tax-consultation.jpeg";
import taxCompliance from "../../assets/tax-compliance.jpeg";
import taxReview from "../../assets/tax-review.jpeg";
import taxManagement from "../../assets/tax-management.jpeg";
import taxAudit from "../../assets/tax-audit.jpeg";
import taxRefund from "../../assets/tax-refund.jpeg";
import taxLitigation from "../../assets/tax-litigation.jpeg";
import transferPricing from "../../assets/transfer-pricing.jpeg";
import taxTraining from "../../assets/tax-training.jpeg";
import accounting from "../../assets/accounting.jpeg";
import icon1 from "../../assets/program-icon-1.png";
import icon2 from "../../assets/program-icon-2.png";
import icon3 from "../../assets/program-icon-3.png";
import { useLanguage } from "../../LanguageContext";
import Footer from '../../Components/Footer/Footer'

const programsData = {
  en: [
    {
      image: taxConsultation,
      icon: icon1,
      name: "Tax Consultation",
      text: "Services in the form of providing tax consulting services to taxpayers in the context of exercising their rights and fulfilling their tax obligations.",
    },
    {
      image: taxCompliance,
      icon: icon2,
      name: "Tax Compliance",
      text: "Taxation services to support taxpayers in fulfilling tax obligations for a period of time and annually consisting of income tax and value added tax (VAT) obligations. Support is provided in the form of calculating tax payable, paying and depositing taxes, filling out and submitting tax returns.",
    },
    {
      image: taxReview,
      icon: icon3,
      name: "Tax Review",
      text: "Tax review is a service related to the review of all existing tax obligations in a company to find out the level of compliance of taxpayers in fulfilling tax obligations (tax compliance), whether full comply, under comply, or over comply. Both over comply and under comply, both of which will result in losses for the company and cause the company to be examined by the tax authorities even greater. By implementing a tax review, it is expected that tax losses due to over-compliance and under-compliance can be minimized so that tax control can be implemented.",
    },
    {
      image: taxManagement,
      icon: icon1,
      name: "Tax Management",
      text: "Tax Management is a tax service in supporting Taxpayers to carry out Tax Management. Tax management is a management strategy for controlling, planning, and organizing aspects of taxation from a side that can benefit the company's business value while continuing to carry out tax obligations according to regulations and laws. Tax Management is a means of fulfilling tax obligations properly and effectively.",
    },
    {
      image: taxAudit,
      icon: icon2,
      name: "Tax Audit",
      text: "Services provided when a taxpayer requires assistance in a tax audit. These services are provided among other things to manage or fulfill summons from the Tax Service Office. Tax audit assistance is carried out by providing assistance and becoming the attorney who will represent all the interests of the client during the audit process. The Tax Consultant, after being granted the power of attorney, will have the authority to represent the Taxpayer in answering or providing the necessary evidence in the tax audit process.",
    },
    {
      image: taxRefund,
      icon: icon3,
      name: "Tax Refund",
      text: "Tax Refund Services are provided to taxpayers who have excess taxes and wish to file a tax return or refund. Tax refunds can occur on the reporting of Annual Income Tax Return and VAT Tax Return.",
    },
    {
      image: taxLitigation,
      icon: icon1,
      name: "Tax Litigation",
      text: "Services provided to accompany and/or represent taxpayers in resolving tax disputes starting from the objection process at the DGT, appeals and lawsuits at the Tax Court, and review at the Supreme Court.",
    },
    {
      image: transferPricing,
      icon: icon2,
      name: "Transfer Pricing",
      text: "Services related to company policy in determining the transfer price of a transaction, whether it is goods, services, intangible assets, or financial transactions carried out by the company in accordance with tax provisions (TP Doc Making).",
    },
    {
      image: taxTraining,
      icon: icon3,
      name: "Tax Training",
      text: "Seminar/Workshop activities designed for taxpayers to develop knowledge that will impact taxpayer business practices. In-house training activities are training activities that can be designed and developed according to the company's internal needs to improve and update the knowledge and skills of employees in the field of taxation.",
    },
    {
      image: accounting,
      icon: icon2,
      name: "Accounting",
      text: "Accounting is a service that deals with the process of recording financial transactions and is a part of the accounting process in businesses and other organizations. This involves preparing source documents for all transactions, operations, and other business activities.",
    },
  ],
  id: [
    {
      image: taxConsultation,
      icon: icon1,
      name: "Konsultasi Pajak",
      text: "Layanan berupa konsultasi pajak kepada wajib pajak dalam rangka melaksanakan hak dan memenuhi kewajiban perpajakan mereka.",
    },
    {
      image: taxCompliance,
      icon: icon2,
      name: "Kepatuhan Pajak",
      text: "Layanan perpajakan untuk mendukung wajib pajak dalam memenuhi kewajiban pajak selama periode tertentu dan tahunan yang terdiri dari kewajiban Pajak Penghasilan dan Pajak Pertambahan Nilai (PPN). Dukungan diberikan berupa menghitung pajak terutang, membayar dan menyetorkan pajak, mengisi dan menyampaikan SPT pajak.",
    },
    {
      image: taxReview,
      icon: icon3,
      name: "Review Pajak",
      text: "Review pajak adalah layanan terkait dengan peninjauan semua kewajiban pajak yang ada di suatu perusahaan untuk mengetahui tingkat kepatuhan wajib pajak dalam memenuhi kewajiban perpajakan (tax compliance), apakah full comply, under comply, atau over comply...",
    },
    {
      image: taxManagement,
      icon: icon1,
      name: "Manajemen Pajak",
      text: "Manajemen pajak adalah layanan pajak dalam mendukung wajib pajak untuk melakukan manajemen pajak. Manajemen pajak adalah strategi pengelolaan, perencanaan, dan pengorganisasian aspek perpajakan dari sisi yang dapat menguntungkan nilai bisnis perusahaan...",
    },
    {
      image: taxAudit,
      icon: icon2,
      name: "Audit Pajak",
      text: "Layanan yang diberikan ketika wajib pajak membutuhkan bantuan dalam audit pajak. Layanan ini diberikan antara lain untuk mengelola atau memenuhi panggilan dari Kantor Pelayanan Pajak...",
    },
    {
      image: taxRefund,
      icon: icon3,
      name: "Pengembalian Pajak",
      text: "Layanan pengembalian pajak diberikan kepada wajib pajak yang memiliki kelebihan pajak dan ingin mengajukan pengembalian pajak. Pengembalian pajak dapat terjadi pada pelaporan SPT Tahunan Pajak Penghasilan dan SPT Pajak PPN.",
    },
    {
      image: taxLitigation,
      icon: icon1,
      name: "Litigasi Pajak",
      text: "Layanan yang diberikan untuk mendampingi dan/atau mewakili wajib pajak dalam menyelesaikan sengketa pajak mulai dari proses keberatan di DGT, banding dan gugatan di Pengadilan Pajak, hingga kasasi di Mahkamah Agung.",
    },
    {
      image: transferPricing,
      icon: icon2,
      name: "Transfer Pricing",
      text: "Layanan terkait kebijakan perusahaan dalam menentukan harga transfer suatu transaksi, baik itu barang, jasa, aset tidak berwujud, maupun transaksi keuangan yang dilakukan oleh perusahaan sesuai dengan ketentuan pajak (Pembuatan Dokumen TP).",
    },
    {
      image: taxTraining,
      icon: icon3,
      name: "Pelatihan Pajak",
      text: "Kegiatan seminar/workshop yang dirancang untuk wajib pajak guna mengembangkan pengetahuan yang akan memengaruhi praktik bisnis wajib pajak. Kegiatan pelatihan internal dirancang sesuai kebutuhan internal perusahaan untuk meningkatkan dan memperbarui pengetahuan dan keterampilan karyawan di bidang perpajakan.",
    },
    {
      image: accounting,
      icon: icon2,
      name: "Akuntansi",
      text: "Akuntansi adalah layanan yang berkaitan dengan proses pencatatan transaksi keuangan dan merupakan bagian dari proses akuntansi dalam bisnis dan organisasi lainnya. Ini melibatkan penyusunan dokumen sumber untuk semua transaksi, operasi, dan aktivitas bisnis lainnya.",
    },
  ],
};


const Programs = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [modalContent, setModalContent] = useState({ title: "", text: "" });
  const { language } = useLanguage(); 

  const openModal = (title, text) => {
    setModalContent({ title, text });
    setModalVisible(true);
  };

  const closeModal = (e) => {
    if (e.target.className === "modal") {
      setModalVisible(false);
    }
  };

  return (
    <>
    <div className="programs">
      {programsData[language].map((program, index) => (
        <div className="program-card" key={index}>
          <img src={program.image} alt={program.name} className="program-image" />
          <div className="program-info">
            <h3>{program.name}</h3>
            <p>{program.text.substring(0, 80)}...</p>
            <button
              className="read-more"
              onClick={() => openModal(program.name, program.text)}
            >
              Read More
            </button>
          </div>
        </div>
      ))}

      {modalVisible && (
        <div className="modal" onClick={closeModal}>
          <div className="modal-content">
            <h3>{modalContent.title}</h3>
            <p>{modalContent.text}</p>
          </div>
        </div>
      )}
    </div>
    <Footer/>
    </>
  );
};

export default Programs;
