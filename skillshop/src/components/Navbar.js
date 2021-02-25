import "./../styles/Navbar.css";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";

const Navbar = () => {
  return (
    <div class="navbar">
      <div class="nav-logo"></div>
      <SearchBar />
      <Link to="/addTask">
        <button class="nav-button">DODAJ USŁUGĘ</button>
      </Link>
    </div>
  );
};

export default Navbar;
