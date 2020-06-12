function isObject(item) {
  return typeof item === "object" && !Array.isArray(item) && item !== null;
}
function isArray(item) {
  return typeof item !== "object" && Array.isArray(item) && item !== null;
}
export const toLowerCaseDash = (value) =>
  (value &&
    value
      .split(" ")
      .join("")
      .toLowerCase()
      .replace(/[^A-Za-z0-9]+/g, "")) ||
  "";
