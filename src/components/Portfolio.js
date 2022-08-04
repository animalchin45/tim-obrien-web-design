import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Nav from "./Nav";
import Hero from "./Hero";
import About from "./About";
import Work from "./Work";
import Contact from "./Contact";
import Top from "./Top";
import MobileNav from "./MobileNav";

const Portfolio = () => {
  gsap.registerPlugin(ScrollTrigger);
  const ref = useRef(null);

  useEffect(() => {
    const element = ref.current;
    gsap.fromTo(
      element.querySelector(".navbar"),
      {
        background: `linear-gradient(70deg, rgba(255,255,255, 1) 110%, rgba(27, 63, 110, .5) 120%)`,
      },
      {
        background: `linear-gradient(130deg, rgba(255,255,255, 1) 0%, rgba(27, 63, 110, .5) 25%)`,
        scrollTrigger: {
          trigger: element.querySelector(".portfolio"),
          start: "top top",
          end: "bottom bottom",
          scrub: true,
        },
      }
    );
  }, []);

  return (
    <div ref={ref} id="top" className="portfolio">
      <Nav />
      <MobileNav />
      <Hero />
      <About />
      <Work />
      <Contact />
      <Top />
    </div>
  );
};

export default Portfolio;
