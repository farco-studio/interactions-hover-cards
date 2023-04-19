import { gsap } from "gsap";
import SplitTextJS from "split-text-js";
import { hoverAnimation } from "./hoverAnimation";

const splitText = () => {
  const itemsTexts = document.querySelectorAll(".marquee span");
  const items = document.querySelectorAll(".item");
  const initialPosition = 260;
  let textChars = null;

  const setSplitText = (item) => {
    const splitText = new SplitTextJS(item, {
      type: "lines",
    });

    textChars = splitText.chars;
  };


  [...items].forEach((item) => {
    hoverAnimation(initialPosition, item);
  });

  [...itemsTexts].forEach((item) => {
    setSplitText(item);
  });

  gsap.set('.marquee span', {
    y: initialPosition,
  });
};

export { splitText };