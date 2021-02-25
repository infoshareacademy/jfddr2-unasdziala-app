import { useEffect, useState } from "react";
import firebase from "./firebase/config";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import Footer from "./components/Footer";
import "./styles/MainContainer.css";

function App() {
  const [dummyVariable, setDummyVariable] = useState([]);
  const [services, setServices] = useState([]);

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
        setServices(services);
      });
  }, [dummyVariable]);

  return (
    <div className="main-container">
      <Navbar services={services} />
      <Main services={services} setDummyVariable={setDummyVariable} />
      <Footer />
    </div>
  );
}

export default App;
