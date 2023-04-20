import { cursorComponent } from "./cursor";
import { textCardAnimation } from "./textCardAnimation";
const isMobile = window.matchMedia("(max-width: 768px)").matches;


const init = () => {
  if (!isMobile) {
    cursorComponent();
    textCardAnimation();
  }
}

init();