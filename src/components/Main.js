import "../styles/Main.css";
import { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import AddService from "./AddService.js";
import Categories from "./Categories";

const Main = ({ setDummyVariable, services }) => {
  const [servicesFilteredByCategory, setServicesFilteredByCategory] = useState(
    []
  );

  return (
    <div className="main">
      <div className="main-left">
        przestrzeń do wykorzystania w późniejszych wersjach projektu
      </div>
      <div className="main-center">
        <Switch>
          <Route path="/addTask">
            <AddService
              setDummyVariable={setDummyVariable}
              serviceList={servicesFilteredByCategory}
            />
          </Route>
          <Route path="/">
            <Categories services={services} />
          </Route>
        </Switch>
      </div>
      <div className="main-right">
        przestrzeń do wykorzystania w późniejszych wersjach projektu
      </div>
    </div>
  );
};

export default Main;
