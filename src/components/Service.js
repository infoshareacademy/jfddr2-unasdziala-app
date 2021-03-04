import "./../styles/Service.css";
import { Link, useRouteMatch } from "react-router-dom";

const Service = ({ service }) => {
  const { url } = useRouteMatch();

  return (
    <div className="service">
      <div className="informations">
        <div className="header">
          <h1>{service.title}</h1>
          <div>{service.description}</div>
        </div>
        <div className="data">
          <div>
            <b>Kategoria usług: </b>
            {service.category}
          </div>
          <div>
            <b>Miasto: </b>
            {service.city}
          </div>
          <div>
            <b>Cena: </b>
            {service.price}
          </div>
        </div>
      </div>
      <Link className="details" to={`${url}/${service.title}`}>
        <button className="service-button">SZCZEGÓŁY</button>
      </Link>
    </div>
  );
};

export default Service;
