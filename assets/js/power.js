import { populateObject, cssPower } from "./functions.js";

let root = document.documentElement;

const listOfPKeys = [
  "--body-bg",
  "--rectangle-bg",
  "--sectionTitle-color",
  "--card-bg",
  "--cardText-color",
  "--cardItem-bg",
  "--icon-color",
  "--backgroundIcon-color",
];

// Buttons
const colorOne = document.getElementById("colorOne");
const colorTwo = document.getElementById("colorTwo");

const listOfValuesOne = [
  "#fff",
  "rgba(196, 196, 196, 1)",
  "#000",
  "rgba(196, 196, 196, 1)",
  "#000",
  "#e7e7e7",
  "rgba(35, 31, 32, 100%)",
  "rgba(35, 31, 32, 10%)",
];

const listOfValuesTwo = [
  "#000",
  "#fff",
  "#fff",
  "#1C1C1C",
  "#fff",
  "#1C1C1C",
  "#fff",
  "rgba(255, 255, 255, 40%)",
];

let colorOneStyle = {};
let colorTwoStyle = {};

populateObject(listOfPKeys, listOfValuesOne, colorOneStyle);
populateObject(listOfPKeys, listOfValuesTwo, colorTwoStyle);

cssPower(colorOne, colorOneStyle, root);
cssPower(colorTwo, colorTwoStyle, root);

// *************************************************************************

const colorThree = document.getElementById("colorThree");

const listOfValuesThree = [
  "#247CFF",
  "#D9F2ED",
  "#fff",
  "#fff",
  "#323232",
  "#D9F2EA",
  "#000",
  "#F2DFD9",
];

let colorThreeStyle = {};

populateObject(listOfPKeys, listOfValuesThree, colorThreeStyle);

cssPower(colorThree, colorThreeStyle, root);
