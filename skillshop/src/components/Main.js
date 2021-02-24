import "./../styles/Main.css";

import { useState } from "react";
import {Switch, Route} from "react-router-dom";
import ServicesList from "./ServicesList";
import AddService from "./AddService.js";
import LandingPage from "./LandingPage";

const Main = ({setDummyVariable, serviceList}) => {

  const [filteredServices, setFilteredServices] = useState([]);

  return (
    <div class="main">
      <div class="main-left">przestrzeń do wykorzystania w późniejszych wersjach projektu</div>
      <div class="main-center">
        <Switch>
          <Route path='/addTask'>
            <AddService setDummyVariable={setDummyVariable} serviceList={filteredServices}/>
          </Route>
          <Route path="/construction-works">
            <ServicesList serviceList={filteredServices} />
          </Route>
          <Route path="/finishing-works">{/* <Context /> */}
            <ServicesList serviceList={filteredServices} />
          </Route>
          <Route path="/electrical-works">{/* <Lists /> */}
            <ServicesList serviceList={filteredServices} />
          </Route>
          <Route path="/all-works">
            <ServicesList serviceList={filteredServices} />
          </Route>
          <Route path="/">
           {/* <ServicesList serviceList={serviceList} /> */}
           <LandingPage serviceList={serviceList} setFilteredServices={setFilteredServices} />
          </Route>
        </Switch>
      </div>
      <div class="main-right">przestrzeń do wykorzystania w późniejszych wersjach projektu</div>
    </div>
  );
};

export default Main;
