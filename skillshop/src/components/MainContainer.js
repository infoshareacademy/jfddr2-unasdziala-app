import { useState, useEffect } from "react";

import Navbar from "./Navbar.js";
import Main from "./Main.js";
import Footer from "./Footer.js";

import { BrowserRouter as Router } from "react-router-dom";
import SearchBar from "./SearchBar.js";

const MainContainer = () => {
  const [serviceList, setServiceList] = useState([]);

  useEffect(() => {
    fetch("./data/services.json")
      .then((res) => res.json())
      .then((data) => {
        setServiceList(data.services);
      });
  }, []);

  return (
    <div>
      <Router>
        <Navbar services={serviceList} />
        <Main serviceList={serviceList} />
        <SearchBar services={serviceList} />
        <Footer />
      </Router>
    </div>
  );
};

export default MainContainer;
