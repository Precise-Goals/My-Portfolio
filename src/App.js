import React, { Suspense } from "react";
import { Navbar } from "./Components";
import "./App.css";
import "./fonts.css";

const Header = React.lazy(() => import("./containers/header/Header"));
const About = React.lazy(() => import("./containers/about/About"));
const Work = React.lazy(() => import("./containers/Work/Work"));
const Reviews = React.lazy(() => import("./containers/Reviews/Reviews"));
const Footer = React.lazy(() => import("./containers/footer/Footer") )


const App = () => {
  return (
    <div className="App">
      <div className="gradient__bg">
        {/* Starting of the Navbar */}
        <Navbar />
        {/* Starting of the header */}
        <Suspense fallback={<div>Loading...</div>}>
          <Header />
        </Suspense>
      </div>
      {/* My about and past history */}
      <Suspense fallback={<div>Loading...</div>}>
        <About />
      </Suspense>
      {/* My work fields and spaces */}
      <Suspense fallback={<div>Loading...</div>}>
        <Work />
      </Suspense>
      {/* My reviews and blogs(if any) */}
      <Suspense fallback={<div>Loading...</div>}>
        <Reviews />
      </Suspense>
      {/* Footer Section */}
      <Footer />
      {/* Made by Precise Goals  */}
    </div>
  );
};

export default App;
