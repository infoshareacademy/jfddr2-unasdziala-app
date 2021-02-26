import "./../styles/Main.css";

import { useState } from "react";
import { Switch, Route } from "react-router-dom";
import ServicesList from "./ServicesList";
import AddService from "./AddService.js";
import LandingPage from "./LandingPage";

const Main = ({ setDummyVariable, serviceList }) => {
  const [servicesFilteredByCategory, setServicesFilteredByCategory] = useState(
    []
  );

  return (
    <div class="main">
      <div class="main-left">
        przestrzeń do wykorzystania w późniejszych wersjach projektu
      </div>
      <div class="main-center">
        <Switch>
          <Route path="/addTask">
            <AddService
              setDummyVariable={setDummyVariable}
              serviceList={servicesFilteredByCategory}
            />
          </Route>
          <Route path="/construction-services">
            <ServicesList serviceList={servicesFilteredByCategory} />
          </Route>
          <Route path="/hydraulic-services">
            {/* <Context /> */}
            <ServicesList serviceList={servicesFilteredByCategory} />
          </Route>
          <Route path="/electrical-services">
            {/* <Lists /> */}
            <ServicesList serviceList={servicesFilteredByCategory} />
          </Route>
          <Route path="/finishing-services">
            <ServicesList serviceList={servicesFilteredByCategory} />
          </Route>
          <Route path="/carpentry-services">
            <ServicesList serviceList={servicesFilteredByCategory} />
          </Route>
          <Route path="/architecture-services">
            <ServicesList serviceList={servicesFilteredByCategory} />
          </Route>
          <Route path="/cleaning-services">
            <ServicesList serviceList={servicesFilteredByCategory} />
          </Route>
          <Route path="/painting-services">
            <ServicesList serviceList={servicesFilteredByCategory} />
          </Route>
          <Route path="/transport-services">
            <ServicesList serviceList={servicesFilteredByCategory} />
          </Route>
          <Route path="/it-services">
            <ServicesList serviceList={servicesFilteredByCategory} />
          </Route>
          <Route path="/chimney-services">
            <ServicesList serviceList={servicesFilteredByCategory} />
          </Route>
          <Route path="/all-services">
            <ServicesList serviceList={serviceList} />
          </Route>
          <Route path="/">
            <LandingPage
              serviceList={serviceList}
              setServicesFilteredByCategory={setServicesFilteredByCategory}
            />
          </Route>
        </Switch>
      </div>
      <div class="main-right">
        przestrzeń do wykorzystania w późniejszych wersjach projektu
      </div>
    </div>
  );
};

export default Main;
