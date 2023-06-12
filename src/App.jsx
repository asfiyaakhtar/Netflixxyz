import React from "react";
import Footer from "./Component/Footer";
import Hero from "./Component/Hero";
import Feature1 from "./Component/Feature1";
import Feature2 from "./Component/Feature2";
import Feature3 from "./Component/Feature3";
import Feature4 from "./Component/Feature4";
import Accordion from "./Component/Accordion";

import "./App.css";

function App() {
  return (
    <div className="body">
      <Hero />
      <Feature1 />
      <Feature2 />
      <Feature3 />
      <Feature4 />
      <Accordion />
      <Footer />
    </div>
  );
}

export default App;
