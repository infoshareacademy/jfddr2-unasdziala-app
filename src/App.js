import { useEffect, useState } from "react";
import firebase from "./firebase/config";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import Footer from "./components/Footer";
import "./styles/MainContainer.css";

function App() {
  const [dummyVariable, setDummyVariable] = useState([]);
  const [serviceList, setServiceList] = useState([]);

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
    <div className="main-container">
      <Navbar services={serviceList} />
      <Main
        serviceList={serviceList}
        setServiceList={setServiceList}
        setDummyVariable={setDummyVariable}
      />
      <Footer />
    </div>
  );
}

export default App;
