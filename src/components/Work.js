import React from "react";

import Box from "../img/logoBox.svg";
import SectionTitle from "./SectionTitle";

const Work = () => {
  return (
    <>
      <section
        id="projects"
        className="portfolio__section portfolio__section--work portfolio__section--work--top"
      >
        <SectionTitle text={"Projects"} comment={""} />

        <div className="u-divider--v"></div>

        <div className="work__job">
          <h4>Movietime</h4>

          <p className="work__text">
            Ongoing MERN stack project that is expanding my knowledge of Node.js
            and Redux while being also showcasing my growing skillset. Currently
            users can search movies and tv titles that they can save and rate.
            More features will be added soon as I explore the Movie Database
            API.
          </p>

          <a
            className="btn btn--work"
            href="https://movietime219.herokuapp.com/"
            target="_blank"
            rel="noreferrer"
          >
            VISIT
          </a>
        </div>
      </section>

      <section
        id="work"
        className="portfolio__section portfolio__section--work"
      >
        <div className="work__job">
          <h4>Unified Therapy</h4>

          <p className="work__text">
            My first freelance project. Features a multipage layout with React
            Router navigation. I increased my client's business leads with an
            easy to use email contact form.
          </p>

          <a
            className="btn btn--work"
            href="https://blempereur.com"
            target="_blank"
            rel="noreferrer"
          >
            VISIT
          </a>
        </div>

        <div className="u-divider--v"></div>

        <div className="work__job">
          <h4>Photography</h4>

          <p className="work__text">
            React project focusing on creating a basic image viewing carousel.
          </p>

          <a
            className="btn btn--work"
            href="https://timophoto.vercel.app/"
            target="_blank"
            rel="noreferrer"
          >
            VISIT
          </a>
        </div>
      </section>

      <section
        id="work"
        className="portfolio__section portfolio__section--work"
      >
        <div className="work__job">
          <h4>Raging Bull Training</h4>

          <p className="work__text">
            Business website with multipage layout using Node.js for navigation.
            Features a contact page with the Google Maps API.
          </p>

          <a
            className="btn btn--work"
            href="https://raging-bull-training.herokuapp.com/"
            target="_blank"
            rel="noreferrer"
          >
            VISIT
          </a>
        </div>

        <div className="u-divider--v"></div>

        <div className="work__job">
          <Box />
        </div>
      </section>
    </>
  );
};

export default Work;
