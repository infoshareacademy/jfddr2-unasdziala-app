import "./../styles/UserPanel.css";
import { Link, useRouteMatch, Switch, Route } from "react-router-dom";
import UserService from "./UserService.js";
import ModifyService from "./ModifyService.js";

function UserPanel({ serviceList, userLogInState, setDummyVariable }) {
  const { path } = useRouteMatch();

  const userServiceList = serviceList.filter((service) => {
    return service.user === userLogInState;
  });

  return (
    <div className="user-panel">
      <Switch>
        <Route exact path={path}>
          <h1>LISTA DODANYCH PRZEZ CIEBIE OGŁOSZEŃ: </h1>
          {userServiceList.map((userService) => {
            return (
              <UserService
                key={userService.id}
                userService={userService}
                setDummyVariable={setDummyVariable}
              />
            );
          })}
          <Link to="/">
            <button className="panel-button">POWRÓT ⇦</button>
          </Link>
        </Route>
        <Route path={`${path}/:userServiceTitle`}>
          <ModifyService
            setDummyVariable={setDummyVariable}
            userLogInState={userLogInState}
            userServiceList={userServiceList}
          />
        </Route>
      </Switch>
    </div>
  );
}

export default UserPanel;
