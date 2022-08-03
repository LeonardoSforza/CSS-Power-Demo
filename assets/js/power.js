import { ultimateCSSPower } from "./functions.js";

// Buttons
const colorOne = document.getElementById("colorOne");
const colorTwo = document.getElementById("colorTwo");

const listOfValuesOne = {
  "--body-bg": "#fff",
  "--rectangle-bg": "rgba(196, 196, 196, 1)",
  "--sectionTitle-color": "#000",
  "--card-bg": "rgba(196, 196, 196, 1)",
  "--cardText-color": "#000",
  "--cardItem-bg": "#e7e7e7",
  "--icon-color": "rgba(35, 31, 32, 100%)",
  "--backgroundIcon-color": "rgba(35, 31, 32, 10%)",
};

ultimateCSSPower(listOfValuesOne, colorOne);

const listOfValuesTwo = {
  "--body-bg": "#000",
  "--rectangle-bg": "#fff",
  "--sectionTitle-color": "#fff",
  "--card-bg": "#1C1C1C",
  "--cardText-color": "#fff",
  "--cardItem-bg": "#1C1C1C",
  "--icon-color": "#fff",
  "--backgroundIcon-color": "rgba(255, 255, 255, 40%)",
};

ultimateCSSPower(listOfValuesTwo, colorTwo);

// *************************************************************************

const colorThree = document.getElementById("colorThree");

const listOfValuesThree = {
  "--body-bg": "#247CFF",
  "--rectangle-bg": "#D9F2ED",
  "--sectionTitle-color": "#fff",
  "--card-bg": "#fff",
  "--cardText-color": "#323232",
  "--cardItem-bg": "#D9F2EA",
  "--icon-color": "#000",
  "--backgroundIcon-color": "#F2DFD9",
};

ultimateCSSPower(listOfValuesThree, colorThree);
