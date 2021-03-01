import React from "react";
import { useParams, Link } from "react-router-dom";
import "../styles/ServiceDetails.css";

function ServiceDetails({ services }) {
  const { serviceTitle } = useParams();
  const selectedService = services.find(
    (service) => service.title === serviceTitle
  );

  return (
    <div>
      <div className="title">{selectedService?.title}</div>
      <div className="details">
        <p>Lokalizacja:&nbsp;&nbsp;{selectedService?.city}&nbsp;&nbsp;&nbsp;</p>
        <p>Cena:&nbsp;&nbsp;{selectedService?.price}</p>
      </div>
      <p className="description">Opis:&nbsp;&nbsp;{selectedService?.detailDescritpion}</p>
      <p className="contact">
        Kontakt:&nbsp;&nbsp;{selectedService?.phoneNumber},&nbsp;&nbsp;{selectedService?.fullName},&nbsp;&nbsp;
        {selectedService?.email}
      </p>
      <p>dodane:&nbsp;&nbsp;{selectedService?.date}</p>
      <Link to="/all-services">
        <button className="button-back">Powrót</button>
      </Link>
    </div>
  );
}

export default ServiceDetails;
