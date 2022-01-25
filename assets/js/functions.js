export const populateObject = (keys, value, parent) => {
  keys.forEach((key, i) => (parent[key] = value[i]));
};

export const cssPower = (element, object, root) => {
  element.addEventListener("click", () => {
    for (const [key, value] of Object.entries(object)) {
      root.style.setProperty(key, value);
    }
  });
};

export default { populateObject, cssPower };
