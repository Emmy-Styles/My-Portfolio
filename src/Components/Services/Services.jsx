import React from "react";
import "./services.css";
import { BiCheck } from "react-icons/bi";

const Services = () => {
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Services</h2>
      <div className="container services__container">
        {/* <article className="service">
          <div className="service__head">
            <h3>UI/UX Design</h3>
          </div>

          <ul className="service__list">
            <li>
              < BiCheck className='service__list-icon' />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              < BiCheck className='service__list-icon' />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              < BiCheck className='service__list-icon' />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              < BiCheck className='service__list-icon' />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              < BiCheck className='service__list-icon' />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              < BiCheck className='service__list-icon' />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
          </ul>
        </article> */}
        {/* END OF UI/UX */}

        <article className="service">
          <div className="service__head">
            <h3>Web Development</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Build UI components for single and multi-page
                applications.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Develop and maintain efficient and testable code base.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Integrate data from various backend services and databases.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Set up automated Continuous deployment and integration pipelines
                with GitHub Actions.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Efficiently deploy and integrate software solutions to modern
                cloud environments such as Azure, Google Cloud and AWS.
              </p>
            </li>
          </ul>
        </article>
        {/* END OF WEB DEVELOPMENT  */}
      </div>
    </section>
  );
};

export default Services;
