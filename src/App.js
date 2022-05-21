import "./App.css";
import React, { useState } from "react";

function App() {
  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });
  console.log(values);

  const [submitted, setSubmitted] = useState(false);

  const handleFirstName = (e) => {
    setValues({ ...values, firstName: e.target.value });
  };

  const handLelastName = (e) => {
    setValues({ ...values, lastName: e.target.value });
  };

  const handLeEmailName = (e) => {
    setValues({ ...values, email: e.target.value });
  };
  console.log(setValues);

  const handleRegister = (e) => {
    e.preventDefault();
    if (values.firstName && values.lastName && values.email) {
      setSubmitted(true);
    }
  };
  return (
    <div class="form-container">
      {submitted ? (
        <div className="success-message">success!Thank you</div>
      ) : null}

      <form class="register-form">
        {/* Uncomment the next line to show the success message */}
        {/* <div class="success-message">Success! Thank you for registering</div> */}
        <input
          id="first-name"
          class="form-field"
          type="text"
          onChange={handleFirstName}
          value={values.firstName}
          placeholder="First Name"
        />
        {!values.firstName ? <span>Please Enter a firstName</span> : null}
        {/* Uncomment the next line to show the error message */}
        {/* <span id="first-name-error">Please enter a first name</span> */}
        <input
          id="last-name"
          class="form-field"
          type="text"
          onChange={handLelastName}
          value={values.lastName}
          placeholder="Last Name"
        />
        {!values.lastName ? <span>Please Enter a lasrName</span> : null}
        {/* Uncomment the next line to show the error message */}
        {/* <span id="last-name-error">Please enter a last name</span> */}
        <input
          id="email"
          class="form-field"
          type="text"
          onChange={handLeEmailName}
          value={values.email}
          placeholder="Email"
        />
        {!values.email ? <span>Please Enter a email id</span> : null}
        {/* Uncomment the next line to show the error message */}
        {/* <span id="email-error">Please enter an email address</span> */}
        <button onClick={handleRegister} class="form-field" type="submit">
          Register
        </button>
      </form>
    </div>
  );
}

export default App;
