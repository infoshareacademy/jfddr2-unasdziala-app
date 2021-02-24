import "./../styles/ServiceList.css";

import Service from "./Service.js";

const ServicesList = ({ serviceList }) => {
  return (
    <div class="service-list">
      <h1>LISTA DOSTĘPNYCH OFERT: </h1>
      {serviceList.map((service) => {
        return <Service key={service.id} service={service} />;
      })}
    </div>
  );
};

export default ServicesList;
