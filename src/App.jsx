import { Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import Services from "./pages/Services";
import About from "./pages/About";
import FAQ from "./pages/FAQ";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import "./App.css"
import { useState } from "react";
import { Footer } from "./components/Footer";
function App() {

  return (
    <>
      <div className="frontpage-container">
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/services" element={<Services />} />
              <Route path="/about" element={<About />} />
              <Route path="/faq" element={<FAQ />} />
            </Routes>
            <Footer />
        </div>
      {/* <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div> */}
    </>
  );
}

export default App;
