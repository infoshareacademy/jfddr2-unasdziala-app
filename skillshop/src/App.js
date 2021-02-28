import "./styles/MainContainer.css";

import { useState, useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import firebase from "./firebase/config.js";
import Navbar from "./components/Navbar.js";
import Main from "./components/Main.js";
import Footer from "./components/Footer.js";

function App() {
  const [dummyVariable, setDummyVariable] = useState([]);
  const [serviceList, setServiceList] = useState([]);
  const [filteredServices, setFilteredServices] = useState([]);

  const [userLogInState, setUserLogInState] = useState(false);

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
        <Navbar
          services={serviceList}
          onFilter={setFilteredServices}
          userLogInState={userLogInState}
          setUserLogInState={setUserLogInState}
        />
        <Main
          serviceList={filteredServices}
          setServiceList={setServiceList}
          setDummyVariable={setDummyVariable}
          setUserLogInState={setUserLogInState}
        />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
