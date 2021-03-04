import "./../styles/Main.css";

import { useState } from "react";
import { Switch, Route } from "react-router-dom";
import ServicesList from "./ServicesList";
import AddService from "./AddService.js";
import LandingPage from "./LandingPage";
import SignUpUser from "./SignUpUser";
import SignInUser from "./SignInUser";
import UserPanel from "./UserPanel";

import { categories } from "../helpers/categories";

const Main = ({
  setDummyVariable,
  serviceList,
  userLogInState,
  setUserLogInState,
  searchedServices,
}) => {
  const [servicesFilteredByCategory, setServicesFilteredByCategory] = useState(
    []
  );

  return (
    <div className="main">
      <div className="main-left">
        {/* przestrzeń do wykorzystania w późniejszych wersjach projektu */}
      </div>
      <div className="main-center">
        <Switch>
          <Route path="/addTask">
            <AddService
              setDummyVariable={setDummyVariable}
              serviceList={servicesFilteredByCategory}
              userLogInState={userLogInState}
            />
          </Route>
          <Route path="/sign-up-user">
            <SignUpUser serviceList={serviceList} />
          </Route>
          <Route path="/sign-in-user">
            <SignInUser setUserLogInState={setUserLogInState} />
          </Route>
          <Route path="/user-panel">
            <UserPanel
              serviceList={serviceList}
              userLogInState={userLogInState}
              setDummyVariable={setDummyVariable}
            />
          </Route>
          {categories.map((category) => {
            return (
              <Route path={category.path}>
                <ServicesList serviceList={servicesFilteredByCategory} userLogInState={userLogInState}/>
              </Route>
            );
          })}
          <Route path="/searched-services">
            <ServicesList serviceList={searchedServices} userLogInState={userLogInState}/>
          </Route>
          <Route path="/all-services">
            <ServicesList serviceList={serviceList} userLogInState={userLogInState}/>
          </Route>
          <Route path="/">
            <LandingPage
              serviceList={serviceList}
              setServicesFilteredByCategory={setServicesFilteredByCategory}
            />
          </Route>
        </Switch>
      </div>
      <div className="main-right">
        {/* przestrzeń do wykorzystania w późniejszych wersjach projektu */}
      </div>
    </div>
  );
};

export default Main;
