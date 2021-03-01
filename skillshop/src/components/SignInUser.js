import firebase from "./../firebase/config.js";
import "./../styles/SignUpUser.css";

import { Link } from "react-router-dom";
import { useState } from "react";

const SignInUser = ({setUserLogInState }) => {

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

    const signInUser = () => {
        firebase
		.auth()
		.signInWithEmailAndPassword(credentials.email, credentials.password)
		.then((cred) => {
            console.log(cred);
            setUserLogInState(credentials.email)
		})
		.catch((reason) => {
			alert(reason.message);
		});
    };

    return (
        <div className="sign-up-user">
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
            <div class="btn-container">
                <Link to="/">
                    <button className="add-button green" onClick={signInUser}>LOGOWANIE</button>
                </Link>
                <Link to="/">
                    <button className="add-button red">ANULUJ</button>
                </Link>
            </div>

        </div>
    );
};

export default SignInUser;
