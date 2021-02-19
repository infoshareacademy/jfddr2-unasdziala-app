import { useState, useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";

import Navbar from "./Navbar.js";
import Main from "./Main.js";
import Footer from "./Footer.js";

const MainContainer = () => {

  const [serviceList, setServiceList] = useState([]);

  useEffect(() => {
    fetch("./data/services.json")
      .then(res => res.json())
      .then(data => {
        setServiceList(data.services);
      });
  }, []);


  return (
    <div>
      <Router>
        <Navbar services={serviceList}/>
        <Main serviceList={serviceList} />
        <Footer />
      </Router>
    </div>
  );
};

export default MainContainer;
