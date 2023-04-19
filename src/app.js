import { cursorComponent } from "./cursor";
import { hoverCardAnimation } from "./hoverCardAnimation";
const isMobile = window.matchMedia("(max-width: 768px)").matches;


const init = () => {
  if (!isMobile) {
    cursorComponent();
    hoverCardAnimation();
  }
}

init();