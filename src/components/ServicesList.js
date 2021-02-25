import "../styles/ServiceList.css"
import { Link } from "react-router-dom";
import Service from "./Service.js";

const ServicesList = ({serviceList}) => {
  return (
    <div class="service-list">
      <h1>LISTA DOSTĘPNYCH OFERT: </h1>
      {serviceList.map(service => {
        return <Service key={service.id} service={service} />;
      })}
      <Link  to="/">
        <button class="list-button">POWRÓT ⇦</button>
      </Link>
    </div>
  );
};

export default ServicesList;
