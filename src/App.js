import React from "react";
import Navbar from "./components/Navbar.js";
import Section1 from "./components/Herosection.js";
import Section2 from "./components/Aboutus.js";
import Section3 from "./components/Contact.js";
const App = () => {
  return (
    <div>
      <Navbar />
      <Section1 />
      <Section2 />
      <Section3 />
    </div>
  );
};

export default App;
