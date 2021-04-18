import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext } from "react";
import { useHistory, useLocation } from "react-router";
import { userContext } from "../../App";
import firebaseConfig from "./firebase.config";
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
} else {
  firebase.app();
}
const Login = () => {
  const [loggedInUser, setLoggedInUser] = useContext(userContext);
  const googleProvider = new firebase.auth.GoogleAuthProvider();
  const history = useHistory();
  const location = useLocation();
  let { from } = location.state || { from: { pathname: "/" } };

  const handelLoginBtn = () => {
    firebase
      .auth()
      .signInWithPopup(googleProvider)
      .then((result) => {
        const { displayName, email, photoURL } = result.user;
        const signedInUser = { name: displayName, email, photoURL };
        setLoggedInUser(signedInUser);
        history.replace(from);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  return (
    <div>
      <div className="mt-5" style={{ textAlign: "center" }}>
        <h1>Login With Google</h1>
        <button
          onClick={handelLoginBtn}
          style={{ fontSize: "25px", padding: "10px", fontWeight: "600" }}
          className="btn btn-dark mt-5 px-4"
        >
          <FontAwesomeIcon className="mr-3" icon={faGoogle} /> Continue with
          Google
        </button>
      </div>
    </div>
  );
};

export default Login;
