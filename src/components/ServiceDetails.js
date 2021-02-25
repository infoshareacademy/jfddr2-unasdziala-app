import React from "react";
import { useParams } from "react-router-dom";

function ServiceDetails({ services }) {
  const { serviceTitle } = useParams();
  const selectedService = services.find(
    (service) => service.title === serviceTitle
  );

  return <div>{JSON.stringify(selectedService)}</div>;
}

export default ServiceDetails;
