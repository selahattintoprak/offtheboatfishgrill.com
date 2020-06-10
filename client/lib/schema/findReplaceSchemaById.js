// Utility: Assert never
function isNever(_) {}

export default (source) => {
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
        return getSchema(value, source);
      case "number":
      case "boolean":
      case "bigint":
        return value; // These values are not risky.
      case "string":
        return value; //value.replace(/[&<>'"]/g, replace);
      default: {
        // We shouldn't expect other types.
        isNever(value);
        // JSON.stringify will remove this element.
        return undefined;
      }
    }
  };
};

const getSchema = (section, source) => {
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
