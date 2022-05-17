import React, { useState } from "react";
import About from "./components/About";
import Nav from "./components/Nav";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import Resume from "./components/Resume";
import "./App.css";
// import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  // const page = "Contact";
  const [page, setPage] = useState("About");

  const render = () => {
    if (page == "About") {
      return <About></About>;
    } else if (page == "Contact") {
      return <Contact></Contact>;
    } else if (page == "Projects") {
      return <Projects></Projects>;
    } else {
      return <Resume></Resume>;
    }
  };

  return (
    <div>
      {/* <button
        onClick={() => {
          setPage("Contact");
        }}
      >
        click here
      </button> */}
      <Nav setPage={setPage}></Nav>
      <main>{render()}</main>
    </div>
  );
}

export default App;

// change
