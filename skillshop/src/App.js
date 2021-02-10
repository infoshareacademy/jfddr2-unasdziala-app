import { useState } from "react";
import Navbar from "./components/Navbar";
import Service from "./components/Service";
import ServicesList from "./components/ServicesList";

function App() {
  const [counter, setCounter] = useState(1);

  fetch("./services.json")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
    });
  const KlikButton = () => {
    let AktualnyStan = counter;
    AktualnyStan++;
    setCounter(AktualnyStan);
  };
  return (
    <>
      <Navbar />
      <ServicesList>
        <Service />
      </ServicesList>
      <p>{counter}</p>
      <button onClick={KlikButton}>Kliknij mnie</button>
    </>
  );
}

export default App;
