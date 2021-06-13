import React, { useEffect } from "react";
import { capitalizeFirstLetter } from "../../utils/helpers";

//updated to add props after categories and useState moved up to app.js
function Nav(props) {
  /* const [currentCategory, setCurrentCategory] = useState(categories[0]);
  //initialize category state as array of objects
  //use an array inside useState instead of just an array so categories can be updated in future
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
  ]); */

  //destructuring props
  //updated on 20.4.6. to deconstruct contactSelected and setContactSelected from props
  const {
    categories = [],
    setCurrentCategory,
    currentCategory,
    contactSelected,
    setContactSelected,
  } = props;

  //use useEffect hook to trigger rerender and update the brower tab to reflect category selection
  useEffect(() => {
    document.title = capitalizeFirstLetter(currentCategory.name);
  }, [currentCategory]); //dependency array, triggers rerender on change

  return (
    <header className="flex-row px-1">
      <h2>
        <a data-testid="link" href="/">
          <span role="img" aria-label="camera">
            {" "}
            📸
          </span>{" "}
          Oh Snap!
        </a>
      </h2>
      <nav>
        <ul className="flex-row">
          <li className="mx-2">
            <a
              data-testid="about"
              href="#about"
              // updated to add click handler to selectively render contact form
              //when about is selected, contactSelected is false
              onClick={() => setContactSelected(false)}
            >
              About me
            </a>
          </li>
          {/* updated to add conditional styling that indicates current active item */}
          <li className={`mx-2 ${contactSelected && "navActive"}`}>
            {/* updated with click handler */}
            <span onClick={() => setContactSelected(true)}>Contact</span>{" "}
          </li>
          {categories.map((category) => (
            <li
              className={`mx-1 ${
                // updated with conditional for contactSelected..navActive only assigned if Contact isn't selected and current category is selected
                currentCategory.name === category.name &&
                !contactSelected &&
                "navActive"
              }`}
              key={category.name}
            >
              <span
                onClick={() => {
                  setCurrentCategory(category);
                  // updated with contactSelected condition
                  setContactSelected(false);
                }}
              >
                {capitalizeFirstLetter(category.name)}
              </span>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Nav;
