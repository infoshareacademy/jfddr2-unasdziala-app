import React from "react";
import { useParams, Link } from "react-router-dom";
import "../styles/ServiceDetails.css";

function ServiceDetails({ services }) {
  const { serviceTitle } = useParams();
  const selectedService = services.find(
    (service) => service.title === serviceTitle
  );

  return (
    <div className="details">
      <div className="title">{selectedService?.title}</div>
      <div className="info">
        <div className="info-box">
          <div className="first-info">
            <p className="location">
              <i class="lni lni-home"></i>
              {selectedService?.city}
            </p>
            <p className="price">
              <i class="lni lni-wallet"></i>
              {selectedService?.price}
            </p>
          </div>
          <div className="second-info">
            <p className="contact">
              <i class="lni lni-phone"></i>
              {selectedService?.phoneNumber},&nbsp;&nbsp;
              {selectedService?.fullName}
            </p>
            <p className="email">
              <i class="lni lni-envelope"></i>
              {selectedService?.email}
            </p>
          </div>
        </div>
        <p className="description">
          Opis:&nbsp;&nbsp;{selectedService?.detailDescription}
        </p>
        <p className="date">dodane:&nbsp;&nbsp;{selectedService?.date}</p>
      </div>
      <Link to="/all-services">
        <button className="button-back">Powrót</button>
      </Link>
    </div>
  );
}

export default ServiceDetails;
