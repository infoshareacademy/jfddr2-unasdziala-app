import "./../styles/LandingPage.css";
import { Link } from "react-router-dom";
import Service from "./Service";
import ServicesList from "./ServicesList";

const LandingPage = ({ serviceList, setServicesFilteredByCategory }) => {
  // console.log(serviceList);

  console.log(serviceList)

  const filterByCategory = (e, category) => {
    let filteredServicesArray = [];
    filteredServicesArray = serviceList.filter(service => service.category === category);
    // console.log(filteredServicesArray)
    setServicesFilteredByCategory(filteredServicesArray)
    // setServiceList(filteredServicesArray);
  }

  return (
    <div className="containers">
    <ul>
      <li>
        <Link exact activeClassName="active" to="/construction-works">
          <div className="box1" onClick={(e) => filterByCategory(e, "Usługi budowlane")}>
            Budownictwo
          </div>
        </Link>
      </li>

      <li>
        <Link exact activeClassName="active" to="/hydraulic-works">
          <div className="box2" onClick={(e) => filterByCategory(e, "Usługi hydrauliczne")}>
            Hydraulika
          </div>
        </Link>
      </li>

      <li>
        <Link exact activeClassName="active" to="/electrical-works">
          <div className="box3" onClick={(e) => filterByCategory(e, "Usługi elektryczne")}>
            Elektryka
          </div>
        </Link>
      </li>

      <li>
        <Link exact activeClassName="active" to="/all-works">
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
