"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function AosInit() {
  useEffect(() => {
    AOS.init({
      duration: 300,
      offset: 0,
      once: false,
      easing: "ease-in-out-sine",
    });
    const timer = setTimeout(() => {
      const main = document.querySelector(".revealFx");
      if (main) {
        main.classList.remove("hideRevealFx");
      }
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  return null;
}
