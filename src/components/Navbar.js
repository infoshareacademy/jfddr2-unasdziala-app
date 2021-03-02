import "./../styles/Navbar.css";
import firebase from "./../firebase/config.js";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";

const Navbar = ({ serviceList, userLogInState, setUserLogInState, setSearchedServices  }) => {

  const logOut = () => {
    firebase.auth().signOut();
    setUserLogInState(false);
    alert("Pomyślnie wylogowano");
  }

  const checkUserLogInState = () => {
    if(!userLogInState){
      return (
      <div className="unregistered-user">
        <Link className="custom-link" to="/sign-up-user">
          <button className="nav-button">REJESTRACJA</button>
        </Link>
        <Link className="custom-link" to="/sign-in-user">
          <button className="nav-button">LOGOWANIE</button>
        </Link>      
      </div>      
      )
    } else if(!!userLogInState) {
      return(
        <div className="registered-user">
          <Link className="custom-link" to="/addTask">
            <button className="nav-button">DODAJ<br></br>USŁUGĘ</button>
          </Link>
          <Link className="custom-link" to="/user-panel">
            <button class="nav-button">PANEL<br></br>UŻYTKOWNIKA</button>
          </Link>
          <Link className="custom-link" to="/">
            <button className="nav-button" onClick={logOut}>WYLOGUJ<br></br>UŻYTKOWNIKA</button>
          </Link>    
        </div>
      )
    }
  }
  
  return (
    <div className="navbar">
      <Link className="logo-link" to="/">
        <div className="nav-logo">SkillShop</div>
      </Link>
      <SearchBar serviceList={serviceList} setSearchedServices={setSearchedServices}/>
      {checkUserLogInState()}
    </div>
  );
};

export default Navbar;
