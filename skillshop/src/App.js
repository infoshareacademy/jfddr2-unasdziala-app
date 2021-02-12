// import { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Navbar from "./components/Navbar";
import Service from "./components/Service";
import ServicesList from "./components/ServicesList";

function App() {
  // const [counter, setCounter] = useState(1);

  fetch("./services.json")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
    });
  // const KlikButton = () => {
  //   let AktualnyStan = counter;
  //   AktualnyStan++;
  //   setCounter(AktualnyStan);
  // };
  return (
    <Router>
      <Navbar>
        <Link to="/">Home</Link>
        <Link to="/uslugi">About</Link>
        <Link to="/users">Users</Link>
      </Navbar>

      <Switch>
        <Route path="/uslugi">
          <ServicesList />
        </Route>
        <Route path="/users">{/* <Users /> */}</Route>
        <Route path="/">{/* <Home /> */}</Route>
      </Switch>
      <div>
        {/* <ServicesList>
          <Service />
        </ServicesList> */}
        {/* <p>{counter}</p> */}
        {/* <button onClick={KlikButton}>Kliknij mnie</button> */}
      </div>
    </Router>
  );
}

export default App;
