import "./../styles/Main.css";

import { useState } from "react";
import { Switch, Route } from "react-router-dom";
import ServicesList from "./ServicesList";
import AddService from "./AddService.js";
import LandingPage from "./LandingPage";

import { categories } from "../helpers/categories";

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
          {categories.map(category =>{
            return(
              <Route path={category.path}>
                <ServicesList serviceList={servicesFilteredByCategory} />
              </Route>
            )
          })}
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
