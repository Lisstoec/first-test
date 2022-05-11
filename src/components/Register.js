import React, { useContext, useState } from "react";
import ReactDOM from "react-dom";
import { AuthContext } from "../context/AuthContext";
import "../register.css";

export default function Register() {

  // States for registration
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');

  // States for checking the errors
  const [submitted, setSubmitted] = useState(false);
  const [errorMessages, setErrorMessages] = useState({});
  
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
    uname: "Benutzername ist bereits vergeben",
  };
 
  // Handling the form submission
  const handleSubmit = (e) => {
    //Prevent page reload
    e.preventDefault();

    var { uname, pass } = document.forms[0];

    // Find user login info
    const userData = database.find((user) => user.username === uname.value);
    console.log(database.find((user) => user.username === uname.value));

    // Compare user info
    if (userData) {
      // Username found
      // console.log()
      setErrorMessages({ name: "uname", message: errors.uname });
    } else {
      // Username not found
      // console.log()
      setSubmitted(true);
      setErrorMessages(false);    
    } 
  
  /*  if (name === '' || password === '') {
      setErrorMessages(true);
    } else {
      setSubmitted(true);
      setErrorMessages(false);
    } */
  };

     // Handling the name change
     const handleName = (e) => {
      setName(e.target.value);
      setSubmitted(false);
    };
   
    // Handling the password change
    const handlePassword = (e) => {
      setPassword(e.target.value);
      setSubmitted(false);
    }; 

  // Generate JSX code for error message
  const renderErrorMessage = (name) =>
  name === errorMessages.name && (
    <div className="error">{errorMessages.message}</div>
  );

  const { setAuthToken } = useContext(AuthContext);

  // JSX code for register form
  const renderForm = (       
    <div className="form">
      <form onSubmit={handleSubmit}>
          <div className="input-container">
            <label>Benutzername</label>
            <input type="text" name="uname" onChange={handleName} 
            value={name} required />
            {renderErrorMessage("uname")}
          </div>
          <div className="input-container">
            <label>Passwort</label>
            <input type="password" name="pass" onChange={handlePassword} 
            value={password} required />
          </div>
          <div className="button-container">
          <input type="submit" />
          { /* FIXME: Example usage of AuthToken */}
          <button onClick={() => setAuthToken("Hello")}>Set Context</button>
          <button onClick={() => setAuthToken(null)}>Unset Context</button>
          </div>
        </form>
      </div>
  );

  return (
    <div className="app">
        <div className="register-form">
          <div className="title">Registrieren</div>
          {submitted ? <div>Benutzer {name} wurde erfolgreich registriert.</div> : renderForm}
        </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<Register />, rootElement);