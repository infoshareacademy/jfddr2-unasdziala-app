import "./../styles/LandingPage.css";
import { Link } from "react-router-dom";
import { categories } from "../helpers/categories";

const LandingPage = ({ serviceList, setServicesFilteredByCategory }) => {
  
  const filterByCategory = (e, category) => {
    let filteredServicesArray = [];
    filteredServicesArray = serviceList.filter(
      (service) => service.category === category
    );
    setServicesFilteredByCategory(filteredServicesArray);
  };

  return (
    <div className="container">
    <div className="container-wrap">
      {categories.map(category =>{
        return(
            <Link className="link" exact activeClassName="active" to={category.path}>
            <div
              className="box"
              onClick={(e) => filterByCategory(e, category.filter)}
            >
              {category.name}
            </div>
          </Link>
        )
      })}
      <Link className="link" exact activeClassName="active" to="/all-services">
        <div className="box1">Wszystkie</div>
      </Link>
    </div>

    </div>
  );
};

export default LandingPage;
