let fontSizeControlEl = document.querySelector("#font-size-control");
const textEl = document.querySelector("#text");

textEl.style.fontSize = `${fontSizeControlEl.value}px`;

const onFontSizeControlElChenge = () => {
  textEl.style.fontSize = `${fontSizeControlEl.value}px`;
};

fontSizeControlEl.addEventListener("input", onFontSizeControlElChenge);
