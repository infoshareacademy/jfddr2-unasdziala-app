import "./../styles/Main.css";

import { useState } from "react";
import {Switch, Route} from "react-router-dom";
import ServicesList from "./ServicesList";
import AddService from "./AddService.js";
import LandingPage from "./LandingPage";

const Main = ({setDummyVariable, serviceList}) => {

  const [servicesFilteredByCategory, setServicesFilteredByCategory] = useState([]);

  return (
    <div class="main">
      <div class="main-left">przestrzeń do wykorzystania w późniejszych wersjach projektu</div>
      <div class="main-center">
        <Switch>
          <Route path='/addTask'>
            <AddService setDummyVariable={setDummyVariable} serviceList={servicesFilteredByCategory}/>
          </Route>
          <Route path="/construction-works">
            <ServicesList serviceList={servicesFilteredByCategory} />
          </Route>
          <Route path="/hydraulic-works">{/* <Context /> */}
            <ServicesList serviceList={servicesFilteredByCategory} />
          </Route>
          <Route path="/electrical-works">{/* <Lists /> */}
            <ServicesList serviceList={servicesFilteredByCategory} />
          </Route>
          <Route path="/finishing-works">
            <ServicesList serviceList={servicesFilteredByCategory} />
          </Route>
          <Route path="/carpentry-works">
            <ServicesList serviceList={servicesFilteredByCategory} />
          </Route>
          <Route path="/architecture-works">
            <ServicesList serviceList={servicesFilteredByCategory} />
          </Route>
          <Route path="/cleaning-works">
            <ServicesList serviceList={servicesFilteredByCategory} />
          </Route>      
          <Route path="/painting-works">
            <ServicesList serviceList={servicesFilteredByCategory} />
          </Route>      
          <Route path="/transport-works">
            <ServicesList serviceList={servicesFilteredByCategory} />
          </Route>  
          <Route path="/it-works">
            <ServicesList serviceList={servicesFilteredByCategory} />
          </Route>  
          <Route path="/chimney-works">
            <ServicesList serviceList={servicesFilteredByCategory} />
          </Route>
          <Route path="/all-works">
            <ServicesList serviceList={serviceList} />
          </Route>
          <Route path="/">
            <LandingPage serviceList={serviceList} setServicesFilteredByCategory={setServicesFilteredByCategory} />
          </Route>
        </Switch>
      </div>
      <div class="main-right">przestrzeń do wykorzystania w późniejszych wersjach projektu</div>
    </div>
  );
};

export default Main;
