import "./../styles/ServiceList.css"

import Service from "./Service.js";

const ServicesList = ({ serviceList }) => {
  return (
<<<<<<< HEAD
    <div>
      {serviceList.map((service) => {
=======
    <div class="service-list">
      <h1>LISTA DOSTĘPNYCH OFERT: </h1>
      {serviceList.map(service => {
>>>>>>> 6ffd75da6f8ac84886fda034e7d3164520afa16f
        return <Service key={service.id} service={service} />;
      })}
    </div>
  );
};

export default ServicesList;
