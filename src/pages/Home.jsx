export default function Home() {
    const services = ["Paving", "Fences", "Paths", "Planting", "Decking", "Walls", "Lighting", "Hedges", "And more..."]

    return (
    <>
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
                        <picture className="hero-background-image"><img src="./front-image2.jpg"/></picture>
                        <div className="hero-overlay">
                        <h2>Sheffield Landscaping <br></br> example@email.com or 0123456789</h2>
                        </div>
                    </section>
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
            </div>
    </>
    )
  }
  