import { useState, useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";

import firebase from "./../firebase/config.js";

import Navbar from "./Navbar.js";
import Main from "./Main.js";
import Footer from "./Footer.js";

const MainContainer = () => {

  const [dummyVariable, setDummyVariable] = useState([]);
  const [serviceList, setServiceList] = useState([]);

  useEffect(() => {
    firebase
      .firestore()
      .collection("services")
      .get()
      .then(snapshot => {
        const services = snapshot.docs.map((service) => {
          return {
            ...service.data(),
            id: service.id
          }
        });
        setServiceList(services);
      });
  }, [dummyVariable]);

  return (
    <div>
      <Router>
        <Navbar services={serviceList}/>
        <Main serviceList={serviceList} setDummyVariable={setDummyVariable}/>
        <Footer />
      </Router>
    </div>
  );
};

export default MainContainer;
