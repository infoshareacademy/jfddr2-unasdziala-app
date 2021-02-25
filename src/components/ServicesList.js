import "../styles/ServiceList.css";
import { Link } from "react-router-dom";
import Service from "./Service.js";

const ServicesList = ({ services }) => {
  return (
    <div className="service-list">
      <h1>LISTA DOSTĘPNYCH OFERT: </h1>
      {services.map((service) => {
        return <Service key={service.id} service={service} />;
      })}
      <Link to="/">
        <button className="list-button">POWRÓT ⇦</button>
      </Link>
    </div>
  );
};

export default ServicesList;
