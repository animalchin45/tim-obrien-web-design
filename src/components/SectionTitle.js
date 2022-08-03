import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const SectionTitle = ({ text }) => {
  gsap.registerPlugin(ScrollTrigger);
  const ref = useRef(null);

  useEffect(() => {
    const element = ref.current;
    gsap.to(element.querySelector(".portfolio__section__title"), {
      opacity: 1,
      y: 0,
      scrollTrigger: {
        trigger: element.querySelector(".portfolio__section__title"),
        toggleActions: "restart none none none",
      },
    });
  }, []);

  return (
    <div className="portfolio__section__title-area" ref={ref}>
      <h3 className="portfolio__section__title">{text}</h3>
    </div>
  );
};

export default SectionTitle;
