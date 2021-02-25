import "../styles/Navbar.css";
import { Link } from "react-router-dom";
// import {SearchBar} from "./SearchBar"

const Navbar = () => {
  return (
    <div className="navbar">
      <Link to="/">
        <div className="nav-logo">SkillShop</div>
      </Link>
      {/* <SearchBar /> */}
      <input className="nav-input" placeholder="Szukaj..." type="text" />
      <Link to="/addTask">
        <button className="nav-button">DODAJ USŁUGĘ</button>
      </Link>
    </div>
  );
};

export default Navbar;
