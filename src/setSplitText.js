import SplitTextJS from "split-text-js";

const setSplitText = (item) => {
  const splitText = new SplitTextJS(item, {
    type: "lines",
  });

//   let textChars = splitText.chars;
};

export { setSplitText };