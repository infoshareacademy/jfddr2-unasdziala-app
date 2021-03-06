import firebase from "./../firebase/config.js";
import "./../styles/SignUpUser.css";

import { Link } from "react-router-dom";
import { useState } from "react";

const SignUpUser = () => {
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });

  const updateField = (e) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value,
    });
  };

  const signUpUser = () => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(credentials.email, credentials.password)
      .then((cred) => {
        console.log(cred);
        firebase.auth().signOut();
        alert("Rejestracja zakończona sukcesem");
      })
      .catch((reason) => {
        alert(reason.message);
      });
  };

  return (
    <div className="sign-up-user">
      <h1>Rejestracja</h1>
      <br/>
      <form className="credentials">
        <label>
          Email:&nbsp;&nbsp;
          <input
            type="email"
            id="email"
            name="email"
            onChange={updateField}
            required
          />
        </label>
        &nbsp;
        <label>
          Hasło:&nbsp;&nbsp;
          <input
            type="password"
            id="password"
            name="password"
            onChange={updateField}
            required
          />
        </label>
      </form>
      &nbsp;
      <div className="btn-container">
        <Link className="custom-link" to="/">
          <button className="add-button green" onClick={signUpUser}>
            REJESTRACJA
          </button>
        </Link>
        <Link className="custom-link" to="/">
          <button className="add-button red">ANULUJ</button>
        </Link>
      </div>
    </div>
  );
};

export default SignUpUser;
