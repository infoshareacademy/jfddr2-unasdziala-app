import { Switch, Route, NavLink } from "react-router-dom";
import Service from "./Service";
import ServicesList from "./ServicesList";

const Navmenu = () => (
  <div>
    <ul style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
      <li>
        <NavLink exact activeClassName="active" to="/budowa">
          <div style={{ background: "red", width: "400px", height: "400px" }}>
            Budowa
          </div>
        </NavLink>
      </li>

      <li style={{ background: "yellow", width: "400px", height: "400px" }}>
        <NavLink activeClassName="active" to="/wykonczenie">
          Wykonczenie
        </NavLink>
      </li>
      <li style={{ background: "green", width: "400px", height: "400px" }}>
        <NavLink activeClassName="active" to="/elektryka">
          Elektryka
        </NavLink>
      </li>
      <li style={{ background: "blue", width: "400px", height: "400px" }}>
        <NavLink activeClassName="active" to="/inne">
          Inne
        </NavLink>
      </li>
    </ul>
  </div>
);

const LandingPage = ({ serviceList }) => {
  console.log(serviceList);
  return (
    <div>
      <div>Nawigacja</div>
      <Switch>
        <Route path="/budowa">
          <ServicesList serviceList={serviceList} />
        </Route>
        <Route path="/wykonczenie">{/* <Context /> */}</Route>
        <Route path="/elektryka">{/* <Lists /> */}</Route>

        <Route path="/inne"></Route>
        <Route path="/">
          <Navmenu />
        </Route>
      </Switch>
    </div>
  );
};

export default LandingPage;
