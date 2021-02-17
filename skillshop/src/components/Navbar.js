import "./../styles/Navbar.css";
import {BrowserRouter as Router, Link} from "react-router-dom";

const Navbar = () => {
  return (
    <div class="navbar">
      <div class="nav-logo"></div>
      <input class="nav-input" type="text"></input>
      <Router>
        <Link to='/addTask'><button class="nav-button">DODAJ USŁUGĘ</button></Link>
        <Link to='/'><button class="nav-button">Powrót do ekranu głównego (tymczasowy)</button></Link>
      </Router>
    </div>
  );
};

export default Navbar;
