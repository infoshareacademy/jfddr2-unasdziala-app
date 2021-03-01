import "./../styles/MainContainer.css";

import { useState, useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import firebase from "./../firebase/config.js";
import Navbar from "./Navbar.js";
import Main from "./Main.js";
import Footer from "./Footer.js";

const MainContainer = () => {
  const [dummyVariable, setDummyVariable] = useState([]);
  const [serviceList, setServiceList] = useState([]);
  const [filteredServices, setFilteredServices] = useState([]);
  console.log("filteredservices:", filteredServices);

  useEffect(() => {
    setFilteredServices(serviceList);
  }, [serviceList]);

  useEffect(() => {
    firebase
      .firestore()
      .collection("services")
      .get()
      .then((snapshot) => {
        const services = snapshot.docs.map((service) => {
          return {
            ...service.data(),
            id: service.id,
          };
        });
        setServiceList(services);
      });
  }, [dummyVariable]);

  return (
    <div class="main-container">
      <Router>
        <Navbar services={serviceList} onFilter={setFilteredServices} />
        <Main
          serviceList={filteredServices}
          setServiceList={setServiceList}
          setDummyVariable={setDummyVariable}
        />
        <Footer />
      </Router>
    </div>
  );
};

export default MainContainer;