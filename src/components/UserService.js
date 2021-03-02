import "./../styles/UserService.css";
import firebase from "./../firebase/config.js";
import { Link, useRouteMatch } from "react-router-dom";

function UserService({userService, setDummyVariable}) {

  const { url } = useRouteMatch();

  const deleteService = () => {
    console.log(userService.id)
    firebase
    .firestore()
    .collection("services")
    .doc(userService.id)
    .delete()
    .then(() => {
        setDummyVariable(userService.id)
        alert("Dokument został pomyślnie usunięty");
      }).catch((error) => {
        alert("Błąd podczas usuwania dokumentu: ", error);
      });
    }

  return (
    <div class="user-service">
        <div class="data">
            <p><b>Tytuł: </b>{userService.title}</p>
            <p><b>Kategoria: </b>{userService.category}</p>
            <p><b>Data dodania: </b>{userService.date}</p>
        </div>
        <div class="buttons">
          <Link className="custom-link" to={`${url}/${userService.title}`}>
            <button className="btn blue">MODYFIKUJ</button>
          </Link>
          <Link className="custom-link" to="/">
            <button className="btn red" onClick={deleteService}>USUŃ</button>
          </Link>
        </div>
    </div>
  );
}

export default UserService;
