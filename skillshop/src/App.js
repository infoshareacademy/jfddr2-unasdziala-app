import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import { useState, useEffect } from 'react';

import Navbar from "./components/Navbar.js";
import Main from "./components/Main.js";
import Footer from "./components/Footer.js";


function App() {

  const [ service, setService ] = useState([]);
  const [ serviceList, setServiceList ] = useState([]);

  useEffect(
    () => {
      fetch('http://localhost:3001/services').then((res) => res.json()).then((serviceList) => {
        setServiceList(serviceList);
      });
    },[ service ]
  );

  console.log(serviceList);

  return (
    <Router>
      
      <Switch>
        <Route path="/uslugi">
          {/* <ServicesList /> */}
        </Route>
        <Route path="/users">{/* <Users /> */}</Route>
        <Route path="/">{/* <Home /> */}</Route>
      </Switch>

      <div>
          {/* <Link to="/">Home</Link>
          <Link to="/uslugi">About</Link>
          <Link to="/users">Users</Link> */}

        <Navbar></Navbar>
        <Main />
        <Footer />
        
      </div>
    </Router>
  );
}

export default App;
