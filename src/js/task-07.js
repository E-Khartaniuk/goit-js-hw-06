let fontSizeControlEl = document.querySelector("#font-size-control");
const textEl = document.querySelector("#text");

const onFontSizeControlElChenge = () => {
  const fontSizeValue = fontSizeControlEl.value;

  // textEl.style.fontSize = fontSizeControlEl.value + "px";
  textEl.style.fontSize = `${fontSizeValue}px`;
};

fontSizeControlEl.addEventListener("input", onFontSizeControlElChenge);
