import { cursorComponent } from "./cursor";
import { splitText } from "./splitText";
const isMobile = window.matchMedia("(max-width: 768px)").matches;


const init = () => {
  splitText();

  if (!isMobile) {
    cursorComponent();
  }
}

init();