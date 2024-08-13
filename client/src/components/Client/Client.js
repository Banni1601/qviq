import React from "react";
import "./Client.css";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
//Component for Client Information

function Client() {
  const navigate = useNavigate();
  const clients = [
    { id: 1, name: "Krithi", image: "https://res.cloudinary.com/dwn5ul84h/image/upload/v1723527599/ixp4fvjdr5l0v00c8e6v.jpg" },
    { id: 2, name: "Bunny", image: "https://res.cloudinary.com/dwn5ul84h/image/upload/v1699369377/qtprlbwsdqvuewwjukui.jpg" },
    { id: 3, name: "Sunny", image: "https://res.cloudinary.com/dwn5ul84h/image/upload/v1723482346/khlhmcak58xfyvswobxl.jpg" },
    { id: 4, name: "Dani", image: "https://res.cloudinary.com/dwn5ul84h/image/upload/v1723527796/qjjxqplprjkqoryglqll.jpg" }
   
  ];


  if (Cookies.get("p_token") === undefined) {
    return navigate("/login"); // navigate to login page
  }
  return (<div className="clients-page mt-5">
    <h1 className="clients-title mt-5">Our Clients</h1>
    <div className="clients-list">
      {clients.map((client) => (
        <div key={client.id} className="client-card">
          <img src={client.image} alt={client.name} className="client-image" />
          <h2 className="client-name">{client.name}</h2>
          <p className="client-description">{client.description}</p>
        </div>
      ))}
    </div>
  </div>)
}

export default Client;
