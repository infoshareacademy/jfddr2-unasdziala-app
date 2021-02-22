import "./../styles/Main.css";
import {Switch, Route} from "react-router-dom";
import ServicesList from "./ServicesList";
import AddService from "./AddService.js";

const Main = ({setDummyVariable, serviceList}) => {

  return (
    <div class="main">
      <div class="main-left">przestrzeń do wykorzystania w późniejszych wersjach projektu</div>
      <div class="main-center">
        <Switch>
          <Route path='/addTask'>
            <AddService setDummyVariable={setDummyVariable} serviceList={serviceList}/>
          </Route>
          <Route path="/">
            <ServicesList serviceList={serviceList} />
          </Route>
        </Switch>
      </div>
      <div class="main-right">przestrzeń do wykorzystania w późniejszych wersjach projektu</div>
    </div>
  );
};

export default Main;
