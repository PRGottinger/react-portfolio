import React from "react";
import coverImage from "../../assets/keyboard.jpg";
// import { Navbar } from "react-bootstrap";

function Nav(props) {
//   const categories = [
//     {
//       name: "Projects",
//       description:
//         "Links to my Github Repositories containing my Development projects",
//     },
//     { name: "Resume", description: "My Resume" },
//   ];

//   function categorySelected(name) {
//     console.log(`${name} clicked`);
//   }

  return (
    <header>
      <h2>
        <a href="/">💻 Paul's Web Development Portfolio!</a>
      </h2>
      <nav>
        <ul className="flex-row">
          <li
            onClick={() => {
              props.setPage("About");
            }}
            className="mx-2"
          >
            <a href="#about">About me</a>
          </li>
          <li
            onClick={() => {
              props.setPage("Contact");
            }}
            className="mx-2"
          >
            <span>Contact</span>
          </li>
          <li
            onClick={() => {
              props.setPage("Projects");
            }}
            className="mx-2"
          >
            <span>Projects</span>
          </li>

          <li
            onClick={() => {
              props.setPage("Resume");
            }}
            className="mx-2"
          >
            <span>Resume</span>
          </li>
          {/* { {categories.map((category) => (
            <li className="mx-1" key={category.name}>
              <span onClick={() => categorySelected(category.name)}>
                {category.name}
              </span> }
            { </li>
          ))} */}
        </ul>
      </nav>
    </header>
  );
}

export default Nav;
