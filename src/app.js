import { cursorComponent } from "./cursor";
import { textCardAnimation } from "./textCardAnimation";

const isMobileViewport = () => window.matchMedia("(max-width: 768px)").matches;

let isMobile = isMobileViewport();

const handleResize = () => {
  init();
};

const init = () => {
  isMobile = isMobileViewport();

  if (!isMobile) {
    cursorComponent();
    textCardAnimation();
  }
}

window.addEventListener("load", () => init());
window.addEventListener("resize", () => handleResize());