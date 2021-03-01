import "./../styles/UserPanel.css"
import { Link, useRouteMatch, Switch, Route } from "react-router-dom";
import UserService from "./UserService"

function UserPanel({serviceList, userLogInState, setDummyVariable}) {

  const userServiceList = serviceList.filter((service) => {
    return service.user === userLogInState;
  })

  return (
    <div class="user-panel">
      {userServiceList.map((userService) => {
          return (
            <UserService userService={userService} setDummyVariable={setDummyVariable}/>
          );
        })}
      <Link to="/">
        <button className="panel-button">POWRÓT ⇦</button>
      </Link>
    </div>
  );
}

export default UserPanel;
