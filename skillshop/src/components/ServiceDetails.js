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
      {/* <h3>{JSON.stringify(selectedService)}</h3> */}
      <h3>{selectedService?.title}</h3>
      <p>Opis usług:{selectedService?.description}</p>
      <p>Lokalizacja:{selectedService?.city}</p>
      <p>Cena usługi:{selectedService?.price} zł</p>
      <p>
        Kontakt:{selectedService?.phoneNumber},{selectedService?.fullName},
        {selectedService?.email}
      </p>
      <Link to="/all-services">
        <button className="button-back">Powrót</button>
      </Link>
    </div>
  );
}

export default ServiceDetails;
