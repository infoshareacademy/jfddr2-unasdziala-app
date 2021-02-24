import "./../styles/Navbar.css";
import { Link } from "react-router-dom";
// import {SearchBar} from "./SearchBar"

const Navbar = () => {
  return (
    <div class="navbar">
      <Link  to="/"><div class="nav-logo">SkillShop</div></Link>
      {/* <SearchBar /> */}
      <input class="nav-input" type="text"></input>
      <Link to="/addTask">
        <button class="nav-button">DODAJ USŁUGĘ</button>
      </Link>
    </div>
  );
};

export default Navbar;
