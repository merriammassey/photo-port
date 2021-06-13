import React, { useState } from "react";
import { validateEmail } from "../../utils/helpers";

function ContactForm() {
  //declare error handling functions with useState hook
  const [errorMessage, setErrorMessage] = useState("");

  //initialize the values of the state, clearing input fields and setting intial state to empty strings
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const { name, email, message } = formState;
  //sync the internal state of the component formState with the user input from the DOM
  //onChange event listener will ensure that the handleChange function fires whenever a keystroke is typed into the input field
  //onChange changed to onBlur to allow the user to finish typing and change focus from the field before error is rendered
  function handleChange(e) {
    //validate email and other inputs using utility function
    //if input is email, validate and assign function return to isValid
    //use with error message useState const above
    const isValid = validateEmail(e.target.value);

    if (e.target.name === "email") {
      console.log(isValid);
    } else {
      if (!e.target.value.length) {
        setErrorMessage(`${e.target.name} is required.`);
      } else {
        setErrorMessage("");
      }
      console.log("errorMessage", errorMessage);
    }
    // isValid conditional statement
    //assign error message based on isValid value
    if (!isValid) {
      setErrorMessage("Your email is invalid.");
    } else {
      setErrorMessage("");
    }
    //updated from setFormState({ ...formState, name: e.target.value });
    //to include all property names of formState(name, email, and message) and use [] to create dynamic property names
    setFormState({ ...formState, [e.target.name]: e.target.value });
    //wrap setter function in conditional so it only updates if the form data has passed quality tests
    if (!errorMessage) {
      setFormState({ ...formState, [e.target.name]: e.target.value });
    }
  }

  //console.log(formState);

  function handleSubmit(e) {
    e.preventDefault();
    console.log(formState);
  }
  return (
    <section>
      <h1>Contact me</h1>
      <form id="contact-form" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            name="name"
            defaultValue={name}
            onBlur={handleChange}
          />
        </div>
        <div>
          <label htmlFor="email">Email address:</label>
          <input
            type="email"
            name="email"
            defaultValue={email}
            onBlur={handleChange}
          />
        </div>
        <div>
          <label htmlFor="message">Message:</label>
          <textarea
            name="message"
            rows="5"
            defaultValue={message}
            onBlur={handleChange}
          />
        </div>
        {/* conditionally render validation error to UI */}
        {errorMessage && (
          <div>
            <p className="error-text">{errorMessage}</p>
          </div>
        )}
        <button type="submit">Submit</button>
      </form>
    </section>
  );
}

export default ContactForm;
