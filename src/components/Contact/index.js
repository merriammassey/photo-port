import React, { useState } from "react";

function ContactForm() {
  //initialize the values of the state, clearing input fields and setting intial state to empty strings
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const { name, email, message } = formState;
  //sync the internal state of the component formState with the user input from the DOM
  //onChange event listener will ensure that the handleChange function fires whenever a keystroke is typed into the input field
  function handleChange(e) {
    //updated from setFormState({ ...formState, name: e.target.value });
    //to include all property names of formState(name, email, and message) and use [] to create dynamic property names
    setFormState({ ...formState, [e.target.name]: e.target.value });
  }

  //console.log(formState);
  return (
    <section>
      <h1>Contact me</h1>
      <form id="contact-form">
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            name="name"
            defaultValue={name}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="email">Email address:</label>
          <input
            type="email"
            name="email"
            defaultValue={email}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="message">Message:</label>
          <textarea
            name="message"
            rows="5"
            defaultValue={message}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </section>
  );
}

export default ContactForm;
