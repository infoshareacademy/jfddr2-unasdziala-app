import "./../styles/UserService.css"

function UserService({userService}) {

  return (
    <div class="user-service">
        <div class="data">
            <p><b>Tytuł: </b>{userService.title}</p>
            <p><b>Kategoria: </b>{userService.category}</p>
            <p><b>Data dodania: </b>{userService.date}</p>
        </div>
        <div class="buttons">
            <button>MODYFIKUJ</button>
            <button>USUŃ</button>
        </div>
    </div>
  );
}

export default UserService;
