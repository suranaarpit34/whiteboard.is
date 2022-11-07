import React from "react";
import "./Services.css";
const Services = () => {
  return (
    <>
      <section className="services-section">
        <div className="services-ourServices">
          <div>OUR SERVICES</div>
          <h3>
            Across all facets of the internet — apps, websites, branding,
            automation, and advertising — our team helps you lead digital
            transformation, end-to-end.
          </h3>
        </div>
        <div className="services-cards-wrapper">
          <div className="services-cards-col">
            <div>
              <div className="ratio_100">
                <img
                  src="https://assets-global.website-files.com/6000971fd4b15ef62b9f6412/60f83f9e4a8c57392c8a72df_servies-img__digital-products-p-800.jpeg"
                  alt="services-card-img"
                  className="image-cover"
                />
              </div>
            <div className="mt-24">
              <h2>We design your brand’s most compelling story.</h2>
              <p>
                We connect your vision and audience, design your visual
                identity, and articulate a whole brand system.
              </p>
              <div className="typeForm-embed">
                <a href="#">BUILD A BRAND &rarr;</a>
              </div>
            </div>
            </div>
            <div className="mt-120">
                <div className="ratio_100">
                    <img src="https://assets-global.website-files.com/6000971fd4b15ef62b9f6412/60f83f9c5be113e624335278_servies-img__digital-experiences-p-800.jpeg" alt="services-card-img" className="image-cover origin-right" />
                </div>
                <div className="mt-24">
                    
                </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
