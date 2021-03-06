import React, { useContext, useState } from "react";
import ReactDOM from "react-dom";
import { AuthContext } from "../context/AuthContext";
import "../styles.css";

export default function Login() {
  
  // React States
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  // User Login info
  const database = [
    {
      username: "user1",
      password: "pass1"
    },
    {
      username: "user2",
      password: "pass2"
    }
  ];

  const errors = {
    uname: "Ungültiger Benutzername",
    pass: "Ungültiges Passwort"
  };

  // Handling the form submission
  const handleSubmit = (event) => {
    //Prevent page reload
    event.preventDefault();

    var { uname, pass } = document.forms[0];

    // Find user login info
    const userData = database.find((user) => user.username === uname.value);

    // Compare user info
    if (userData) {
      if (userData.password !== pass.value) {
        // Invalid password
        console.log(userData.password)
        setErrorMessages({ name: "pass", message: errors.pass });
      } else {
        setIsSubmitted(true);
      }
    } else {
      // Username not found
      setErrorMessages({ name: "uname", message: errors.uname });
    }
  };

  // Generate JSX code for error message
  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );

  // JSX code for login form
  const renderForm = (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <label>Benutzername </label>
          <input type="text" name="uname" required />
          {renderErrorMessage("uname")}
        </div>
        <div className="input-container">
          <label>Passwort </label>
          <input type="password" name="pass" required />
          {renderErrorMessage("pass")}
        </div>
        <div className="button-container">
          <input type="submit" />
        </div>
      </form>
    </div>
  );

  const { authToken } = useContext(AuthContext);

  return (
    <div className="app">
      <div className="login-form">
        { /* FIXME: example usage of AuthContext */}
        <div className="title">Anmelden &nbsp; {authToken}</div>
        {isSubmitted ? <div>Benutzer wurde erfolgreich angemeldet.</div> : renderForm}
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<Login />, rootElement);

