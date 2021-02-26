import "./../styles/Navbar.css";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";

const Navbar = ({ services, onFilter }) => {
  return (
    <div className="navbar">
      <Link className="logo-link" to="/">
        <div className="nav-logo">SkillShop</div>
      </Link>
      <SearchBar services={services} onFilter={onFilter} />

      

      <div className="unregistered-user">
        <Link className="custom-link" to="/sign-up-user">
          <button className="nav-button">REJESTRACJA</button>
        </Link>
        <Link className="custom-link" to="/sign-in-user">
          <button className="nav-button">LOGOWANIE</button>
        </Link>      
      </div>

      {/* <div className="registered-user">
        <Link className="custom-link" to="/addTask">
          <button className="nav-button">DODAJ<br></br>USŁUGĘ</button>
        </Link>
        <Link className="custom-link" to="/addTask">
          <button class="nav-button">PANEL<br></br>UŻYTKOWNIKA</button>
        </Link>
        <Link className="custom-link" to="/addTask">
          <button className="nav-button">WYLOGUJ<br></br>UŻYTKOWNIKA</button>
        </Link>    
      </div> */}
    </div>
  );
};

export default Navbar;
