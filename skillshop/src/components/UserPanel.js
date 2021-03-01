import "./../styles/UserPanel.css"
import UserService from "./UserService"


function UserPanel({serviceList, userLogInState}) {

  const userServiceList = serviceList.filter((service) => {
    return service.user === userLogInState;
  })

  return (
    <div class="user-panel">
      {userServiceList.map((userService) => {
          return (
            <UserService userService={userService}/>
          );
        })}
    </div>
  );
}

export default UserPanel;
