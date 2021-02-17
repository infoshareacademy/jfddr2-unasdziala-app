import Navbar from "./Navbar.js";
import Main from "./Main.js";
import Footer from "./Footer.js";

import {BrowserRouter as Router} from "react-router-dom";

const MainContainer = () => {
    return (
      <div>
        <Router>
            <Navbar />
            <Main />
            <Footer />
        </Router>
      </div>
    );
  };
  
  export default MainContainer;