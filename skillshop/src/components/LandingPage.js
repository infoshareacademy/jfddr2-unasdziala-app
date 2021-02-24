import "./../styles/LandingPage.css";
import { Link } from "react-router-dom";
import Service from "./Service";
import ServicesList from "./ServicesList";

const LandingPage = ({ serviceList, setServiceList }) => {
  // console.log(serviceList);

  console.log(serviceList)

  const filterConstruction = (e, category) => {
    let filteredServicesArray = [];
    filteredServicesArray = serviceList.filter(service => service.category === category);
    console.log(filteredServicesArray)
    // setServiceList(filteredServicesArray);
  }

  return (
    <div className="containers">
    <ul>
      <li>
        <Link exact activeClassName="active" to="/construction-works">
          <div className="box1" onClick={(e) => filterConstruction(e, "Usługi budowlane")}>
            Budowa
          </div>
        </Link>
      </li>

      <li>
        <Link exact activeClassName="active" to="/finishing-works">
          <div className="box2">
            Wykonczenie
          </div>
        </Link>
      </li>

      <li>
        <Link exact activeClassName="active" to="/electrical-works">
          <div className="box3">
            Elektryka
          </div>
        </Link>
      </li>

      <li>
        <Link exact activeClassName="active" to="/electrical-works222">
          <div className="box4">
            Wszystkie
          </div>
        </Link>
      </li>
    
    </ul>
    </div>
  );
};

export default LandingPage;
