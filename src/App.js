import React from "react";
import { Work, Footer, About, Header, Reviews } from "./containers";
import { Navbar } from "./Components";
import "./App.css";
import "./fonts.css";
const App = () => {
  return (
    <div className="App">
      <div className="gradient__bg">
        {/* Starting of the Navbar */}
        <Navbar />
        {/* Starting of the header */}
        <Header />
      </div>
      {/* My about and past history */}
      <About />
      {/* My work fields and spaces */}
      <Work />
      {/* My reviews and blogs(if any) */}
      <Reviews />
      {/* Footer Section */}
      <Footer />
      {/* Made by Precise Goals  */}
    </div>
  );
};

export default App;
