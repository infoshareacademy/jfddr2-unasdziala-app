import "./../styles/Navbar.css";
import { Link } from "react-router-dom";
// import {SearchBar} from "./SearchBar"

const Navbar = () => {
  return (
    <div class="navbar">
      <div class="nav-logo"></div>
      {/* <SearchBar /> */}
      <input class="nav-input" type="text"></input>
      <Link to="/addTask">
        <button class="nav-button">DODAJ USŁUGĘ</button>
      </Link>
      {/* <Link to="/">
        <button class="nav-button">
          Powrót do ekranu głównego (tymczasowy)
        </button>
      </Link> */}
    </div>
  );
};

export default Navbar;
