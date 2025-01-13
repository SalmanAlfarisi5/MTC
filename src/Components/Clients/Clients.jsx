import React from "react";
import "./Clients.css";
import { useLanguage } from "../../LanguageContext";
import photo1 from "../../assets/photo-1.png";
import photo2 from "../../assets/photo-2.png";
import photo3 from "../../assets/photo-3.png";
import photo4 from "../../assets/photo-4.png";
import photo5 from "../../assets/photo-5.png";
import photo6 from "../../assets/photo-6.png";
import photo7 from "../../assets/photo-7.png";
import photo8 from "../../assets/photo-8.png";
import photo9 from "../../assets/photo-9.png";

const Clients = () => {

  const { language } = useLanguage(); 

  const clientsData = [
    {
      img: photo1,
      name_en: "Arsolusi Consulting Group",
      description_en:
        "Arsolusi Consulting Group is a consulting firm headquartered in Jakarta, Indonesia. Our company is managed by a dedicated and professional team of legal consultants with experience working across various industries and handling clients on both national and international scales.",
      name_id: "Arsolusi Consulting Group",
      description_id:
        "Arsolusi Consulting Group adalah perusahaan konsultan yang berbasis di Jakarta, Indonesia. Perusahaan ini dikelola oleh tim konsultan hukum yang berdedikasi dan profesional dengan pengalaman bekerja di berbagai industri serta menangani klien di tingkat nasional dan internasional.",
    },
    {
      img: photo2,
      name_en: "Cinta Puri Pratama",
      description_en:
        "CV. Cinta Puri Pratama is a coal mining company in South Kalimantan, Indonesia, focused on extracting and exporting coal with GAR specifications of 3,800 to 4,000. The company operates under a Mining Business Permit (IUP) and serves both domestic and international markets.",
      name_id: "Cinta Puri Pratama",
      description_id:
        "CV. Cinta Puri Pratama adalah perusahaan pertambangan batu bara di Kalimantan Selatan, Indonesia, yang berfokus pada penambangan dan ekspor batu bara dengan spesifikasi GAR 3.800 hingga 4.000. Perusahaan ini beroperasi dengan Izin Usaha Pertambangan (IUP) dan melayani pasar domestik maupun internasional.",
    },
    {
      img: photo3,
      name_en: "Garsindo Engineering Equipment",
      description_en:
        "CV. Garsindo Engineering Equipment is a Surabaya-based Indonesian company specializing in heavy equipment spare parts and hydraulic breakers. In 2020, they became the official distributor for Hanmen Brand Hydraulic Breakers.",
      name_id: "Garsindo Engineering Equipment",
      description_id:
        "CV. Garsindo Engineering Equipment adalah perusahaan yang berbasis di Surabaya, Indonesia, yang mengkhususkan diri dalam suku cadang alat berat dan hydraulic breakers. Pada tahun 2020, mereka menjadi distributor resmi untuk Hanmen Brand Hydraulic Breakers.",
    },
    {
      img: photo4,
      name_en: "CV Rahmania",
      description_en:
        "CV. Rahmania Bagaskara Gemilang, established on February 15, 2016, is an Indonesian company specializing in housekeeping services under the brand RumahBersih.com. They offer cleaning services for homes, apartments, offices, and commercial spaces.",
      name_id: "CV Rahmania",
      description_id:
        "CV. Rahmania Bagaskara Gemilang, didirikan pada 15 Februari 2016, adalah perusahaan Indonesia yang mengkhususkan diri dalam layanan housekeeping di bawah merek RumahBersih.com. Mereka menawarkan layanan kebersihan untuk rumah, apartemen, kantor, dan ruang komersial.",
    },
    {
      img: photo5,
      name_en: "Nurul Amanah Sirindo",
      description_en:
        "Nurul Amanah Sirindo is an Indonesian travel agency specializing in Hajj and Umrah pilgrimage services, operating under the Amanah Tour brand. The company provides comprehensive travel packages, including visa assistance, hotel bookings, and spiritual tours.",
      name_id: "Nurul Amanah Sirindo",
      description_id:
        "Nurul Amanah Sirindo adalah agen perjalanan Indonesia yang mengkhususkan diri dalam layanan perjalanan Haji dan Umrah, yang beroperasi di bawah merek Amanah Tour. Perusahaan ini menyediakan paket perjalanan lengkap, termasuk bantuan visa, pemesanan hotel, dan tur spiritual.",
    },
    {
      img: photo6,
      name_en: "Praksita Citra Buana",
      description_en:
        "PT. Prakasita Citra Buana, operating as Pathfinder Business Consulting, is a Jakarta-based firm specializing in market and business intelligence, brand development, and training programs. Established in 2014, the company is located at The CEO Building, Jakarta.",
      name_id: "Prakasita Citra Buana",
      description_id:
        "PT. Prakasita Citra Buana, yang beroperasi sebagai Pathfinder Business Consulting, adalah perusahaan yang berbasis di Jakarta yang mengkhususkan diri dalam intelijen pasar dan bisnis, pengembangan merek, dan program pelatihan. Didirikan pada tahun 2014, perusahaan ini berlokasi di Gedung CEO, Jakarta.",
    },
    {
      img: photo7,
      name_en: "Rekamitra Cipta Tambang",
      description_en:
        "PT. Rekamitra Cipta Tambang is a limited liability company established on July 31, 2009, with its registered address at Komplek Fatmawati Mas Blok III/301, Jl. RS. Fatmawati No. 20, Cilandak, South Jakarta. The company is involved in wholesale trade activities.",
      name_id: "Rekamitra Cipta Tambang",
      description_id:
        "PT. Rekamitra Cipta Tambang adalah perusahaan terbatas yang didirikan pada 31 Juli 2009, dengan alamat terdaftar di Komplek Fatmawati Mas Blok III/301, Jl. RS. Fatmawati No. 20, Cilandak, Jakarta Selatan. Perusahaan ini terlibat dalam aktivitas perdagangan grosir.",
    },
    {
      img: photo8,
      name_en: "Rekamitra Sukses Investama",
      description_en:
        "PT. Rekamitra Sukses Investama (RSI) is a contractor specializing in dredging, reclamation, port construction, and other projects. The company is headquartered in South Jakarta and emphasizes quality, environmental considerations, and workplace safety in its operations.",
      name_id: "Rekamitra Sukses Investama",
      description_id:
        "PT. Rekamitra Sukses Investama (RSI) adalah kontraktor yang mengkhususkan diri dalam pengerukan, reklamasi, pembangunan pelabuhan, dan proyek lainnya. Perusahaan ini berbasis di Jakarta Selatan dan menekankan kualitas, pertimbangan lingkungan, dan keselamatan kerja dalam operasinya.",
    },
    {
      img: photo9,
      name_en: "Transworld Solution",
      description_en:
        "PT. Transworld Solution is an Indonesian company specializing in corrosion protection and coating services for various industries. Established in 2003, it operates in affiliation with Corrpro Asia Pte. Ltd. and is supported by Corrpro Companies Inc. USA.",
      name_id: "Transworld Solution",
      description_id:
        "PT. Transworld Solution adalah perusahaan Indonesia yang mengkhususkan diri dalam layanan perlindungan korosi dan pelapisan untuk berbagai industri. Didirikan pada tahun 2003, perusahaan ini berafiliasi dengan Corrpro Asia Pte. Ltd. dan didukung oleh Corrpro Companies Inc. USA.",
    },
  ];

  return (
    <div className="clients">
      <div className="gallery">
        {clientsData.map((client, index) => (
          <div className="client client-page" key={index}>
            <img src={client.img} alt={client.name_en} />
            <p className="company-name">
              {language === "en" ? client.name_en : client.name_id}
            </p>
            <p className="company-description">
              {language === "en"
                ? client.description_en
                : client.description_id}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Clients;
