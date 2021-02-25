import "../styles/LandingPage.css";
import { Link, Route, Switch } from "react-router-dom";
import ServicesList from "./ServicesList";
import { categories } from "../helpers/categories";

const Categories = ({ services, setServicesFilteredByCategory }) => {
  const filterByCategory = (e, category) => {
    const filteredServicesArray =
      services.filter((service) => service.category === category) || [];
    setServicesFilteredByCategory(filteredServicesArray);
  };

  return (
    <div className="main-container">
      <Switch>
        {categories.map(({ path, filter }) => {
          const categoryServices = services.filter(
            (service) => service.category === filter
          );

          return (
            <Route path={path}>
              <ServicesList services={categoryServices} />
            </Route>
          );
        })}
        <Route path="/all-services">
          <ServicesList services={services} />
        </Route>
        <Route path="/">
          <ul>
            {categories.map(({ name, path }) => (
              <li>
                <Link exact activeClassName="active" to={path}>
                  <div className="box">{name}</div>
                </Link>
              </li>
            ))}
            <li>
              <Link exact activeClassName="active" to="/all-services">
                <div className="box1">Wszystkie</div>
              </Link>
            </li>
          </ul>
        </Route>
      </Switch>
    </div>
  );
};

export default Categories;
