import "./../styles/LandingPage.css";
import { Link } from "react-router-dom";

const LandingPage = ({ serviceList, setServicesFilteredByCategory }) => {
  // console.log(serviceList);

  console.log(serviceList)

  const filterByCategory = (e, category) => {
    let filteredServicesArray = [];
    filteredServicesArray = serviceList.filter(service => service.category === category);
    setServicesFilteredByCategory(filteredServicesArray)
  }

  return (
    <div className="main-container">
      <ul>
        <li>
          <Link exact activeClassName="active" to="/construction-services">
            <div className="box" onClick={(e) => filterByCategory(e, "Usługi budowlane")}>
              Budownictwo
            </div>
          </Link>
        </li>
        <li>
          <Link exact activeClassName="active" to="/hydraulic-services">
            <div className="box" onClick={(e) => filterByCategory(e, "Usługi hydrauliczne")}>
              Hydraulika
            </div>
          </Link>
        </li>
        <li>
          <Link exact activeClassName="active" to="/electrical-services">
            <div className="box" onClick={(e) => filterByCategory(e, "Usługi elektryczne")}>
              Elektryka
            </div>
          </Link>
        </li>
        <li>
          <Link exact activeClassName="active" to="/finishing-services">
            <div className="box"  onClick={(e) => filterByCategory(e, "Usługi wykończeniowe")}>
              Wykończenia
            </div>
          </Link>
        </li>
      </ul>
      <ul>
        <li>
          <Link exact activeClassName="active" to="/carpentry-services">
            <div className="box" onClick={(e) => filterByCategory(e, "Usługi stolarskie")}>
              Stolarstwo
            </div>
          </Link>
        </li>
        <li>
          <Link exact activeClassName="active" to="/architecture-services">
            <div className="box" onClick={(e) => filterByCategory(e, "Usługi architektoniczne")}>
              Architektura
            </div>
          </Link>
        </li>
        <li>
          <Link exact activeClassName="active" to="/cleaning-services">
            <div className="box" onClick={(e) => filterByCategory(e, "Usługi sprzątające")}>
              Sprzątanie
            </div>
          </Link>
        </li>
        <li>
          <Link exact activeClassName="active" to="/painting-services">
            <div className="box" onClick={(e) => filterByCategory(e, "Usługi malarskie")}>
              Malarstwo
            </div>
          </Link>
        </li>
      </ul>
      <ul>
      <li>
          <Link exact activeClassName="active" to="/transport-services">
            <div className="box" onClick={(e) => filterByCategory(e, "Usługi transportowe")}>
              Transport
            </div>
          </Link>
        </li>
        <li>
          <Link exact activeClassName="active" to="/it-services">
            <div className="box" onClick={(e) => filterByCategory(e, "Usługi informatyczne")}>
              Informatyka
            </div>
          </Link>
        </li>
        <li>
          <Link exact activeClassName="active" to="/chimney-services">
            <div className="box" onClick={(e) => filterByCategory(e, "Usługi kominiarskie")}>
              Kominiarstwo
            </div>
          </Link>
        </li>
        <li>
          <Link exact activeClassName="active" to="/all-services">
            <div className="box1">
              Wszystkie
            </div>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default LandingPage;
