import React from "react";
import "./Clients.css";
import clientsData from "../../data/client.json";

const Clients = () => {
  return (
    <div className="clients">
      <div className="gallery">
        {clientsData.map((client, index) => (
          <div className="client" key={index}>
            <img src={client.image} alt={client.name} />
            <p>{client.name}</p>
          </div>
        ))}
      </div>
      <button className="btn dark-btn">See more here</button>
    </div>
  );
};

export default Clients;
