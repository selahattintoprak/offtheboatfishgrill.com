/**
 * A replacer for JSON.stringify to strip JSON-LD of illegal HTML entities
 * per https://www.w3.org/TR/json-ld11/#restrictions-for-contents-of-json-ld-script-elements
 */
export default (() => {
  // Replace per https://www.w3.org/TR/json-ld11/#restrictions-for-contents-of-json-ld-script-elements
  // Solution from https://stackoverflow.com/a/5499821/864313
  const entities = Object.freeze({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&apos;",
  });
  const replace = (t) => entities[t] || t;
  return (_, value) => {
    switch (typeof value) {
      case "object":
        // Omit null values.
        if (value === null) {
          return undefined;
        }
        return value; // JSON.stringify will recursively call replacer.
      case "number":
      case "boolean":
      case "bigint":
        return value; // These values are not risky.
      case "string":
        return value.replace(/[&<>'"]/g, replace);
      default: {
        // We shouldn't expect other types.
        isNever(value);
        // JSON.stringify will remove this element.
        return undefined;
      }
    }
  };
})();

// Utility: Assert never
function isNever(_) {}

function isObject(item) {
  return typeof item === "object" && !Array.isArray(item) && item !== null;
}
function isArray(item) {
  return typeof item !== "object" && Array.isArray(item) && item !== null;
}
export const getSchema = (source) => {
  const entities = Object.freeze({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&apos;",
  });
  const replace = (t) => entities[t] || t;
  return (_, value) => {
    switch (typeof value) {
      case "object":
        // Omit null values.
        if (value === null) {
          return undefined;
        }
        // return value; // JSON.stringify will recursively call replacer.
        return getSchema2(value, source);
      case "number":
      case "boolean":
      case "bigint":
        return value; // These values are not risky.
      case "string":
        return value.replace(/[&<>'"]/g, replace);
      default: {
        // We shouldn't expect other types.
        isNever(value);
        // JSON.stringify will remove this element.
        return undefined;
      }
    }
  };
};

const getSchema2 = (section, source) => {
  const { "@id": sectionId, "@type": sectionType } = section;
  let schema;
  if (sectionId && !sectionType) {
    schema = source.find(({ "@id": sourceId }) => sourceId == sectionId);
    //console.log("object schema by id", schema);
  } else {
    schema = section;
    //console.log("object schema", schema);
  }
  //console.log("object schema by else", schema);
  return schema;
};

const getSchema21 = (section, source) => {
  let schema;
  console.log("section, source", section, source);
  if (Array.isArray(section) && section.length > 0) {
    schema = section.map(({ "@id": sectionId, "@type": sectionType }) => {
      return (
        sectionId && !sectionType && source.find(({ "@id": sourceId, "@type": sourceType }) => sourceId == sectionId)
      );
    });
    console.log("isArray schema", schema);
  } else {
    const { "@id": sectionId, "@type": sectionType } = section;
    if (sectionId && !sectionType) {
      schema = source.find(({ "@id": sourceId }) => sourceId == sectionId);
      console.log("object schema by id", schema);
    } else {
      schema = section;
      console.log("object schema", schema);
    }
    console.log("object schema by else", schema);
  }
  return schema;
};
