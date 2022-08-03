export const ultimateCSSPower = (listOfChanges, btn) => {
  btn.addEventListener("click", () => {
    for (const [key, value] of Object.entries(listOfChanges)) {
      document.documentElement.style.setProperty(key, value);
    }
  });
};

export default { ultimateCSSPower };
