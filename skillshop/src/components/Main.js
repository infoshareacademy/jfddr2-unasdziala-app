import "./../styles/Main.css";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import ServicesList from "./ServicesList";

const Main = () => {
  return (
    <div class="main">
      <div class="main-left">przestrzeń do wykorzystania w późniejszych wersjach projektu</div>
      <div class="main-center">
      <Router>
        <Switch>
          <Route path='/addTask'>
            <div>TU BĘDĄ DODAWANE USŁUGI</div>
          </Route>
          <Route path="/">
            <ServicesList />
          </Route>
        </Switch>
      </Router>
        
      </div>
      <div class="main-right">przestrzeń do wykorzystania w późniejszych wersjach projektu</div>
    </div>
  );
};

export default Main;
