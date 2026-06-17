import { appendValue, calculateResult, clearAll, getDisplay, deleteLast } from "./calculator";

const screen = document.getElementById("screen") as HTMLElement;

function updateScreen() {
  screen.innerText = getDisplay() || "0";
}

document.querySelectorAll("button").forEach((btn) => {
  btn.addEventListener("click", () => {
    const value = btn.getAttribute("data-value");
    if (!value) return;
    if (value === "C")  {
      clearAll();
    } 
    else if (value === "=") {
      calculateResult();
    } 
    else if (value === "X") {   
      deleteLast();
    } 
    else {
      appendValue(value);
    }
    updateScreen();
  });
});

