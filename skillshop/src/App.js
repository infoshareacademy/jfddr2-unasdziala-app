import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Navbar from "./components/Navbar.js";
import Main from "./components/Main.js";
import Footer from "./components/Footer.js";

import ServicesList from "./components/ServicesList";


function App() {
  return (
    <Router>
      
      <Switch>
        <Route path="/uslugi">
          <ServicesList />
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

        {/* <ServicesList>
        </ServicesList> */}
        
      </div>
    </Router>
  );
}

export default App;
