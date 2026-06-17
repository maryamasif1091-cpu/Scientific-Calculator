import { sin, cos, tan, sqrt, log, ln, pi } from "./operations";
import { square, cube, power, factorial } from "./scientific";

let display = "";


export const getDisplay = () => display;

export const appendValue = (val: string) => {
  display += val;
};

export const clearAll = () => {
  display = "";
};


const preprocess = (expr: string) => {
  return expr
    .replace(/π/g, String(Math.PI))
    .replace(/\^/g, "**");
};

export const calculateResult = () => {
  try {
    const expr = preprocess(display);

   
    const result = new Function(
      "sin",
      "cos",
      "tan",
      "sqrt",
      "log",
      "ln",
      "pi",
      "square",
      "cube",
      "power",
      "factorial",
      `"use strict"; return (${expr})`
    )(
      sin,
      cos,
      tan,
      sqrt,
      log,
      ln,
      pi,
      square,
      cube,
      power,
      factorial
    );

    display = String(result);
  } catch (err) {
    display = "Error";
    console.log(err);
  }
};
export const deleteLast = () => {
  display = display.slice(0, -1);
};