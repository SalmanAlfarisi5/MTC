import React from "react";
import "./Clients.css";
import photo1 from "../../assets/photo-1.png";
import photo2 from "../../assets/photo-2.png";
import photo3 from "../../assets/photo-3.png";
import photo4 from "../../assets/photo-4.png";
import photo5 from "../../assets/photo-5.png";
import photo6 from "../../assets/photo-6.png";
import photo7 from "../../assets/photo-7.png";
import photo8 from "../../assets/photo-8.png";
import photo9 from "../../assets/photo-9.png";

const clientsData = [
  { image: photo1, name: "Arsolusi Consulting Group" },
  { image: photo2, name: "Cinta Puri Pratama" },
  { image: photo3, name: "Garsindo Engineering Equipment" },
  { image: photo4, name: "CV. Rahmania Bagaskara Gemilang" },
  { image: photo5, name: "Amanah Tour" },
  { image: photo6, name: "Prakasita Citra Buana" },
  { image: photo7, name: "Rekamitra Cipta Tambang" },
  { image: photo8, name: "Rekamitra Sukses Investama" },
  { image: photo9, name: "PT. Transworld Solution" },
];

const Clients = () => {
  return (
    <div className="clients">
      <div className="gallery">
        {clientsData.map((client, index) => (
          <div className="client" key={index}>
            <img src={client.image} alt={client.name} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Clients;
