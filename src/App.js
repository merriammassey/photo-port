//import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";
import About from "./components/About";
import Nav from "./components/Nav";
import Gallery from "./components/Gallery";
import ContactForm from "./components/Contact";

function App() {
  //set initial value of contactSelected to false to prevent contact form from rendering on the homepage
  const [contactSelected, setContactSelected] = useState(false);
  //moved categories/state up so it can be used in multiple siblings i.e. Nav and Gallery
  const [categories] = useState([
    {
      name: "commercial",
      description:
        "Photos of grocery stores, food trucks, and other commercial projects",
    },
    { name: "portraits", description: "Portraits of people in my life" },
    { name: "food", description: "Delicious delicacies" },
    {
      name: "landscape",
      description: "Fields, farmhouses, waterfalls, and the beauty of nature",
    },
  ]);
  //setting default category and defining currentCategory
  const [currentCategory, setCurrentCategory] = useState(categories[0]);

  return (
    <div>
      {/* Updated to include contactSelected value as a prop for conditional rendering */}
      {/* <Nav
        categories={categories}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}
      ></Nav> */}
      {/* pass getter and setter functions into Nav component to allow it to modify state  */}
      <Nav
        categories={categories}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}
        contactSelected={contactSelected}
        setContactSelected={setContactSelected}
      ></Nav>
      <main>
        {/* Below components edited to allow selective rendering
        <ContactForm></ContactForm>
        <Gallery currentCategory={currentCategory}></Gallery>
        <About></About> */}
        {/* if contact is not selected, render about and gallery otherwise render contact */}
        {!contactSelected ? (
          <>
            <Gallery currentCategory={currentCategory}></Gallery>
            <About></About>
          </>
        ) : (
          <ContactForm></ContactForm>
        )}
      </main>
    </div>
  );
}

export default App;
