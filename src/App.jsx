import { Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import Services from "./pages/Services";
import About from "./pages/About";
import FAQ from "./pages/FAQ";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import "./App.css"
import { useState } from "react";
function App() {

  const [clicked, setClicked] = useState(false)

  const services = ["Paving", "Fences", "Paths", "Planting", "Decking", "Retaining walls", "Lighting", "Hedges", "And more..."]

  return (
    <>
      <div className="frontpage-container">
            <div className="header-container">
                <nav className="header-menu">
                    <div className="header-items">
                        <div className="desktop-nav-container">
                            <div className="desktop-nav-logo-and-links">
                                <div className="logo">Sheffield Landscaping</div>
                            </div>
                            <div>
                            <ul className="desktop-navlinks">
                                    <li><a>Services</a></li>
                                    <li><a>About</a></li>
                                    <li><a>FAQ</a></li>
                                    <li><a>example@email.com or 0123456789</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="mobile-nav-container">
                            <div className="mobile-nav-left">
                              <div>Sheffield Landscaping</div>
                            </div>
                            <div className="mobile-nav-right">
                              <button onClick={() => setClicked(!clicked)} className="mobile-nav-menu-button Button_icon">
                                <div className="MenuIcon_menuIcon">
                                  <span className="MenuIcon_bar"></span>
                                  <span className="MenuIcon_bar"></span>
                                  <span className="MenuIcon_bar"></span>
                                </div>
                              </button>
                            </div>
                            <div className={`drawer`}>
                              <nav id="drawer-container" className={`${clicked ? "menu-drawer drawer-checked" : "menu-drawer drawer-container"}`}>
                                <ul>
                                <li><a>Services</a></li>
                                <li><a>About</a></li>
                                <li><a>FAQ</a></li>
                                <li><a>example@email.com or 0123456789</a></li>
                                </ul>
                              </nav>
                            
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
            <div className="homepage-container">
                <div className="desktop-container">
                    <div className="background-picture">
                    <h2>Sheffield Landscaping <br></br> example@email.com or 0123456789</h2>
                        <picture className="image-panel-picture">
                            <img src="./garden.jpg"/>
                        </picture>
                    </div>
                    <div className="services-summary-container">
                    <div className="services-summary">
                      {services.map((service, index) => {
                        return (<h2 className="service-box" key={index}>{service}</h2>)
                      })}
                    </div>

                    </div>
                    <div className="decription-container">
                      We have over 3 years of experience designing the finest gardens at a great price. Based in Sheffield, professional, friendly, and able to carry out a wide variety of landscaping services. If you're unsure, give us a call on 0123456789 for a free quote.
                    </div>
                </div>
                <div className="mobile-container">
                    <section className="hero-container">
                        <picture className="hero-background-image"><img src="./garden.jpg"/></picture>
                        <div className="hero-overlay">
                        <h2>Sheffield Landscaping <br></br> example@email.com or 0123456789</h2>
                        </div>
                    </section>
                </div>
            </div>
            <footer>
              <div>
                <div>
                  <div>Sheffield Landscaping</div>
                  <div>0123456789</div>
                  <div>example@email.com</div>
                </div>
                <div>
                  <div>See more examples of our work:</div>
                  <div className="social-link"><a href="" target="_blank">Instagram</a></div>
                  <div className="social-link"><a href="" target="_blank">Facebook</a></div>
                </div>
              </div>

            </footer>
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
