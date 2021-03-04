import "./../styles/ServiceList.css";
import { Link, useRouteMatch, Switch, Route } from "react-router-dom";
import Service from "./Service.js";
import ServiceDetails from "./ServiceDetails.js";

const ServicesList = ({ serviceList }) => {
  const { path } = useRouteMatch();

  return (
    <div className="service-list">
      <Switch>
        <Route exact path={path}>
          <h1>LISTA DOSTĘPNYCH OFERT: </h1>
          {serviceList.map((service) => {
            return <Service key={service.id} service={service} />;
          })}
          <Link to="/">
            <button className="list-button">POWRÓT ⇦</button>
          </Link>
        </Route>
        <Route path={`${path}/:serviceTitle`}>
          <ServiceDetails services={serviceList} />
        </Route>
      </Switch>
    </div>
  );
};

export default ServicesList;
